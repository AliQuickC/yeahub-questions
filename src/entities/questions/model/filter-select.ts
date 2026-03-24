import type { SetURLSearchParams } from 'react-router-dom';
import type { FiltersType } from '../../../shared/type/FilterTypes';
import { urlCode } from '../../../shared/utility/url-code';

export function isSelectedCheck(
  id: string,
  type: FiltersType,
  selected: string | string[] | null
): boolean {
  if (selected === null) {
    return false;
  }
  if (type === 'specializations' && id === selected) {
    return true;
  }
  if (type === 'skills' || type === 'rate' || type === 'complexity') {
    return selected.includes(id);
  }
  return false;
}

const paramsSingleSelect = (
  type: 'specializations',
  id: string,
  setParams: SetURLSearchParams
) => {
  setParams((searchParams) => {
    const paramValue = searchParams.get(type);
    if (paramValue === null || paramValue !== id.toString()) {
      searchParams.set(type, id.toString());
    } else {
      searchParams.delete(type);
    }
    return searchParams;
  });
};

const paramsMultipleSelect = (
  type: Exclude<FiltersType, 'specializations'>,
  id: string,
  setParams: SetURLSearchParams
) => {
  setParams((searchParams) => {
    const newParamValue = type === 'complexity' ? urlCode(id) : id;
    const oldParamsValue = searchParams.get(type);

    if (oldParamsValue === null) {
      searchParams.set(type, newParamValue);
    } else {
      const existingParameters = oldParamsValue.split(',');

      const selectParamIndex = existingParameters.indexOf(newParamValue);
      if (selectParamIndex === -1) {
        existingParameters.push(newParamValue);
        searchParams.set(type, existingParameters.join(','));
      } else if (existingParameters.length === 1) {
        searchParams.delete(type);
      } else {
        existingParameters.splice(selectParamIndex, 1);
        searchParams.set(type, existingParameters.join(','));
      }
    }
    return searchParams;
  });
};

export const changeFilterParamHandler = (
  type: FiltersType,
  id: number | string,
  setParams: SetURLSearchParams
): void => {
  if (type === 'specializations') {
    paramsSingleSelect(type, id.toString(), setParams);
  } else {
    paramsMultipleSelect(type, id.toString(), setParams);
  }
};

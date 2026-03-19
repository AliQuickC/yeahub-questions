import s from './Filter.module.sass';
import { useSearchParams } from 'react-router-dom';
import type { FilterItemList, FiltersType } from '../../types/FilterTypes';
import { decodeUrl } from '../../utility/url-code';
import { changeFilterParamHandler, isSelectedCheck } from '../utils/select';

interface Props {
  type: FiltersType;
  header: string;
  data: FilterItemList;
  selected: string | null;
}

export function Filter({ type, header, data, selected }: Props) {
  const [, setSearchParams] = useSearchParams();

  let selectedItems: string | string[] | null;
  if (selected === null) {
    selectedItems = null;
  } else if (type === 'skills' || type === 'rate') {
    selectedItems = selected.split(',');
  } else if (type === 'complexity') {
    selectedItems = selected.split(',').map((item) => decodeUrl(item));
  } else {
    selectedItems = selected;
  }

  const specializationsList = data.map((item) => {
    const isSelected = isSelectedCheck(item.id.toString(), type, selectedItems);
    return (
      <li
        key={item.id}
        className={s.ListItem + (isSelected ? ` ${s.ActiveListItem}` : '')}
        onClick={() => {
          changeFilterParamHandler(type, item.id, setSearchParams);
        }}
      >
        {item.title}
      </li>
    );
  });

  return (
    <div>
      <h3>{header}</h3>
      <ul className={s.FilterList}>{specializationsList}</ul>
    </div>
  );
}

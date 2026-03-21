import s from './Filter.module.sass';
import { useSearchParams } from 'react-router-dom';
import type { FilterItemList, FiltersType } from '../../types/FilterTypes';
import { changeFilterParamHandler, isSelectedCheck } from '../utils/select';
import { Loader } from '../../ui';
import { useSelectedFilters } from '../../hooks/useSelectedFilters';

interface Props {
  type: FiltersType;
  header: string;
  data: FilterItemList | undefined;
  isLoading?: boolean;
  isError?: boolean;
}

export function Filter({ type, header, data, isLoading, isError }: Props) {
  const [, setSearchParams] = useSearchParams();

  const selectedItems = useSelectedFilters(type);

  let filtersList;
  if (isLoading) {
    filtersList = <Loader width="100px" height="70px" />;
  } else if (isError || !data) {
    filtersList = (
      <div
        style={{ color: 'red' }}
      >{`Не удалось загрузить список фильтров, для раздела "${header}" !`}</div>
    );
  } else {
    filtersList = data.map((item) => {
      const isSelected = isSelectedCheck(
        item.id.toString(),
        type,
        selectedItems
      );
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
  }

  return (
    <div>
      <h3>{header}</h3>
      <ul className={s.FilterList}>{filtersList}</ul>
    </div>
  );
}

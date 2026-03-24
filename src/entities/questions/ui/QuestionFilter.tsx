import s from './QuestionFilter.module.sass';
import { useSearchParams } from 'react-router-dom';
import {
  changeFilterParamHandler,
  isSelectedCheck,
} from '../model/filter-select';
import { useSelectedFilters } from '../../../shared/hooks/useSelectedFilters';
import type {
  FilterItemList,
  FiltersType,
} from '../../../shared/type/FilterTypes';
import { useState } from 'react';
import { SwitchButton } from '../../../shared/ui/SwitchButton/SwitchButton';
import { Loader } from '../../../shared/ui/Loader/Loader';

interface Props {
  type: FiltersType;
  header: string;
  data: FilterItemList | undefined;
  isLoading?: boolean;
  isError?: boolean;
  haveSwitchButton?: boolean;
  SwitchButtonHandler?: () => void;
}

const checkedTitle = 'Посмотреть все';
const uncheckedTitle = 'Скрыть';

export function QuestionFilter({
  type,
  header,
  data,
  isLoading,
  isError,
  haveSwitchButton,
}: Props) {
  const [hidden, setHidden] = useState<boolean>(true);
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

  const switchHandler = () => {
    setHidden((value) => !value);
  };

  return (
    <div>
      <h3>{header}</h3>
      <ul className={s.FilterList + ` ${hidden ? s.FilterHidden : ''}`}>
        {filtersList}
      </ul>
      {haveSwitchButton ? (
        <SwitchButton
          checkedTitle={checkedTitle}
          uncheckedTitle={uncheckedTitle}
          checked={hidden}
          switchHandler={switchHandler}
        />
      ) : null}
    </div>
  );
}

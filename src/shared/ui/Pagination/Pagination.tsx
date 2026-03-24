import s from './Pagination.module.sass';
import { usePaginationQuestions } from '../../hooks/usePaginationQuestions';
import { NextIcon, PrevIcon } from '../../assets';

interface Props {
  page: number;
  limit: number;
  total: number;
}

export function Pagination({ total, limit, page }: Props) {
  const totalPages = Math.ceil(total / limit);

  const { handleNextPage, handlePrevPage, handlePageClick } =
    usePaginationQuestions();

  return (
    <div className={s.Pagination}>
      <button
        onClick={() => {
          handlePrevPage(page);
        }}
        className={s.Arrow}
        disabled={page <= 1}
      >
        <PrevIcon />
      </button>

      {[...Array(totalPages)].map((_, index) => {
        return (
          <button
            onClick={() => {
              handlePageClick(index + 1);
            }}
            className={s.PageNumber}
            disabled={index + 1 === page}
            key={index}
          >
            {index + 1}
          </button>
        );
      })}

      <button
        onClick={() => {
          handleNextPage(page, totalPages);
        }}
        className={s.Arrow}
        disabled={page >= totalPages}
      >
        <NextIcon />
      </button>
    </div>
  );
}

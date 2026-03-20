import s from './Pagination.module.sass';
import { usePaginationQuestions } from '../../../shared/hooks/usePaginationQuestions';

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
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.77495 4.55806C9.01903 4.80214 9.01903 5.19786 8.77495 5.44194L4.84189 9.375H16.6663C17.0115 9.375 17.2913 9.65482 17.2913 10C17.2913 10.3452 17.0115 10.625 16.6663 10.625H4.84189L8.77495 14.5581C9.01903 14.8021 9.01903 15.1979 8.77495 15.4419C8.53087 15.686 8.13514 15.686 7.89107 15.4419L2.89107 10.4419C2.64699 10.1979 2.64699 9.80214 2.89107 9.55806L7.89107 4.55806C8.13514 4.31398 8.53087 4.31398 8.77495 4.55806Z"
            fill="#6A0BFF"
          />
        </svg>
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
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2244 15.4419C11.4685 15.686 11.8642 15.686 12.1083 15.4419L17.1083 10.4419C17.3524 10.1979 17.3524 9.80214 17.1083 9.55806L12.1083 4.55806C11.8642 4.31398 11.4685 4.31398 11.2244 4.55806C10.9803 4.80214 10.9803 5.19787 11.2244 5.44194L15.1575 9.375L3.33301 9.375C2.98783 9.375 2.70801 9.65482 2.70801 10C2.70801 10.3452 2.98783 10.625 3.33301 10.625L15.1575 10.625L11.2244 14.5581C10.9803 14.8021 10.9803 15.1979 11.2244 15.4419Z"
            fill="#6A0BFF"
          />
        </svg>
      </button>
    </div>
  );
}

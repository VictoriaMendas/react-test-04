import css from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.btnLoadMore}>
      <button className={css.btnMore} type="button" onClick={onClick}>
        Load More
      </button>
    </div>
  );
}

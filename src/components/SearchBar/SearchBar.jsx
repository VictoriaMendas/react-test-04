import toast from "react-hot-toast";
import css from "./Searchbar.module.css";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim().toLowerCase();

    if (query === "") {
      toast.error("Fullfill the empty stroke");
      return;
    }
    onSubmit(query);

    e.target.reset();
  };
  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.formInput}>
        <IoSearchOutline className={css.searchBtn} />
        <input
          className={css.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
        />
      </form>
    </header>
  );
}

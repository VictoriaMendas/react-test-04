import toast from "react-hot-toast";

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
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.trim().toLowerCase();

    if (query === "") {
      return "Fullfil the space";
    }
    onSubmit(query);
    console.log(onSubmit);
    handleSubmit.reset();
  };
  return (
    <header>
      <form>
        <input
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

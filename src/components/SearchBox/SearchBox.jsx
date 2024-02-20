import css from "./SearchBox.module.css";
export const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.search}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
};

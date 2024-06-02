import "./toggle.css";

export const Toggle = ({handleChange, isChecked, isText}) => {
  return(
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">{isText? (isChecked? 'Dark Mode' : 'Light Mode') : ''} </label>

    </div>
  );
}
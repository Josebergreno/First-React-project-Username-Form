import styles from "./InputForm.module.css";
import Inputs from "./Inputs";

const InputForm = (props) => {
  return (
    <div>
      <form type="submit" className={styles["form-box"]}>
        <label>Username</label>
        <input type="text" placeholder="please enter a username" />

        <label>Age (Years)</label>
        <input
          type="number"
          min="0"
          max="100"
          placeholder="please enter your age"
        ></input>

        <button onSubmit={props.passProp} type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};

export default InputForm;

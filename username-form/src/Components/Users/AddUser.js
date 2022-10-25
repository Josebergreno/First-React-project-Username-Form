import { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  const [userInput, setUser] = useState("");
  const [ageInput, setAge] = useState("");
  const [errorModal, setErrorModal] = useState();

  const addUserInputHandler = (e) => {
    e.preventDefault();
    if (userInput.trim().length === 0 || ageInput.trim().length === 0) {
      setErrorModal({
        title: "Error: input fields can't be empty",
        message: "Please enter valid username and age",
      });
      return;
    }
    if (+ageInput < 1) {
      setErrorModal({
        title: "Error: invalid age input",
        message: "Please enter an age higher than 0",
      });
      return;
    }
    props.onAddUser(userInput, ageInput);

    setAge("");
    setUser("");
  };
  const userInputHandler = (e) => {
    setUser(e.target.value);
  };

  const ageInputHandler = (e) => {
    setAge(e.target.value);
  };

  const errorHandler = () => {
    setErrorModal(null);
  };

  return (
    <div>
      {errorModal && (
        <Modal
          title={errorModal.title}
          message={errorModal.message}
          onClick={errorHandler}
        ></Modal>
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserInputHandler}>
          <label htmlFor="username">Username</label>
          <input
            onChange={userInputHandler}
            id="username"
            className="username"
            type="text"
            value={userInput}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            onChange={ageInputHandler}
            id="age"
            className="age"
            type="number"
            value={ageInput}
          ></input>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

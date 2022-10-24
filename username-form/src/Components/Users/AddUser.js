import { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [userInput, setUser] = useState("");
  const [ageInput, setAge] = useState("");

  const userInputHandler = (e) => {
    setUser(e.target.value);
  };

  const ageInputHandler = (e) => {
    setAge(e.target.value);
  };
  const addUserHandler = (e) => {
    e.preventDefault();
    if (userInput.trim().length === 0 || ageInput === 0) return;
    if (+ageInput < 1) return;
    console.log(userInput, ageInput);

    setAge("");
    setUser("");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
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
  );
};

export default AddUser;

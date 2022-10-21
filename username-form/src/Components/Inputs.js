import styles from "./Inputs.module.css";

const Inputs = () => {
  const outputs = [{ Max: 31 }, { Joseph: 27 }];
  console.log(outputs);

  const addNewUser = () => {};

  return (
    <section className={styles["input-section"]}>
      <div>Max (31 years old)</div>
      <div>Joseph (27 years old)</div>
    </section>
  );
};

export default Inputs;

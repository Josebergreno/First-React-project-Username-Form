import "./App.css";
import InputForm from "./Components/InputForm";
import Inputs from "./Components/Inputs";

function App() {
  const functionProp = (e) => {
    e.preventDefault();
    console.log(1);
  };

  return (
    <div>
      <InputForm passProp={functionProp}></InputForm>
      <Inputs></Inputs>
      <Inputs></Inputs>
    </div>
  );
}

export default App;

import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const users = () => {
    console.log(1);
  };

  return (
    <div>
      <AddUser />
      <UsersList onUsers={users} />
    </div>
  );
}

export default App;

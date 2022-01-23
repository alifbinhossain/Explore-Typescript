import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext?.setUser({
      name: "Alif Bin Hossain",
      email: "alifahmed47@gmail.com",
    });
  };
  const handleLogout = () => {
    userContext?.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>

      <p>User Name : {userContext?.user?.name}</p>
      <p>User Email : {userContext?.user?.email}</p>
    </div>
  );
};

export default User;

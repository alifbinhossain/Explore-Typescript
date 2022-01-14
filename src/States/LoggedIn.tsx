import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const LoggedIn = () => {
  const [user, setUser] = useState<null | AuthUser>(null);

  const handleLogIn = () => {
    setUser({
      name: "Alif",
      email: "alifahmed47@gmail.com",
    });
  };
  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <div>
      {!user && <button onClick={handleLogIn}>Log In </button>}
      {user && <button onClick={handleLogOut}>Log Out </button>}
      <p>User Name {user?.name}</p>
      <p>USer Email {user?.email}</p>
    </div>
  );
};

export default LoggedIn;

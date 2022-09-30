import PhysicsList from "./components/Physics/PhysicsList";
import React, { useContext } from "react";
import Header from "./components/Header/Header";
import AuthContext from "./store/auth-context";
import LoginForm from "./components/Authentication/LoginForm";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <>
      <Header />
      <main>
        {ctx.isLoggedIn && <PhysicsList />}
        {!ctx.isLoggedIn && <LoginForm />}
      </main>
    </>
  );
}

export default App;

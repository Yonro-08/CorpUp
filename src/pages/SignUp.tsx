import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { userProps } from "types/user";

import styles from "./Sign.module.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
  });

  const signUpHandler = (e: MouseEvent) => {
    e.preventDefault();
    const users: userProps[] =
      JSON.parse(localStorage.getItem("users") as string) || [];

    if (users.length > 0) {
      for (const obj of users) {
        if (obj.email === user.email) return;
      }
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <section className={styles.sign}>
      <div className="container">
        <div className={styles.container}>
          <h2 className="title">Sign Up</h2>
          <form className={styles.form}>
            <Input
              type="text"
              title="Email"
              value={user.email}
              onChange={(event) => {
                const newUser = { ...user };
                newUser.email = event.target.value;
                setUser(newUser);
              }}
              placeholder="example@gmail.com"
              required
            />
            <Input
              type="password"
              title="Password"
              value={user.password}
              onChange={(event) => {
                const newUser = { ...user };
                newUser.password = event.target.value;
                setUser(newUser);
              }}
              placeholder="**********************"
              required
            />
            <Input
              type="text"
              title="First name"
              value={user.name}
              onChange={(event) => {
                const newUser = { ...user };
                newUser.name = event.target.value;
                setUser(newUser);
              }}
              placeholder="Andrey"
            />
            <Input
              type="text"
              title="Second name"
              value={user.surname}
              onChange={(event) => {
                const newUser = { ...user };
                newUser.surname = event.target.value;
                setUser(newUser);
              }}
              placeholder="Filipov"
            />
            <div className={styles.btnContainer}>
              <Button
                className={styles.btn}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/signin");
                }}
              >
                Sign In
              </Button>
              <Button
                className={styles.btn}
                onClick={(e) => {
                  signUpHandler(e);
                  navigate("/");
                }}
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

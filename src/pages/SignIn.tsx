import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { userProps } from "types/user";

import styles from "./Sign.module.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const signInHandler = (e: MouseEvent) => {
    e.preventDefault();
    const users: userProps[] = JSON.parse(
      localStorage.getItem("users") as string
    );

    if (users) {
      for (const obj of users) {
        if (obj.email === user.email && obj.password === user.password) {
          navigate("/");
          localStorage.setItem("user", JSON.stringify(user));
          return;
        }
      }
    }
    alert("Не верный логин или пароль");
  };

  window.addEventListener("keypress", (e) => {
    console.log(e);
  });

  return (
    <section className={styles.sign}>
      <div className="container">
        <div className={styles.container}>
          <h2 className="title">Sign In</h2>
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
            <a className={styles.forgot}>Forgot password?</a>
            <div className={styles.btnContainer}>
              <Button
                className={styles.btn}
                onKeyPress={(e) => {
                  if (e.key === "Enter") return;
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/signup");
                }}
              >
                Sign Up
              </Button>
              <Button
                className={styles.btn}
                onKeyPress={(e) => {
                  e.stopPropagation();
                  if (e.key === "Enter") return;
                }}
                onClick={(e) => {
                  signInHandler(e);
                }}
              >
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

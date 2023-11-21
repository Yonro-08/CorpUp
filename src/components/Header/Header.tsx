import { NavLink } from "react-router-dom";

import Logo from "../Logo/Logo";
import { useAppSelector } from "hooks/redux";

import styles from "./Header.module.css";
import stylesBtn from "../Button/Button.module.css";

const Header = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.container}>
          <Logo />
          {isAuth && (
            <nav className={styles.btnContainer}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${stylesBtn.button} ${stylesBtn.active}`
                    : stylesBtn.button
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/documents"
                className={({ isActive }) =>
                  isActive
                    ? `${stylesBtn.button} ${stylesBtn.active}`
                    : stylesBtn.button
                }
              >
                Documents
              </NavLink>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

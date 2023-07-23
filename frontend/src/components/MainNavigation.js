import classes from "./MainNavigation.module.css";
import { Outlet, NavLink } from "react-router-dom";
import { useNavigation } from "react-router-dom";
function MainNavigation() {
  const Navigation = useNavigation();
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Events
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {Navigation.state === "loading" ? <div>Loading...</div> : <Outlet />}
    </>
  );
}

export default MainNavigation;

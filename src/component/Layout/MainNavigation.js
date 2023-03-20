import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";
import { useContext } from "react";
function MainNavigation() {
  const favoriteCtx = useContext(FavoritesContext);
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to="/">AllMeetupPages</Link>
            </li>
            <li>
              <Link to="/favorites">
                favorites
                <span className={classes.badge}>
                  {favoriteCtx.totalFavorites}
                </span>
              </Link>
            </li>
            <li>
              <Link to="/new-meetup">new-meetup</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;

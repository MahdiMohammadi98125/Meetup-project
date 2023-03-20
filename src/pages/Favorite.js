import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../component/meetup/MeetupList";

function FavoritePages() {
  const favoriteCtx = useContext(FavoritesContext);
  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <p>you got no favorites yet. starting adding some</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }
  return (
    <section>
      <h1>My favorites</h1>
      {content}
    </section>
  );
}
export default FavoritePages;

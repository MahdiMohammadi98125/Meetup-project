// import Todo from "./component/Todo";
// function App() {
//   return (
//     <div>
//       <h1>My todos</h1>
//       <Todo text="work with git&github" />
//       <Todo text="work with jira" />
//     </div>
//   );
// }

// export default App;
import { Route, Routes } from "react-router-dom";
import AllMeetupPages from "./pages/AllMeetup";
import FavoritePages from "./pages/Favorite";
import NewMeetup from "./pages/NewMeetup";
import Layout from "./component/Layout/Layout";
import { FavoritesContextProvider } from "../src/store/favorites-context";
function App() {
  return (
    <FavoritesContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupPages />} />
          <Route path="favorites" element={<FavoritePages />} />
          <Route path="new-meetup" element={<NewMeetup />} />
        </Routes>
      </Layout>
    </FavoritesContextProvider>
  );
}

export default App;

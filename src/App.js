import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavouritesPage from "./pages/Favourites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>

        <Route path="/new-meetups" exact>
          <NewMeetupsPage />
        </Route>

        <Route path="/favourites" exact>
          <FavouritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

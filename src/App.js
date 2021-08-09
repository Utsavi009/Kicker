import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import PlayerTable from "./components/PlayerTable"
import PlayerInfo from "./components/PlayerInfo"

const App = () =>  {

  return (
    <div className="App">
      <Router>
          <Switch>
          <Route exact path="/">
            <Home />
            </Route>
            <Route exact path="/playerTable">
              <PlayerTable />
            </Route>
            <Route exact path="/playerInfo">
              <PlayerInfo />
            </Route>
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;

import "./App.css";
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <div className="col-10 mx-auto col-md-8 mt-5">
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={Register} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={Login} />

            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;

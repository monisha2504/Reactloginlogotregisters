import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import createUser from "./component/createUser";
import ListAllUsers from "./component/listAllUsers";
import UpdateUser from "./component/updateUser";
import ViewUser from "./component/viewUser";
import Register from "./component/Register";
import Login from "./component/login";
import Home from "./component/home";
import customer from "./component/customer";
import AdminHome from "./component/adminHome";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/customer" exact component={customer}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/users" exact component={ListAllUsers}></Route>
          <Route path="/create-user" exact component={createUser}></Route>
          <Route
            path="/update-user/:userid"
            exact
            component={UpdateUser}
          ></Route>
          <Route path="/view-user/:userid" exact component={ViewUser}></Route>
          <Route path="/admin-home" exact component={AdminHome}></Route>
          <div className="ss" style={{ height: "750px" }}>
            <Route path="/register" exact component={Register}></Route>
            <Route path="/login" exact component={Login}></Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

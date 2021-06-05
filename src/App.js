
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import FooterComponent from './component/footercomponent';
import HeaderComponent from './component/headercomponent';
import createUser from './component/createUser';
import ListAllUsers from './component/listAllUsers';
import UpdateUser from './component/updateUser';
import ViewUser from './component/viewUser';
import Register from './component/Register';


function App() {
  return (
    <div>
    <Router>
         <HeaderComponent/>
            <div className="container">
              <Switch>
                  <Route path= "/" exact component = {Register}></Route>
                  <Route path= "/register" exact component = {Register}></Route>
                  <Route path= "/users" exact component = {ListAllUsers}></Route>
                  <Route path= "/create-user" exact component = {createUser}></Route>
                  <Route path= "/update-user/:userid" exact component = {UpdateUser}></Route>
                  <Route path= "/view-user/:userid" exact component = {ViewUser}></Route>
              </Switch>
            </div>
         <FooterComponent/> 
    </Router>
  </div>
);
}
export default App;

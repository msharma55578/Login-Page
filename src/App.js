import logo from './logo.svg';
import Login from "./components/Login"
import Register from "./components/Register"
import Forget from "./components/Forget"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="Appi">
      <Switch>
				<Route path="/" component={Login} exact/>
				<Route path="/forget" component={Forget} />
				{/* <Route path="/create" component={CreatePage} /> */}
				{/* <Route path='/publish' exact component={Publish}/> */}
			</Switch>
    </div>
  );
}

export default App;

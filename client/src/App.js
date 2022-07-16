import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/01-LandingPage';
import Error from './components/02-Error.jsx';
import Home from './components/03-Home.jsx';
import Navbar from './components/04-NavBar';
import Detail from './components/09-Detail';
import Create from './components/10-Create';
import Activities from './components/11-Activities';
/*  */
function App() {
	return (
		<div className='App'>
			<Route path='/' component={Navbar} />
			<Switch>
				<Route exact path='/' component={LandingPage} />
				<Route exact path='/home' component={Home} />
				<Route exact path='/detail/:id' component={Detail} />
				<Route exact path='/createActivity' component={Create} />
				<Route exact path='/activity' component={Activities} />
				<Route component={Error} />
			</Switch>
		</div>
	);
}

export default App;

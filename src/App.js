import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Journey from './components/aboutMe/journey';
import Achievements from './components/aboutMe/achievements';
import Blog from './components/blog/blog';
import BlogPage from './components/blog/blog_page';
import Consult from './components/consult/consult';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
// import Login from './components/Login';
// import Logout from './components/Logout';
import LoginHooks from './components/login/LoginHooks';
import LogoutHooks from './components/logout/LogoutHooks';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact from="/login" render ={props => <div><LoginHooks/> <LogoutHooks/></div>} />
          <Route exact from="/" render={props => <div> <Navbar {...props}/><Home /></div> }/>
          <Route exact from="/aboutMe" render={props => <div> <Navbar {...props}/><Journey /></div> }/>
          <Route exact from="/aboutMe/achievements" render={props => <div> <Navbar {...props}/><Achievements /></div> }/>
          <Route exact from="/blog" render={props => <div> <Navbar {...props}/><Blog /></div> }/>
          <Route exact from="/blog/blogpage/:id" render={props => <div> <BlogPage {...props}/></div> }/>
          <Route exact from="/consult" render={props => <div> <Navbar {...props}/><Consult /></div> }/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

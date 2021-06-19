import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Journey from './components/aboutMe/journey';
import Achievements from './components/aboutMe/achievements';
import Blog from './components/blog/blog';
import BlogPage from './components/blog/blog_page';
import Consult from './components/consult/consult';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact from="/" render={props => <div> <Navbar {...props}/><br /><br /><br /><br /><Home /></div> }/>
          <Route exact from="/aboutMe" render={props => <div> <Navbar {...props}/><br /><br /><Journey /></div> }/>
          <Route exact from="/achievements" render={props => <div> <Navbar {...props}/><br /><br /><Achievements /></div> }/>
          <Route exact from="/blog" render={props => <div> <Navbar {...props}/><br /><br /><Blog /></div> }/>
          <Route exact from="/blog/blogpage" render={props => <div> <Navbar {...props}/><br /><br /><BlogPage /></div> }/>
          <Route exact from="/consult" render={props => <div> <Navbar {...props}/><br /><br /><Consult /></div> }/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

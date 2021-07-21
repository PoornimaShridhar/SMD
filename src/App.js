import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Journey from './components/aboutMe/journey';
import Achievements from './components/aboutMe/achievements';
import Blog from './components/blog/blog';
import BlogPage from './components/blog/blog_page';
import Consult from './components/consult/consult';
import Testimonials from './components/testimonials/testimonials';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact from="/" render={props => <div> <Navbar {...props}/><Home /></div> }/>
          <Route exact from="/aboutMe" render={props => <div> <Navbar {...props}/><Journey /></div> }/>
          <Route exact from="/aboutMe/achievements" render={props => <div> <Navbar {...props}/><Achievements /></div> }/>
          <Route exact from="/blog" render={props => <div> <Navbar {...props}/><Blog /></div> }/>
          <Route exact from="/blog/blogpage/:id" render={props => <div> <Navbar {...props}/><BlogPage {...props}/></div> }/>
          <Route exact from="/consult" render={props => <div> <Navbar {...props}/><Consult /></div> }/>
          <Route exact from="/testimonials" render={props => <div> <Navbar {...props}/><Testimonials /></div> }/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

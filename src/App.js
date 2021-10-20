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
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          
          <Route exact from="/aboutMe" render={props => <div> <Navbar {...props}/><Journey /><Footer/></div> }/>
          <Route exact from="/achievements" render={props => <div> <Navbar {...props}/><Achievements /><Footer/></div> }/>
          <Route exact from="/blog" render={props => <div> <Navbar {...props}/><Blog /><br/><br/><br/><br/><br/><br/><br/><br/><br/><br /><Footer/></div> }/>
          <Route exact from="/blog/blogpage/:id" render={props => <div> <Navbar {...props}/><BlogPage {...props}/><Footer/></div> }/>
          <Route exact from="/consult" render={props => <div> <Navbar {...props}/><Consult /><Footer/></div> }/>
          <Route exact from="/testimonials" render={props => <div> <Navbar {...props}/><Testimonials /></div> }/>
          <Route exact from="/" render={props => <div> <Navbar {...props}/><Home /><Footer/></div> }/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

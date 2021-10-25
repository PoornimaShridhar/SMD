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
          
          <Route exact path="/aboutMe" render={props => <div> <Navbar {...props}/><Journey /><Footer/></div> }/>
          <Route exact path="/achievements" render={props => <div> <Navbar {...props}/><Achievements /><Footer/></div> }/>
          <Route exact path="/blog" render={props => <div> <Navbar {...props}/><Blog /><br/><br/><br/><br/><br/><br/><br/><br/><br/><br /><Footer/></div> }/>
          <Route exact path="/blog/blogPage/:id" render={props => <div> <Navbar {...props}/><BlogPage {...props}/><Footer/></div> }/>
          <Route exact path="/consult" render={props => <div> <Navbar {...props}/><Consult /><Footer/></div> }/>
          <Route exact path="/testimonials" render={props => <div> <Navbar {...props}/><Testimonials /></div> }/>
          <Route exact path="/" render={props => <div> <Navbar {...props}/><Home /><Footer/></div> }/>
          <Route render={props => <div> <Navbar {...props}/><Home /><Footer/></div> }/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

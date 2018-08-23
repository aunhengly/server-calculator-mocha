import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/projects" component={Projects} />
        <Switch>
          <Route exact path="/projects" component={ProjectGallery} />
          <Route path="/projects/:projectId" component={ProjectDetails} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
};

const Home = () => {
  return <div>I am the home</div>;
};

const Footer = () => {
  return <div>I am the footer</div>;
};

const About = () => {
  return <div>I am the About Page</div>;
};

const Contacts = () => {
  return <div>I am the Contacts Page</div>;
};

const Projects = () => {
  return <div>I am the Projects Page</div>;
};

const ProjectDetails = ({ match }) => {
  return <div>{match.params.projectId}</div>;
};

const ProjectGallery = props => {
  return (
    <ul>
      <li>
        <Link to="projects/Hangly's Face">Hengly's Face</Link>
      </li>
      <li>
        <Link to="projects/Art's Face">Art's Face</Link>
      </li>
      <li>
        <Link to="projects/Cameron's Face">Cameron's Face</Link>
      </li>
      <li>
        <Link to="projects/Eric's Face">Eric's Face</Link>
      </li>
      <li>
        <Link to="projects/Ella's Face">Ella's Face</Link>
      </li>
    </ul>
  );
};

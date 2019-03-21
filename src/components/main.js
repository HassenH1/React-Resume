import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Resume from './resume';
import Aboutme from './aboutme';
import Project from './project';
import Contact from './contact';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/aboutme" component={Aboutme} />
    <Route exact path="/project" component={Project} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
)

export default Main;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as Icon from 'react-feather';

import './App.scss';

import Home from './components/home';
import Navbar from './components/navbar_new';
import Links from './components/links';
import FAQ from './components/faq';
import PatientDB from './components/patientdb';
import DeepDive from './components/deepdive';
import Resources from './components/resources';
import State from './components/state';

const history = require('history').createBrowserHistory;

function App() {
  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      animationDelayForNavbar: 0.2,
      showInNavbar: true,
    },
    {
      pageLink: '/demographics',
      view: PatientDB,
      displayName: 'Demographics',
      animationDelayForNavbar: 0.3,
      showInNavbar: true,
    },
    {
      pageLink: '/deepdive',
      view: DeepDive,
      displayName: 'Deep Dive',
      animationDelayForNavbar: 0.4,
      showInNavbar: true,
    },
    {
      pageLink: '/links',
      view: Links,
      displayName: 'Helpful Links',
      animationDelayForNavbar: 0.5,
      showInNavbar: true,
    },
    {
      pageLink: '/essentials',
      view: Resources,
      displayName: 'Essentials',
      animationDelayForNavbar: 0.6,
      showInNavbar: true,
    },
    {
      pageLink: '/faq',
      view: FAQ,
      displayName: 'FAQ',
      animationDelayForNavbar: 0.7,
      showInNavbar: true,
    },
    {
      pageLink: '/state/:stateName',
      view: State,
      displayName: 'State',
      animationDelayForNavbar: 0.8,
      showInNavbar: false,
    },
  ];

  return (
    <div className="App">
      <Router history={history}>
        <Route
          render={({location}) => (
            <div className="Almighty-Router">
              <Navbar pages={pages} />
              <Route exact path="/" render={() => <Redirect to="/" />} />
              <Switch location={location}>
                {pages.map((page, i) => {
                  return (
                    <Route
                      exact
                      path={page.pageLink}
                      component={page.view}
                      key={i}
                    />
                  );
                })}
                <Redirect to="/" />
              </Switch>
            </div>
          )}
        />
      </Router>

      <footer className="fadeInUp" style={{animationDelay: '2s'}}>
        {/* <img
          src="/icon.png"
          alt="https://www.covid19india.org | Coronavirus cases live dashboard"
        />*/}

        <h5>We stand with everyone fighting on the frontlines</h5>
        <div className="link">
          <a
            href="https://github.com/covid19india"
            target="_blank"
            rel="noopener noreferrer"
          >
            covid19india
          </a>
        </div>
        <a
          href="https://github.com/covid19india/covid19india-react"
          className="button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.GitHub />
          <span>Open Sourced on GitHub</span>
        </a>
        <a
          className="button excel"
          href="https://bit.ly/patientdb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.Database />
          <span>Crowdsourced Patient Database&nbsp;</span>
        </a>
        <a
          href="https://twitter.com/covid19indiaorg"
          target="_blank"
          rel="noopener noreferrer"
          className="button twitter"
          style={{justifyContent: 'center'}}
        >
          <Icon.Twitter />
          <span>View updates on Twitter</span>
        </a>
        <a
          href="https://bit.ly/covid19crowd"
          className="button telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.MessageCircle />
          <span>Join Telegram to Collaborate!</span>
        </a>
      </footer>
    </div>
  );
}

export default App;

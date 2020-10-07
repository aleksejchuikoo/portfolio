import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Route } from 'react-router-dom';

import './App.scss';

import Intro from './components/Intro/Intro';
import Home from './pages/Home/Home';
import Siderbar from './components/Sidebar/Siderbar';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Work from './pages/Work/Work';
import Contact from './pages/Contact/Contact';

function App() {
  const routes = [
    { path: '/', Component: Home },
    { path: '/about', Component: About },
    { path: '/skills', Component: Skills },
    { path: '/work', Component: Work },
    { path: '/contact', Component: Contact },
  ];

  return (
    <div className="App">
      <div className="wrap">
        <Intro />
        <Siderbar />
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} exact>
            {({ match }) => (
              <CSSTransition timeout={1000} classNames="page" unmountOnExit in={match != null}>
                <Component />
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </div>
  );
}

export default App;

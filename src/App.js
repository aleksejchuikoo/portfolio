import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Intro from './components/Intro/Intro';
import Home from './pages/Home/Home';
import Siderbar from './components/Sidebar/Siderbar';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Work from './pages/Work/Work';
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error';

function App() {
  const [show, setShow] = React.useState(false);
  const routes = [
    { path: '/', Component: Home },
    { path: '/about', Component: About },
    { path: '/skills', Component: Skills },
    { path: '/work', Component: Work },
    { path: '/contact', Component: Contact },
  ];

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <Intro />
      {show && (
        <div className="wrap">
          <Siderbar />
          <Switch>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} exact>
                <Component />
              </Route>
            ))}
            <Route path="*" component={Error} />
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;

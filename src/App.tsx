import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import {Home} from 'views';
import {Header, Footer} from 'components/base';

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
    <Footer/>
    </>
  );
}

export default withRouter(App);

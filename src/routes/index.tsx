import { Route, Switch } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import MemberYears from 'pages/MemberYears';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="memberyears" component={MemberYears} />
    </Switch>
  );
};

export default Routes;

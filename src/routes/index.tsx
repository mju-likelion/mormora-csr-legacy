import { Route, Switch } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import Members from 'pages/MembersPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <MainPage />
      </Route>
      <Route exact path='/members' component={Members} />
    </Switch>
  );
};

export default Routes;

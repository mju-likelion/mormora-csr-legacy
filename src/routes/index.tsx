import { Route, Switch } from 'react-router-dom';

import MainPage from 'pages/MainPage';

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <MainPage />
      </Route>
    </Switch>
  );
};

export default Routes;

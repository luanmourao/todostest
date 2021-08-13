import { Switch, Route } from 'react-router-dom';
import Todos from './pages/Todos';
import Users from './pages/Users';

const Routes = (): JSX.Element => {

  return (
    <Switch>
      <Route path="/" exact component={Todos} />
      <Route path="/todos" exact component={Todos} />
      <Route path="/users" component={Users} />
    </Switch>
  )
};

export default Routes;

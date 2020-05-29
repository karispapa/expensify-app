import React from 'react'; 
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from  'history'
import AddExpense from '../components/AddExpense';
import ExpenseDashboard from '../components/ExpenseDashboard';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory()
const AppRouter = ()=> (

  <Router history={history}>
    <div>  
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashboard}/>
        <PrivateRoute path="/create" component={AddExpense}/>
        <PrivateRoute path="/edit/:id" component={EditExpense}/>
        <Route path="/help" component={Help}/>
        <Route component={NotFound}/>
      
      </Switch>                                                                                                                                                                       
    </div>
  </Router>
)

export default AppRouter;
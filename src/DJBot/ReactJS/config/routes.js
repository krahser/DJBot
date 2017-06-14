var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Dashboard = require("../components/dashboard");
var Settings = require("../components/settings");
var Keys = require("../components/keys");


var Main = require('../containers/main');


var Blackboard = require("../containers/blackboard");

var Results = require("../containers/resultsContainer");


var Playbooks = require("../containers/playbooksContainer");
var PlaybookEdit = require("../containers/playbook/editContainer");
var TaskEdit = require("../containers/playbook/taskContainer");

var Inventory = require("../containers/inventoryContainer");
var Room = require("../containers/inventory/roomContainer");

var Play = require("../containers/playContainer");

var UserContainer = require("../containers/userContainer");
var UsersContainer = require("../containers/usersContainer");
var UserNew = require("../components/user/new");



var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Settings} />
      <Route path='/blackboard' component={Blackboard} />

      <Route path='/results' component={Results} />

      <Route path='/settings' component={Settings} />
      <Route path='/settings/userNew' component={UserNew} />
      <Route path='/settings/user' component={UserContainer} />
      <Route path='/settings/users' component={UsersContainer} />
      <Route path='/settings/keys' component={Keys} />
      <Route path='/settings/rooms' component={Keys} />

      <Route path='/playbooks' component={Playbooks} />
      <Route path='/playbook/edit'
             component={PlaybookEdit} header="Edit" />
      <Route path='/playbook/new' component={PlaybookEdit}
             header="New" />
      <Route path='/task/edit' component={TaskEdit} header="Edit" />
      <Route path='/task/new' component={TaskEdit} header="New" />

      <Route path='/inventory' component={Inventory} />
      <Route path='/inventory/room' component={Room} />
      <Route path='/inventory/machine' component={Inventory} />

      <Route path='/play' component={Play} />

    </Route>
  </Router>
);

module.exports = routes;

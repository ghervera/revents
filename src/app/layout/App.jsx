import React, {Component, Fragment} from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Route } from 'react-router-dom';
import HomePage from '../../features/event/home/HomePage';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/event/user/PeopleDashboard/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/event/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/event/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';





class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path='/' component={HomePage} />
        <Route 
        path='/(.+)' 
        render={() => (
          <Fragment>
          <NavBar/>
          <Container className="main">
              <Route path='/event' component={EventDashboard} />
              <Route path='/event/:id' component={EventDetailedPage} />
              <Route path='/people' component={PeopleDashboard} />
              <Route path='/profile/:id' component={UserDetailedPage} />
              <Route path='/settings' component={SettingsDashboard} />
              <Route path='/createEvent' component={EventForm} />
          </Container>    
        </Fragment>
        )}/>
      </Fragment>  
    );
  }
}

export default App;

     
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../header';
import SwapiService from '../../services/services';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import PlanetPage from '../planet-page';
import StarshipsPage from '../starships-page';
import ErrorBoundry from '../error-boundry';
import Welcome from '../Welcome';
//import Test from '../../services/test';
import { SwapiServiceProvider } from '../swapi-service-context';
import { LoginPage, AdminPage } from '../login-admin-pages';
import './app.css';

export default class App extends React.Component {
    swapiService = new SwapiService();
    state = {
        isLoggedIn: false
    }
    onLogin = (e) => {
        e.preventDefault();
        if (e.target.name.value && e.target.password.value) {
            this.setState({ isLoggedIn: true });
        } else {
            const warrning = document.createElement('div');
            warrning.className = "alert alert-dismissible alert-danger text-justify";
            warrning.innerHTML = "The entrance is forbidden, the data has been wrong. You could try again";
            document.querySelector("#for-warning").prepend(warrning)
        }
    }
    render() {
        const { isLoggedIn } = this.state;
        return (
            <div className='container'>
                <ErrorBoundry>
                    <SwapiServiceProvider value={this.swapiService} >
                        <Router>
                            <Header />
                            <RandomPlanet />
                            <Route path="/"
                                component={Welcome}
                                exact={true} />
                            <Switch >
                                <Route path="/people/:id?" component={PeoplePage} />
                                <Route path="/planets/:id?" component={PlanetPage} />
                                <Route path="/starships/:id?" component={StarshipsPage} />
                                <Route path="/login" render={() => <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />} />
                                <Route path="/admin" render={() => <AdminPage isLoggedIn={isLoggedIn} />} />
                                <Redirect to="/" />
                            </Switch>
                        </Router>
                    </SwapiServiceProvider>
                </ErrorBoundry>
            </div>
        )
    }
}
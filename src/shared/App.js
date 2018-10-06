// @flow
import * as React from 'react';
import { Fragment } from 'react';
import { Redirect, Route, Switch, withRouter, Router } from 'react-router-dom';
import SeriesList from './containers/SeriesList';
import SeriePage from './containers/SeriePage';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component<PropsT> {
    render() {
        return (
            <Fragment>
                <Header />
                <Switch>
                    <Redirect exact from="/" to="/series" />
                    <Route path="/series/:id" component={SeriePage} />
                    <Route path="/series" component={SeriesList} />
                </Switch>
                <Footer />
            </Fragment>
        );
    }
}

export default withRouter(App);

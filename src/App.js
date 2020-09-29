import React, { Component ,Suspense} from 'react';
import { connect } from 'react-redux';

import { BrowserRouter, Switch, Redirect} from "react-router-dom";
import PrivateRoute from "./components/privateRoute/PrivateRoute"
import styles from './global.module.css';
import PublicRoute from "./components/publicRoute/PublicRoute"

import ContactView from './views/ContactView'
import contactsOperations from '../src/redux/contacts/contacts-operations';
import contactsSelectors from './redux/contacts/contacts-selectors';
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import routes from "./routes"
import authOperations from "./redux/auth/authOperations"
import Layout from './components/layout/Layout';

class App extends Component {
  componentDidMount() {

    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Layout />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              {/* <Route path="/"  exact component={HomeView}/> */}
              <PrivateRoute
                path="/contacts"
                redirectTo="/login"
                component={ContactView}
              />
              <PublicRoute
                path="/register"
                restricted={true}
                redirectTo="/contacts"
                component={RegisterView}
              />
              <PublicRoute
                path="/login"
                restricted={true}
                redirectTo="/contacts"
                component={LoginView}
              />
              <Redirect to="/contacts" />
              {/* {routes.map((route) => (
                <Route key={route.path} {...route} />
              ))} */}
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: contactsSelectors.loading(state),
});
const mapDispatchToProps = {

  onGetCurrentUser: authOperations.currentUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

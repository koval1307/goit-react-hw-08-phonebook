import React, { Component } from 'react'
import ContactsList from "../components/contactsList/contactsList"
import Form from "../components/form/Form"
import Filter from "../components/filter/Filter"
import contactsOperations from "../redux/contacts/contacts-operations"
import AppTitle from "../components/appTitle/AppTitle"
import { connect } from "react-redux"
import contactsSelectors from "../redux/contacts/contacts-selectors";
import authSelectors from "../redux/auth/authSelectors"
import authOperations from '../redux/auth/authOperations'



class ContactView extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
 
  }
  render() {
    return (
      <div >
        <AppTitle />
        {this.props.isLoading && <h1>Still Loading...</h1>}
        <Form />

        <Filter></Filter>
       
        <ContactsList/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: contactsSelectors.loading(state),
  items: contactsSelectors.getItems(state),
  isAuthenticated: authSelectors.isAuthenticated(state),
});
const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,

  
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactView);
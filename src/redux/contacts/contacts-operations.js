
import axios from "axios";
import contactsActions from "./contacts-actions";



const addContact = (data) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());
  axios
    .post("/contacts", { ...data })
    .then((response) => {
      dispatch(contactsActions.addContactSucess(response.data));
    })
    .catch((error) => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsActions.fetchContactsSucess(data)))
    .catch((error) => dispatch(contactsActions.fetchContactsError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(contactsActions.deleteContactsRequest());
  axios
    .delete(`/contacts/${id}`)

    .then(() => dispatch(contactsActions.deleteContactsSucess(id)))
    .catch((error) => dispatch(contactsActions.deleteContactsError(error)));
};

export default {
  addContact,
  fetchContacts,
  deleteContact,
};

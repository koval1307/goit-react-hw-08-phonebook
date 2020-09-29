import React from "react";
import contactsActions from "../../redux/contacts/contacts-actions";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

const Filter = ({ filter, getFilterName }) => {
  return (
    <>
      <h2>Contacts</h2>
      <TextField
        type="text"
        value={filter}
        name="filter"
        onChange={(e) => getFilterName(e.target.value)}
      />
    </>
  );
};
const mapStateToProps = (state) => ({
  filter: contactsSelectors.getFilter(state),
});
const mapDispatctToProps = {
  getFilterName: contactsActions.getFilter,
};

export default connect(mapStateToProps, mapDispatctToProps)(Filter);
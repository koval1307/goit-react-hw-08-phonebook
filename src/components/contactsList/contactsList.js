import React from "react";
import { connect } from "react-redux";
import styles from "./contacts-list.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import contactsSelectors from "../../redux/contacts/contacts-selectors";
import ContactListItem from "../contactListItem/contactListItem";
function ContactList({ contactList }) {
  return (
    <TransitionGroup component="ul" className={styles.contact__list}>
      {contactList.map(({ id }) => {
        return (
          <CSSTransition
            key={id}
            timeout={250}
            unmountOnExit
            classNames={styles}
          >
            <ContactListItem key={id} id={id} />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

const mapStateToProps = (state) => ({
  contactList: contactsSelectors.getFilteredContacts(state),
});

export default connect(mapStateToProps)(ContactList);

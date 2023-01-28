import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import Notification from 'components/Notification/Notification';

function ContactList({ contacts, deleteContact }) {

return (
  <ul>
    {
      contacts.length ? (
      contacts.map(contact => (
        <ContactItem
            key={contact.id}
            contact={contact}
            deleteContact={()=>deleteContact(contact.id)}
        />
      ))) : (
          <Notification/>
      )}
  </ul>
    
    )
};

ContactList.propTypes = {
  contacts:
    PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
import PropTypes from 'prop-types';

function ContactItem({ contact: { name, number }, deleteContact }) {
    return (
        <li>
            <span>{name}</span>
            <span className='TelNumbers'>{number}</span>
            <button type='button' onClick={deleteContact}>Delete</button>
        </li>
    )
};

ContactItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired,
    deleteContact: PropTypes.func.isRequired,
};

export default ContactItem
import PropTypes from 'prop-types'

function Sorting({ value, onChange }) {
    return (
        <div className='FindContact'>
        <h3>Find contact by name</h3>
            <input 
                className='SortInput'
                type="text"
                value={value}
                onChange={onChange}
                placeholder=" "
            />
        </div>
    );
}

Sorting.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Sorting;
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export class ContactForm extends Component{
state = {
  name: '',
  number: ''
    }
      
handleNameChange = ({ currentTarget: { name, value } }) => {
        this.setState({ [name]: value })
    };
    

handleSubmit = e => {
   e.preventDefault()
        
const newContact = {
        id: nanoid(),
        name: this.state.name,
        number: this.state.number
        }

        this.props.onSubmit(newContact);
        this.setState({ name: '', number: '' })
        this.reset();
    };
    
    
reset = () => {
    this.setState({name: '', number: '' })
    };


render() {
 return (
    <div className='ContactForm'>
    <div className='NameField'></div>
       <form
          className='inputButton'
          onSubmit={this.handleSubmit}>
    <h2>Name</h2>
        <label>
        <input className='InputField' 
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleNameChange}
            value={this.state.name}                         
        /></label> 
        
    <h2>Number</h2>
        <label>
        <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleNameChange}
            value={this.state.number}
        /></label>   
             
        <button 
            className='Button'
            type='submit'>Add contact
        </button>
        </form>

    </div>
    )
}
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
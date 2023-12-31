import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/Contacts/contactsOperations'; 
import './ContactsForm.css'; 
import { selectContacts } from 'redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const formatPhoneNumber = (phoneNumber) => {
    const cleaned = phoneNumber.replace(/\D/g, '');
    const formatted = cleaned.substring(0, 10);
    const regex = /^(\d{3})(\d{3})(\d{4})$/;
    const formattedNumber = formatted.replace(regex, '$1-$2-$3');
    return formattedNumber;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'number') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData({ ...formData, [name]: formattedPhone });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = formData;
    const digitsCount = number.replace(/\D/g, '').length;

    if (name.trim() === '' || number.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    if (digitsCount < 10) {
      alert('Phone number must contain at least 10 digits');
      return;
    }

    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in your contacts`);
      return;
    }

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      })
    );

    setFormData({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h3>Name</h3>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zAZа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={formData.name}
        onChange={handleChange}
        className="input-field"
      />
      <h3>Number</h3>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +. Minimum 10 digits required."
        required
        value={formData.number}
        onChange={handleChange}
        className="input-field"
      />
      <button type="submit" className="add-contact-button">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

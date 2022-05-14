import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { addContacts } from '../../redux/contacts/contacts-actions';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import { Form, Label, Input, InputBottom, Button } from './ContactForm.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const normalizedName = name.toLowerCase();
      const isNameInContacts = contacts.some(contact =>
        contact.name.toLowerCase().includes(normalizedName),
      );

      if (isNameInContacts) {
        setName('');
        setNumber('');
        return toast(`${name} is already in contacts.`);
      }

      dispatch(addContacts({ name, number }));
      setName('');
      setNumber('');
    },
    [name, number, dispatch, contacts],
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>Name</Label>
      <Input
        type="text"
        name="name"
        value={name}
        htmlFor={nameInputId}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor={numberInputId}>Number</Label>
      <InputBottom
        type="tel"
        name="number"
        value={number}
        htmlFor={numberInputId}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

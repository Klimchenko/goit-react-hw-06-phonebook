import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Container from '../Container';
import { TitleMain, Title } from './App.styled';

function App() {
  return (
    <Container>
      <ToastContainer />
      <TitleMain>Phonebook</TitleMain>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;

//-------------------------------------------------
//--------react хуки-----------
//-------------------------------------------------
/* import React, { useState, useEffect, useMemo } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Container from '../Container';
import { TitleMain, Title } from './App.styled';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  // --- додаю контакти до списку ---
  const addContact = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };

    const normalizedName = contact.name.toLowerCase();
    const isNameInContacts = contacts.some(contact =>
      contact.name.toLowerCase().includes(normalizedName),
    );

    if (isNameInContacts) {
      return toast(`${name} is already in contacts.`);
    }

    setContacts(contacts => [contact, ...contacts]);
  };

  //--- видаляю контакт зі списку ---
  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId),
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  // --- пошук по фільтру ---
  const getVisibleContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter),
    );
  }, [filter, contacts]);

  return (
    <Container>
      <ToastContainer />
      <TitleMain>Phonebook</TitleMain>
      <ContactForm onSubmit={addContact} />
      <Title>Contacts</Title>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
}

export default App;
 */

//-------------------------------------------------
//-------class-------
//-------------------------------------------------
/* class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      console.log('Оновилося поле contacts, записую contacts в сховище');
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  // --- додаю контакти до списку ---
  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const normalizedName = contact.name.toLowerCase();
    const { contacts } = this.state;
    const isNameInContacts = contacts.some(contact =>
      contact.name.toLowerCase().includes(normalizedName),
    );

    if (isNameInContacts) {
      return toast(`${name} is already in contacts.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  //--- видаляю контакт зі списку ---
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  // --- пошук по фільтру ---
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <ToastContainer />
        <TitleMain>Phonebook</TitleMain>
        <ContactForm onSubmit={this.addContact} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
 */

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/Contacts/operations';
import { ContainerContacts } from 'components/Container.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { selectError, selectIsLoading } from 'redux/Contacts/selectors';
import { ContactList } from 'components/ContactList/ContactList';

const PhoneBook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <ContainerContacts>
      <h2>Phonebook</h2>
      <ContactForm />

      <h3>Contacts</h3>
      <Filter />
      <ContactList />
      {isLoading && !error && <b>Request in progress...</b>}
    </ContainerContacts>
  );
};
export default PhoneBook;

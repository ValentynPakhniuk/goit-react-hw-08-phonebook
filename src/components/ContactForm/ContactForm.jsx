import { Button } from 'components/Button/Button.styled';
import { Box, FormContact } from './ContainerForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk } from 'redux/Contacts/operations';
import {
  selectIsLoading,
  selectVisibleContact,
} from 'redux/Contacts/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectVisibleContact);

  const handleClick = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const isContactExists = contacts.some(contact => contact.name === name);
    if (isContactExists) {
      return alert(`${name} is already in contacts.`);
    }
    dispatch(addContactsThunk({ name, number }));
    form.reset();
  };

  return (
    <FormContact onSubmit={handleClick}>
      <Box>
        <div>
          <label htmlFor="exampleInputName">Name</label>
          <input
            type="text"
            id="exampleInputName"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div>
          <label htmlFor="exampleInputNumber">Number</label>
          <input
            type="tel"
            id="exampleInputNumber"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <Button type="submit" disabled={isLoading}>
          Add contact
        </Button>
      </Box>
    </FormContact>
  );
};

import { useDispatch } from 'react-redux';
import { BoxForm, Form } from './LoginForm.styled';
import { logIn } from 'redux/auth/operations';
import { Button } from 'components/Button/Button.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <BoxForm>
        <div>
          <label htmlFor="loginEmail">Email</label>
          <input type="email" id="loginEmail" name="email" required />
        </div>
        <div>
          <label htmlFor="loginPassword">Password</label>
          <input type="password" id="loginPassword" name="password" required />
        </div>
        <Button type="submit">Log In</Button>
      </BoxForm>
    </Form>
  );
};

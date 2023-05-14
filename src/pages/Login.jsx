import { ContainerContacts } from 'components/Container.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';
// import { Helmet } from 'react-helmet';

export default function Login() {
  return (
    <ContainerContacts>
      {/* <Helmet>
        <title>Login</title>
      </Helmet> */}
      <LoginForm />
    </ContainerContacts>
  );
}

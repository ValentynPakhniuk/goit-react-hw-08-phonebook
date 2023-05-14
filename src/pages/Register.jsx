// import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { ContainerContacts } from 'components/Container.styled';

export default function Register() {
  return (
    <ContainerContacts>
      {/* <Helmet>
        <title>Registration</title>
      </Helmet> */}
      <RegisterForm />
    </ContainerContacts>
  );
}

import { Container } from 'components/Container.styled';

export default function Home() {
  return (
    <Container>
      <h1>
        Welcome page of the phone book{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </Container>
  );
}

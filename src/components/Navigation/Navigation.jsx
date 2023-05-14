import { useAuth } from 'hooks';
import { SiteNavLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <SiteNavLink to="/">Home</SiteNavLink>
      {isLoggedIn && <SiteNavLink to="/contacts">Contacts</SiteNavLink>}
    </nav>
  );
};

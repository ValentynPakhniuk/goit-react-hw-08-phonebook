import { SiteNavLink } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <div>
      <SiteNavLink to="/register">Register</SiteNavLink>
      <SiteNavLink to="/login">Log In</SiteNavLink>
    </div>
  );
};

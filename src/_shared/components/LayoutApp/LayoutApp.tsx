import { NavLink, Outlet } from 'react-router-dom';

export const LayoutApp = () => {
  return (
    <>
      {
        // TODO: create <Navigation /> component and replace this two <NavLinks>
      }
      <NavLink to="profile"> PROFILE </NavLink>
      <NavLink to="app"> BUILDER </NavLink>
      <NavLink to="my-personas"> MY PERSONAS </NavLink>
      <Outlet />
      {
        // Footer
      }
    </>
  );
};

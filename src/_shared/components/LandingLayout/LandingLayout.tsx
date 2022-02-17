import { NavLink, Outlet } from 'react-router-dom';

export const LandingLayout = () => {
  return (
    <>
      {
        // <nav></nav> Navigation component
      }
      <NavLink to="login"> LOGIN </NavLink>
      <Outlet />
      {
        // Footer
      }
    </>
  );
};

import { NavLink, Outlet } from 'react-router-dom';
import { PATHS } from '../../types/paths';

export const LandingLayout = () => {
  return (
    <>
      {
        // <nav></nav> Navigation component
      }
      <NavLink to={PATHS.LOGIN}> LOGIN </NavLink>
      <Outlet />
      {
        // Footer
      }
    </>
  );
};

import { NavLink, Outlet } from 'react-router-dom';
import { TopNavigation } from '../TopNavigation/TopNavigation';

export const LayoutApp = () => {
  return (
    <>
      <TopNavigation />
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

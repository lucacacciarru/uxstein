import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './auth/components';
import { Login } from './auth/pages';
import { LandingLayout } from './_shared/components';
import { LayoutApp } from './_shared/components/LayoutApp';
import { ErrorPage } from './_shared/pages';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { initI18n } from './_shared/i18n';
import { Signup } from './auth/pages';
import { Builder } from './builder/pages/Builder';
import { MyPersona } from './persona/pages/MyPersona';
import { MyTemplates } from './template/pages/MyTemplates';
import { PATHS } from './_shared/types/paths';
import { Profile } from './auth/pages';
import { Landing } from './landing/pages/Landing';
import { getLastNotification } from './_shared/store/notifications/selectors';
import { useSelector } from 'react-redux';

i18n.use(initReactI18next).init(initI18n);

function App() {

  const lastNotification = useSelector((state) => getLastNotification(state));
  React.useEffect(() => {
    if (!lastNotification) return;

    console.log('SAMPLE NOTIFICATION', lastNotification);
  }, [lastNotification]);

  return (
    <div className='App'>
      <Routes>
        <Route path={PATHS.INDEX} element={<LandingLayout />}>
          <Route index element={<Landing />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
        <Route path={PATHS.LOGIN} element={<Login />} />
        <Route path={PATHS.SIGNUP} element={<Signup />} />
        <Route element={<LayoutApp />}>
          <Route element={<PrivateRoutes />}>
            <Route path={PATHS.PERSONAS}>
              <Route index element={<MyPersona />} />
              <Route path={PATHS.EDIT_ENTITY} element={<Builder />} />
              <Route path={PATHS.CREATE_ENTITY} element={<Builder />} />
            </Route>
            <Route path={PATHS.TEMPLATES}>
              <Route index element={<MyTemplates />} />
              <Route path={PATHS.EDIT_ENTITY} element={<Builder />} />
              <Route path={PATHS.CREATE_ENTITY} element={<Builder />} />
            </Route>
            <Route path={PATHS.PROFILE} element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

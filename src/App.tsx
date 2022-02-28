//TODO: "/app" dont't have same layout, so it shouldn't be wrapped in <LayoutApp /> or maybe LayoutApp can have his exception
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './auth/components/PrivateRoutes';
import { Login } from './auth/pages';
import { LandingLayout } from './_shared/components';
import { LayoutApp } from './_shared/components/LayoutApp';
import { ErrorPage } from './_shared/pages';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { initI18n } from './_shared/i18n';
import { Signup } from './auth/pages/Signup';
import { Application } from './app/pages/Application';
import { MyPersona } from './persona/pages/MyPersona';
import { MyTemplates } from './template/pages/MyTemplates';

i18n.use(initReactI18next).init(initI18n);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<>Landing</>} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route element={<LayoutApp />}>
          <Route element={<PrivateRoutes />}>
            <Route path="app" element={<Application />} />
            <Route path="my-personas" element={<MyPersona />} />
            <Route path="my-templates" element={<MyTemplates />} />
            <Route path="profile" element={<>Profile</>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

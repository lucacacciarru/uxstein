//TODO: ADD 404 page, and unmatched routes
//TODO: "/app" dont't have same layout, so it shouldn't be wrapped in <LayoutApp /> or maybe LayoutApp can have his exception
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './auth/components/PrivateRoutes';
import { Login } from './auth/pages';
import { LandingLayout } from './_shared/components';
import { LayoutApp } from './_shared/components/LayoutApp';
import { ErrorPage } from './_shared/pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<>Landing</>} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route element={<LayoutApp />}>
          <Route path="login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="my-personas" element={<>Personas</>} />
            <Route path="my-templates" element={<>Templates</>} />
            <Route path="profile" element={<>Profile</>} />
            <Route path="app" element={<>Builder</>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

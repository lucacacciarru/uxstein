import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './auth/components/PrivateRoutes';
import { Builder } from './_shared/pages/Builder';
import { Landing } from './_shared/pages/Landing';
import { Personas } from './_shared/pages/Personas';
import { Profile } from './_shared/pages/Profile';
import { Templates } from './_shared/pages/Templates';
import { Login } from './_shared/pages/Login';
import { LandingLayout } from './_shared/components';
import { LayoutApp } from './_shared/components/LayoutApp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Landing />} />
        </Route>
        <Route element={<LayoutApp />}>
          <Route path="login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="my-personas" element={<Personas />} />
            <Route path="my-templates" element={<Templates />} />
            <Route path="profile" element={<Profile />} />
            {/*TODO: /app dont't have same layout, so it have to be outside (not wrapped in <LayoutApp /> like it is here)*/}
            <Route path="app" element={<Builder />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

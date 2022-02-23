import { FC } from 'react';
import { TemplateForm } from '../components/Auth/partials';
import { LoginForm } from '../components/Auth/partials/LoginForm';

export const Login: FC = () => {
  return (
    <TemplateForm>
      <LoginForm />
    </TemplateForm>
  );
};

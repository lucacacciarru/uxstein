import { FC } from 'react';
import { TemplateForm } from '../components';
import { LoginForm } from '../components';

export const Login: FC = () => {
  return (
    <TemplateForm>
      <LoginForm />
    </TemplateForm>
  );
};

import { FC } from 'react';
import { GoToFaq, Intro, MadeBy } from '../components';

export const About: FC = () => {
  return (
    <>
      <Intro />
      <MadeBy />
      <GoToFaq />
    </>
  );
};

import { FC } from 'react';
import { FaqItems } from '../components/Faq/FaqItems';
import { FaqCategoryButtons } from '../components/FaqCategoryButtons/FaqCategoryButtons';
import { PageHeading } from '../components/PageHeading';
import { SectionWrapper } from '../components/SectionWrapper';

export const Faq: FC = () => {
  return (
    <>
      <PageHeading
        title="landing.faqPage.title"
        pageName="landing.navigation.faq"
      />
      <FaqCategoryButtons />
      <SectionWrapper>
        <FaqItems />
      </SectionWrapper>
    </>
  );
};

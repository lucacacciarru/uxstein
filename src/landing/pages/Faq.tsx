import { FC } from 'react';
import { FaqItems } from '../components/Faq/FaqItems';
import { FaqCategoryButtons } from '../components/FaqCategoryButtons/FaqCategoryButtons';
import { PageHeading } from '../components/PageHeading/PageHeading';
import { SectionWrapper } from '../components/SectionWrapper';

export const Faq: FC = () => {
  return (
    <>
      <PageHeading title="We dont like doubts" pageName="FAQ" />
      <FaqCategoryButtons />
      <SectionWrapper>
        <FaqItems />
      </SectionWrapper>
    </>
  );
};

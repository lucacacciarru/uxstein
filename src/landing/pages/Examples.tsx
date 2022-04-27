import { ExampleSection } from '../components/ExampleSection/ExampleSection';
import { PageHeading } from '../components/PageHeading';

export const Examples: React.FC = () => {
  return (
    <>
      <PageHeading
        pageName="landing.navigation.examples"
        title="landing.examples.title"
      />
      <ExampleSection />
    </>
  );
};

// TODO: When the backend will be ready, change the fetchFunction
import { useEffect, useMemo, useState } from 'react';
import { Template } from '../../../template/store/types/general';
import { ExampleCard } from './ExampleCard';
import { fetchTemplates } from '../../../template/store/api';
import { GenericSkeletonList } from '../../../_shared/components';

export function useExampleSection() {
  const [templates, setTemplate] = useState<Template[]>([]);

  async function getTemplates() {
    try {
      const data = await fetchTemplates();
      setTemplate(data.data);
    } catch (e) {
      console.error(e);
    }
  }

  const renderExampleCards = useMemo(
    () =>
      templates.length ? (
        templates.map(template => (
          <ExampleCard
            key={template.id}
            src={template.src}
            data-testid="exampleCard"
          />
        ))
      ) : (
        <GenericSkeletonList
          numberOfItems={6}
          styleChildren={{ height: '60vh' }}
        />
      ),
    [templates],
  );

  useEffect(() => {
    getTemplates();
  }, []);

  return {
    renderExampleCards,
  };
}

import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { faqs } from './faqs';

export const useFaqItems = () => {
  const [params] = useSearchParams();
  const category = useMemo(() => params.get('category'), [params]);
  const filterByCategory = useCallback(
    faq => faq.cat === category || !category,
    [category],
  );

  const filteredByCategory = useMemo(
    () => faqs.filter(filterByCategory),
    [filterByCategory],
  );

  return {
    filteredByCategory,
  };
};

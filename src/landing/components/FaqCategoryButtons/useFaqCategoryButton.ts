import { useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { faqButtons } from '../Faq/faqs';
import { FaqCategories } from '../Faq/types';

export const useFaqCategoryButton = (cat: FaqCategories) => {
  const { t } = useTranslation();

  const ref = useRef<HTMLDivElement>(null);
  const [params, setParams] = useSearchParams();
  const isActive = useMemo(() => params.get('category') === cat, [params, cat]);

  const icon = useMemo(() => faqButtons[cat].icon, [cat]);
  const label = useMemo(() => t(faqButtons[cat].buttonLabel), [cat, t]);

  const variableProps = useMemo(
    () => ({
      border: isActive ? 'green.s' : 'dark.s',
      boxShadow: isActive ? 'noBlur.green.s' : 'noBlur.dark.s',
      ref: ref,
    }),
    [isActive],
  );

  const handleClick = () => {
    if (isActive) {
      setParams({});
      return;
    }

    setParams({ category: cat });
    ref?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  return {
    icon,
    label,
    isActive,
    handleClick,
    variableProps,
  };
};

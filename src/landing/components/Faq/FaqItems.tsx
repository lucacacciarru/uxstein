import { Accordion } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import { FaqCollapsableItem } from './FaqCollapsableItem';
import { useFaqItems } from './useFaqItems';

export const FaqItems: FC = () => {
  const { filteredByCategory } = useFaqItems();
  return (
    <Accordion variant="greenHover" allowToggle>
      <AnimatePresence presenceAffectsLayout initial>
        {filteredByCategory.map(faq => (
          <FaqCollapsableItem key={faq.id} {...faq} />
        ))}
      </AnimatePresence>
    </Accordion>
  );
};

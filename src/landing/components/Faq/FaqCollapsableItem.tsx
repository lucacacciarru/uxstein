import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Faq } from './types';

type Props = Faq;

export const FaqCollapsableItem: FC<Props> = ({
  answer,
  question,
  id,
  cat,
}) => {
  const { t } = useTranslation();
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AccordionItem>
        <Heading as="h2" size="h2">
          <AccordionButton py="6">
            <Box flex="1" textAlign="left">
              <AccordionIcon mr="2" color="brand.primary" boxSize="7" />
              {t(question)}
            </Box>
          </AccordionButton>
        </Heading>
        <AccordionPanel>{t(answer)}</AccordionPanel>
      </AccordionItem>
    </motion.div>
  );
};

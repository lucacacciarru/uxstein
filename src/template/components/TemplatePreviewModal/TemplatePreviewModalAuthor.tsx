import { Text, TextProps } from '@chakra-ui/react';
import { FC } from 'react';
import { useTemplatePreviewModalAuthor } from './useTemplatePreviewModalAuthor';

type Props = {
  isDefault: boolean;
};

const textBaseProps: TextProps = {
  as: 'small',
  fontWeight: 'light',
  fontStyle: 'italic',
};

export const TemplatePreviewModalAuthor: FC<Props> = ({ isDefault }) => {
  const { author, createdBy, defaultTemplate } =
    useTemplatePreviewModalAuthor();

  return (
    <>
      {isDefault && <Text {...textBaseProps}>{defaultTemplate}</Text>}
      {!isDefault && (
        <>
          <Text as="small" fontWeight="light">
            {createdBy}
          </Text>
          <Text {...textBaseProps} textDecoration="underline">
            {author}
          </Text>
        </>
      )}
    </>
  );
};

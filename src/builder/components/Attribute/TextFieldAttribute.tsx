import { Box, FormLabel, Input, InputGroup } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getAttributeByNameAndId } from '../../store/selectors/getAttributeByNameAndId';
import { AttributeName } from '../../store/types';

type Props = {
  blockItemId: string;
  name: AttributeName;
};

export const TextFieldAttribute: FC<Props> = ({ name, blockItemId }) => {
  const attribute = useSelector(getAttributeByNameAndId(name, blockItemId));
  const { t } = useTranslation();

  return (
    <Box>
      <FormLabel>
        {t(attribute?.label || 'app.toolBar.attributes.default.label')}
      </FormLabel>
      <InputGroup>
        <Input
          placeholder={
            t(
              attribute?.placeholder ||
                'app.toolBar.attributes.default.placeholder',
            ) as string
          }
        />
      </InputGroup>
    </Box>
  );
};

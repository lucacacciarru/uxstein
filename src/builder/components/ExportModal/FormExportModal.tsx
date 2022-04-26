import { Box, Button, HStack, Input, Select } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

type Props = {
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nameFile: string;
  onChangeFileType: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  fileType: string;
  onClick: () => void;
};

export const FormExportModal: React.FC<Props> = ({
  fileType,
  nameFile,
  onChangeFileType,
  onChangeTitle,
  onClick,
}) => {
  const { t } = useTranslation();
  return (
    <Box>
      <HStack>
        <Input onChange={onChangeTitle} value={nameFile} />
        <Select onChange={onChangeFileType} value={fileType} w="40">
          <option value="png">{t('builder.modal.exportTypesFile.png')}</option>
          <option value="jpeg">
            {t('builder.modal.exportTypesFile.jpeg')}
          </option>
          <option value="pdf">{t('builder.modal.exportTypesFile.pdf')}</option>
        </Select>
      </HStack>
      <Button onClick={onClick} w="full" mt="6">
        {t('builder.modal.exportButton')}
      </Button>
    </Box>
  );
};

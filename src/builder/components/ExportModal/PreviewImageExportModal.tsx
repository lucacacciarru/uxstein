import { Box, Image } from '@chakra-ui/react';

type Props = {
  imagePreview: string | null;
};
export const PreviewImageExportModal: React.FC<Props> = ({ imagePreview }) => {
  return (
    <Box
      w="full"
      h="52"
      border="dark.s"
      borderRadius="md"
      overflow="hidden"
      bg="black.20"
    >
      <Image
        w="full"
        h="full"
        objectFit="contain"
        p="4"
        src={imagePreview as string}
      />
    </Box>
  );
};

import { useDisclosure, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GenericToast } from '../../../_shared/components/GenericToast';
import { useExport } from '../../hooks/useExport';
import { baseSelector } from '../../store/selectors/baseSelector';

export function useExportModal(exportItemRef: React.RefObject<HTMLElement>) {
  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { exportPersona, getPreviewImage, exportPdf } =
    useExport(exportItemRef);
  const title = useSelector(baseSelector).title;

  const [nameFile, setNameFile] = useState<string>('');
  const [fileType, setFileType] = useState<string>('png');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    setNameFile(title);
  }, [title]);

  const getImageSrc = async () => {
    const image = await getPreviewImage();
    setImagePreview(image);
  };

  const onOpenModal = () => {
    onOpen();
    getImageSrc();
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameFile(e.target.value);
  };

  const onChangeFileType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFileType(e.target.value);
  };

  const onClick = () => {
    if (fileType === 'pdf') {
      exportPdf(nameFile);
    } else {
      exportPersona({ fileType, nameFile });
    }
    toast({
      render: () => (
        <GenericToast
          translationKey="builder.toast.exportCompleted"
          status="success"
        />
      ),
    });
  };

  return {
    isOpen,
    onClose,
    onOpenModal,
    exportSettings: {
      imagePreview,
      nameFile,
      fileType,
      onClick,
      onChangeTitle,
      onChangeFileType,
    },
  };
}

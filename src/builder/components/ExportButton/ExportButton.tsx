import { IconButton } from '@chakra-ui/react';
import { Icon } from '../../../_shared/components';
import { ExportModal } from '../ExportModal/ExportModal';
import { useExportModal } from '../ExportModal/useExportModal';

type Props = {
  exportItemRef: React.RefObject<HTMLElement>;
};

export const ExportButton: React.FC<Props> = ({ exportItemRef }) => {
  const { isOpen, onClose, onOpenModal, exportSettings } =
    useExportModal(exportItemRef);

  return (
    <>
      <IconButton
        aria-label="save-template"
        h="10"
        minW="20"
        variant="outlineBlack"
        icon={<Icon name="Download" size="8" />}
        onClick={onOpenModal}
      />
      <ExportModal
        isOpen={isOpen}
        onClose={onClose}
        exportSettings={exportSettings}
      />
    </>
  );
};

import { IconButton } from '@chakra-ui/react';
import { useContext } from 'react';
import { Icon } from '../../../_shared/components';
import { BuilderContext } from '../BuilderContext';
import { ExportModal } from '../ExportModal/ExportModal';
import { useExportModal } from '../ExportModal/useExportModal';

export const ExportButton: React.FC = () => {
  const { exportItemRef } = useContext(BuilderContext);
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

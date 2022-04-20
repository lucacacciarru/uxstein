import { render } from '../../../_shared/testConfig/customRender';
import { ExportModal } from './ExportModal';

const fn = jest.fn();

type ExportModalProps = {
  isOpen: boolean;
  onClose: () => void;
  exportSettings: {
    imagePreview: string | null;
    onChangeFileType: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
    fileType: string;
    nameFile: string;
  };
};

const mockProps: ExportModalProps = {
  isOpen: true,
  onClose: fn,
  exportSettings: {
    imagePreview: 'anySrc',
    onChangeFileType: fn,
    onChangeTitle: fn,
    onClick: fn,
    fileType: 'jpeg',
    nameFile: 'anyString',
  },
};

describe('ExportModal component', () => {
  test('Should be rendered', () => {
    render(<ExportModal {...mockProps} />);
  });
});

import { Box, Input, Select } from '@chakra-ui/react';
import { useRef } from 'react';
import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import {
  renderHook,
  act,
  waitFor,
} from '../../../_shared/testConfig/customRenderHook';
import { BuilderState } from '../../store/types';
import { useExportModal } from './useExportModal';

const DEFAULT_PERSONA_TITLE = 'Test';

const mockBuilder: BuilderState = {
  title: DEFAULT_PERSONA_TITLE,
  allIds: [],
  byId: {},
  entityId: 'anyId',
  entityType: 'persona',
  pageSettings: [],
  globalStyle: {
    backgroundColor: '',
    columnGap: 0,
    rowGap: 0,
  },
};

const useMockExportModal = () => {
  const mockRef = useRef(null);
  const { exportSettings, isOpen, onClose, onOpenModal } =
    useExportModal(mockRef);
  return {
    mockRef,
    exportSettings,
    isOpen,
    onClose,
    onOpenModal,
  };
};

describe('useExportModal hook', () => {
  test('If onOpenModal is called, isOpen should be true and imagePreview should not be null', async () => {
    const { result } = renderHook(() => useMockExportModal(), {
      mocks: {
        builder: mockBuilder,
      },
    });
    render(
      <Box ref={result.current.mockRef as React.LegacyRef<HTMLDivElement>} />,
    );
    act(() => result.current.onOpenModal());
    waitFor(() => {
      const { isOpen, exportSettings } = result.current;
      expect(isOpen).toBeTruthy();
      expect(exportSettings.imagePreview).toEqual(DEFAULT_PERSONA_TITLE);
    });
  });
  test('If onChangeTitle is called, nameFile should change', async () => {
    const { result } = renderHook(() => useMockExportModal(), {
      mocks: {
        builder: mockBuilder,
      },
    });
    const { exportSettings } = result.current;
    render(
      <>
        <Box ref={result.current.mockRef as React.LegacyRef<HTMLDivElement>} />
        <Input
          value={exportSettings.nameFile}
          onChange={exportSettings.onChangeTitle}
          data-testid="input"
        />
      </>,
    );
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'anyString' } });
    waitFor(() => {
      expect(exportSettings.nameFile).toEqual('anyString');
    });
  });
  test('If onChangeFileType is called, fileType should change', async () => {
    const { result } = renderHook(() => useMockExportModal(), {
      mocks: {
        builder: mockBuilder,
      },
    });
    const { exportSettings } = result.current;
    render(
      <Select
        onChange={exportSettings.onChangeFileType}
        value={exportSettings.fileType}
        data-testid="select"
      >
        <option value="jpeg" />
        <option value="png" />
      </Select>,
    );
    const select = screen.getByTestId('select');
    fireEvent.change(select, { target: { value: 'jpeg' } });
    waitFor(() => {
      expect(exportSettings.fileType).toEqual('jpeg');
    });
  });

  test('If onClick is called, GenericToast component should be in the document', async () => {
    const { result } = renderHook(() => useMockExportModal(), {
      mocks: {
        builder: mockBuilder,
      },
    });
    render(
      <>
        <Box ref={result.current.mockRef as React.LegacyRef<HTMLDivElement>} />
        <button
          onClick={result.current.exportSettings.onClick}
          data-testId="button"
        />
      </>,
    );
    const button = screen.getByTestId('button');
    fireEvent.click(button);
    const toast = screen.getByTestId('toast');
    waitFor(() => {
      expect(toast).toBeVisible();
    });
  });
});

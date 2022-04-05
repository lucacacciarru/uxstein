import { render, fireEvent, screen } from '../../testConfig/customRender';
import { renderHook } from '../../testConfig/customRenderHook';
import { useActionModal } from './useActionModal';

const fn = jest.fn();
const fnOnClose = jest.fn();

describe('useActionModal hook', () => {
  test('if onClick is called the callback should be called and toast should be in the document', () => {
    const { result } = renderHook(() =>
      useActionModal({
        onSubmit: fn,
        onClose: fnOnClose,
        toastTranslation: 'builder.toast.personaSaved',
      }),
    );
    render(<button data-testid="button" onClick={result.current.onClick} />);

    const button = screen.getByTestId('button');
    fireEvent.click(button);
    expect(fn).toBeCalled();
    expect(fnOnClose).toBeCalled();

    const toast = screen.getByTestId('toast');
    expect(toast).toBeInTheDocument();
  });
});

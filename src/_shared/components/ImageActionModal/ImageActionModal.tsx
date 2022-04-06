import {
  Button,
  Image,
  ImageProps,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  primaryAction: () => void;
  primaryActionLabel: string;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  isOpen: boolean;
  onClose: () => void;
} & ImageProps;

export const ImageActionModal: FC<Props> = ({
  children,
  src,
  primaryAction,
  secondaryAction,
  primaryActionLabel,
  secondaryActionLabel,
  isOpen,
  onClose,
  ...imageProps
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
      <ModalOverlay />
      <ModalContent py="4" px="8">
        <ModalHeader>{children}</ModalHeader>
        <ModalCloseButton />
        <ModalBody p="8">
          <Image src={src} {...imageProps} />
        </ModalBody>
        <ModalFooter gap={'4'}>
          <Button w="full" onClick={primaryAction}>
            {primaryActionLabel}
          </Button>
          {secondaryActionLabel && (
            <Button variant="outline" onClick={secondaryAction || onClose}>
              {secondaryActionLabel}
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from "@chakra-ui/react";

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ isOpen, onClose, onSubmit, title, children }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <Button variant="ghost" mr={3} onClick={onClose}>Close</Button>
        <Button colorScheme="brand" onClick={onSubmit}>Save</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default ModalComponent;

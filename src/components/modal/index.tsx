import { Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from "@chakra-ui/react";
import { FC } from "react";

export type ModalType = {
    isOpen: boolean,
    onClose: () => void,
}

export const ModalInQ: FC<ModalType> = ({ onClose, isOpen, children }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width={"max-content"} height={"max-content"} backgroundColor="gray.800">
            <ModalBody padding={0}>
                {children}
            </ModalBody>
            <ModalFooter
                maxW="900px"
                maxH="600px"
                display="flex"
                justifyContent="flex-start"
            >

            </ModalFooter>
        </ModalContent>
    </Modal>
)
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { FC } from "react";

export type ModalType = {
    isOpen: boolean,
    onClose: () => void,
    title: string
}

export const ModalInQ: FC<ModalType> = ({ onClose, isOpen, children, title }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="gray.800">
            <ModalHeader fontSize={"4xl"} color="green.300">
                {title}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody >
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
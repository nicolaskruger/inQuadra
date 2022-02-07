import React, { FC } from "react";
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button, DrawerBody
} from '@chakra-ui/react'
import {HamburgerIcon} from "@chakra-ui/icons";

export const MenuDrawer: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                <HamburgerIcon />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <div>Fotos</div>
                        <div>Como ajudar</div>
                        <div>Conheca o projeto</div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
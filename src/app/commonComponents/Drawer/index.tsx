import React, { FC } from "react";
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    DrawerBody, IconButton, Icon, Stack,
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";
import { DrawerCardButton, DrawerCardButtonProps, } from "./DrawerCard";
import { AiFillPicture } from "react-icons/ai"
import { FaHandsHelping } from "react-icons/fa";
import { MdSkateboarding } from "react-icons/md";
import { IconType } from "react-icons";


export const MenuDrawer: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const buttonList: ({ icon: IconType } & DrawerCardButtonProps)[] = [
        {
            icon: AiFillPicture,
            title: "Fotos",
            id: "#fotos"
        },
        {
            icon: MdSkateboarding,
            title: "Conheça o projeto",
            id: "#conheca"
        },
        {
            icon: FaHandsHelping,
            title: "Como ajudar",
            id: "#ajudar"
        },
    ]

    return (
        <>
            <IconButton
                aria-label="abre menu"
                onClick={onOpen}
                variant="unstyled"
                fontSize={"24"}
                icon={<HamburgerIcon color={"green.300"} />}
                mr={"2"}
            />

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton color={"green.300"} />
                    <DrawerBody bgColor={"gray.900"}>
                        <Stack
                            direction={"column"}
                            mt="10"
                            spacing={"10px"}
                        >
                            {buttonList.map(({ id, title, icon }) => {
                                return (
                                    <DrawerCardButton
                                        key={id}
                                        title={title}
                                        id={id}
                                    >
                                        <Icon
                                            h={"20px"}
                                            w={"20px"}
                                            color={"green.300"}
                                            as={icon}
                                        />
                                    </DrawerCardButton>

                                )
                            })}
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
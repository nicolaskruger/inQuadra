import { FC } from "react";
import {MenuDrawer} from "../commonComponents/Drawer";
import {Flex, Heading, Spacer} from "@chakra-ui/react";

export const Header: FC = () => {
    return (
        <Flex p='4'>
            <Heading>InQuadras</Heading>
            <Spacer />
            <MenuDrawer/>
        </Flex>
    )
}
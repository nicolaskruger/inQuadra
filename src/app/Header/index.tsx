import { FC } from "react";
import { MenuDrawer } from "../commonComponents/Drawer";
import { Heading, Spacer, Text } from "@chakra-ui/react";
import { ContainerInQ } from "../../components/Container";

export const Header: FC = () => {
    return (
        <ContainerInQ py="4">
            <Heading display={"flex"}>
                <Text textColor={"gray.500"}>
                    In
                </Text>
                <Text textColor={"green.300"}>
                    Quadras
                </Text>
            </Heading>
            <Spacer />
            <MenuDrawer />
        </ContainerInQ>
    )
}
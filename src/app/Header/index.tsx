import { FC } from "react";
import { MenuDrawer } from "../commonComponents/Drawer";
import { Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { ContainerInQ } from "../../components/Container";

export const Header: FC = () => {
    return (
        <>
            <Flex width={"100%"} zIndex={10} pos={"fixed"} top="0" left={"0"} py="4" background={"gray.900"} >
                <ContainerInQ >
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
            </Flex>

            <Flex visibility={"hidden"} display={""} py={"4"}>
                <Heading>
                    a
                </Heading>
            </Flex>
        </>
    )
}
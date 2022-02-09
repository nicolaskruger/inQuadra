import { Container, Flex, FlexProps } from "@chakra-ui/react";
import { FC } from "react";

export const ContainerInQ: FC<FlexProps> = ({ children, ...props }) => {
    return (
        <Flex
            my={0}
            mx={"auto"}
            w={"95%"}
            maxW={"1200px"}
            px="4"
            {...props}
        >
            {children}
        </Flex>
    )
}
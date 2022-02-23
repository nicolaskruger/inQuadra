import { Box, Button, Flex, Spacer, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import { ModalInQ } from "../../../components/modal";

export type HowHeplProps = {
    title: string,
    description: string
}

export const HowHelpCard: FC<HowHeplProps> = ({ title, description, children }) => {

    const { onClose, isOpen, onOpen } = useDisclosure();

    return (
        <>
            <Flex
                bg={"gray.700"}
                borderRadius={"20px"}
                p="5"
                width={["300px", "250px", "250px"]}
                direction={"column"}
                align="center"
                justify={"space-between"}
            >
                <Text
                    fontWeight={"bold"}
                    fontSize={"20"}
                    color="green.300"
                    my={"2"}
                >
                    {title}
                </Text>
                <Text mb="5" align={"justify"}>
                    {description}
                </Text>
                <Button
                    width={"100%"}
                    colorScheme={"gray.500"}
                    variant="solid"
                    bg="gray.500"
                    onClick={() => onOpen()}
                >
                    <Text>Saiba</Text>
                    <Box width={"10px"} />
                    <Text fontSize={"20"} fontWeight={"bold"} color={"green.300"} >+</Text>
                </Button>
            </Flex>
            <ModalInQ isOpen={isOpen} onClose={onClose} title={title} >
                <Box width={"100%"}>
                    <Stack spacing={4}>
                        {children}
                    </Stack>
                </Box>
            </ModalInQ>
        </>
    )
}
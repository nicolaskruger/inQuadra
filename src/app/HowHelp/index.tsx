import { Container, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { ContainerInQ } from "../../components/Container";
import { OffsetWrapperAncor } from "../../components/OffsetWrapperAncor";
import { HowHelpCard, HowHeplProps } from "./HowHelpCard";

const list: HowHeplProps[] = [
    {
        description: "lorem ".repeat(10),
        title: "Pix",
    },
    {
        description: "lorem ".repeat(10),
        title: "Vaka",
    },
    {
        description: "lorem ".repeat(10),
        title: "Ajude na divulgação"
    },
]

export const HowHelp: FC = () => {
    return (
        <OffsetWrapperAncor id="ajudar">
            <ContainerInQ >
                <Flex my={"8"} w="100%" justifyContent={["space-evenly", "space-evenly", "space-between"]} wrap={"wrap"} gap="30px">
                    {list.map(props => (
                        <HowHelpCard key={props.title} {...props} />
                    ))}
                </Flex>
            </ContainerInQ>
        </OffsetWrapperAncor>
    )
}
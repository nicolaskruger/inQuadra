import { Flex, Link, Stack, Text, Wrap } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { ContainerInQ } from "../../components/Container";
import { OffsetWrapperAncor } from "../../components/OffsetWrapperAncor";
import { Title } from "../../components/Title";
import { FoneInfo } from "./FoneInfo";
import { HowHelpCard, HowHeplProps } from "./HowHelpCard";


export const HowHelp: FC = () => {

    type HowProps = HowHeplProps & {
        children: ReactNode
    }
    const list: HowProps[] = [
        {
            description: "lorem ".repeat(10),
            title: "Pix",
            children: <Text fontSize={"2xl"} color={"blue.300"}>pix@email</Text>
        },
        {
            description: "lorem ".repeat(10),
            title: "Vaka",
            children: <Link fontSize={"2xl"} color={"blue.300"} target={"_blank"} href={"https://www.youtube.com/watch?v=aM0jA2b7HCk"}>vaka.com</Link>
        },
        {
            description: "lorem ".repeat(10),
            title: "Ajude na divulgação",
            children: (
                <>
                    <Text fontSize={"2xl"}>
                        {"fones para contato:"}
                    </Text>
                    <FoneInfo fone="123456789" />
                    <FoneInfo fone="123456" />
                </>
            )
        },
    ]
    return (
        <OffsetWrapperAncor id="ajudar">
            <ContainerInQ display={"flex"} direction="column" >
                <Title>
                    Como ajudar
                </Title>
                <Wrap my={"8"} w="100%" justify={["space-evenly", "space-evenly", "space-between"]} spacing="30px">
                    {list.map(({ children, ...props }) => (
                        <HowHelpCard key={props.title} {...props} >
                            {children}
                        </HowHelpCard>
                    ))}
                </Wrap>
            </ContainerInQ>
        </OffsetWrapperAncor>
    )
}
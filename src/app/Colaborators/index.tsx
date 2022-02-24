import { Flex, SimpleGrid, Stack, Wrap } from "@chakra-ui/react";
import { FC } from "react";
import { ContainerInQ } from "../../components/Container";
import { OffsetWrapperAncor } from "../../components/OffsetWrapperAncor";
import { Title } from "../../components/Title";
import { ColaboratorCardProps, ColoboratorCard } from "./ColaboratorCard";

const list: ColaboratorCardProps[] = " ".repeat(53).split("").map((_) =>
({
    name: "ere_skater"
})
)

export const Colaborators: FC = () => {
    return (
        <OffsetWrapperAncor id="colaboradores">

            <ContainerInQ>
                <Stack>
                    <Title>
                        Colaboradores
                    </Title>
                    <Wrap
                        spacing={"15px"}
                        justify={"space-between"}
                    >
                        {
                            list.map(({ name }, index) => (
                                <ColoboratorCard key={index} name={name} />
                            ))
                        }
                    </Wrap>
                </Stack>
            </ContainerInQ>
        </OffsetWrapperAncor>
    )
}
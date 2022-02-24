import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import { ContainerInQ } from "../../components/Container";
import { OffsetWrapperAncor } from "../../components/OffsetWrapperAncor";
import { Title } from "../../components/Title";

export const KnowProject: FC = () => {
    return (
        <OffsetWrapperAncor id="conheca">
            <ContainerInQ>
                <Box>
                    <Title>
                        Conheça o projeto
                    </Title>
                    <Text
                    >
                        {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aspernatur maiores incidunt magnam ullam nobis tempora possimus nisi, ducimus deleniti numquam, corporis harum odio distinctio quod. Necessitatibus voluptatibus fugiat at!".repeat(3)}
                    </Text>
                </Box>
            </ContainerInQ>
        </OffsetWrapperAncor>
    )
}
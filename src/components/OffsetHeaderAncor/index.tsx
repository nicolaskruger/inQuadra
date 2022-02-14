import { Flex, Heading } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
    id: string;
}

export const OffSetHeaderAncor: FC<Props> = ({ id }) => {
    return (
        <Flex position={"absolute"} id={id} visibility={"hidden"} display={""} py={"4"}>
            <Heading>
                a
            </Heading>
        </Flex>
    )
}
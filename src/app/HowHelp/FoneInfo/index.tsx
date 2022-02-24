import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import { FC } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai"

export type FoneInfoProps = {
    fone: string
}

export const FoneInfo: FC<FoneInfoProps> = ({ fone }) => {
    return (
        <Flex
            as={"a"}
            target={"_blank"}
            href={`https://api.whatsapp.com/send?phone=5551${fone}&text=Ola, bora ajudar a Inquadras skate plaza SL`}
            align={"center"}
            justifyContent="space-between"
        >

            <Text>
                (51) {fone.slice(0, fone.length / 2 + 1) + "-" + fone.slice(fone.length / 2 + 1)}
            </Text>
            <Icon
                color={"green.300"}
                width="5"
                height={"5"}
                as={AiOutlineWhatsApp}
            />
        </Flex>
    )
}
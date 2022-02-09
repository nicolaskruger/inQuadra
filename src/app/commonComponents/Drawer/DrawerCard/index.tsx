import { Button, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";

export type DrawerCardButtonProps = {
    title: string,
    id: string,
}

export const DrawerCardButton: FC<DrawerCardButtonProps> = ({ children, title, id }) => {
    return (

        <Link
            textDecoration={"none"}
            _hover={{
                textDecor: "none"
            }}
            href={id}
            cursor={"pointer"}
            variant={"unstyled"}
        >
            <HStack spacing={"4"}>
                {children}
                <Text>
                    {title}
                </Text>
            </HStack>
        </Link>
    )
}
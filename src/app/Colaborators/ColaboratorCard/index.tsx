import { Img, Link, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";

export type ColaboratorCardProps = {
    name: string,

}

export const ColoboratorCard: FC<ColaboratorCardProps> = ({ name }) => {
    return (
        <Link
            target={"_blank"}
            href={`https://instagram.com/${name}/`}
            style={
                {
                    textDecoration: "none"
                }
            }
        >
            <Stack
                align={"center"}
            >
                <Img
                    src={`/colaborators/${name}.jpg`}
                    filter={"grayscale(.5)"}
                    borderRadius={"full"}
                    height={["45px", "50px", "60px", "75px"]}
                    width={["45px", "50px", "60px", "75px"]}
                />
                <Text
                    fontSize={["sm", "md", "lg"]}
                    textDecor={"none"}
                    color={"blue.300"}
                    fontFamily={'Cookie, cursive'}
                >
                    {`@${name}`}
                </Text>
            </Stack>
        </Link>
    )
}
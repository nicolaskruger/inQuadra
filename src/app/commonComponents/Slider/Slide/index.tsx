import { Flex, Img, Link, Text } from "@chakra-ui/react"
import { FC } from "react"

type SlideProps = {
    src: string;
}

export const Slide: FC<SlideProps> = ({ src }) => {
    return (
        <Flex
            width={"100vw"}
            height={["250px", "450px", "450px", "450px", "500px"]}
            backgroundSize={"cover"}
            position={"relative"}
            align={"center"}
            justify={"center"}
            flexDir={"column"}
        >
            <Img
                position={"absolute"}
                height={"100%"}
                width={"100%"}
                src={src}
                zIndex={-1}
                filter={"brightness(50%)"}
                objectFit={"cover"}
                objectPosition={"center"}
            />
        </Flex>

    )
}
import { Heading } from "@chakra-ui/react"
import { FC } from "react"

export const Title: FC = ({ children }) => {
    return (
        <Heading
            my={"5"}
            color={"green.300"}
        >
            {children}
        </Heading>
    )
} 
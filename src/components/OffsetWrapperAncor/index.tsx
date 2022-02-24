import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { OffSetHeaderAncor } from "../OffsetHeaderAncor";

type Props = {
    id: string
}

export const OffsetWrapperAncor: FC<Props> = ({ children, id }) => {
    return (
        <Box position={"relative"}>
            <OffSetHeaderAncor id={id} />
            {children}
        </Box>
    )
}
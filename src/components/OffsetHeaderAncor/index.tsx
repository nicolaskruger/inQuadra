import { Flex, Heading, useMergeRefs } from "@chakra-ui/react";
import { FC, LegacyRef, useEffect, useRef, useState } from "react";

type Props = {
    id: string;
}

export const OffSetHeaderAncor: FC<Props> = ({ id }) => {

    const internalref = useRef<HTMLDivElement>(null);

    const ref = useMergeRefs(internalref);

    const [width, setWidth] = useState("0px");

    useEffect(() => {
        setWidth(`-${(internalref.current?.offsetWidth || 0) + 32}px`);
    }, [])

    return (
        <Flex ref={ref} position={"absolute"} id={id} top={width} visibility={"hidden"} display={""} py={"4"}>
            <Heading>
                a
            </Heading>
        </Flex>
    )
}
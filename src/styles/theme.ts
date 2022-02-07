import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {

    },
    fonts: {
        body: "Roboto",
        heading: "Roboto",
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }
});
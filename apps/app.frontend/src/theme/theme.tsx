import { extendTheme } from "@chakra-ui/react"; 

const customTheme = extendTheme({
    components: {
        Container: {
            baseStyle: {
                maxW: "100%",
                px: 0
            }
        }
    },
    colors: {
        brand: {
            "50": "#E6F6EF",
            "100": "#C1EADD",
            "200": "#97DEC7",
            "300": "#6CD2B0",
            "400": "#41C79A",
            "500": "#199266",
            "600": "#168055",
            "700": "#126E47",
            "800": "#0F5D39",
            "900": "#0B4A2B"
        }
    }
});

export default customTheme;
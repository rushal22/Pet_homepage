import {Box} from "@mui/material";
import Header from "./header"
import Footer from "./footetr"

export default function Layout({children}) {

    return (
            <Box>
                <Header/>
                <Box>
                    {children}
                </Box>
                <Footer/>
            </Box>
    )
}

import React from 'react';
import { CssBaseline, MuiThemeProvider } from "@material-ui/core"
import { theme } from 'styles/materialTheme'
import type { AppProps } from 'next/app'

const MemeItApp = ({ Component, pageProps }: AppProps) => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </MuiThemeProvider>
    )

}
export default MemeItApp
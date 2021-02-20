import Document, {Head, Main, NextScript, Html} from "next/document";
import { ServerStyleSheet } from "styled-components";


interface IProps {
    readonly ctx: any,
    readonly App: any,
    readonly props: any
}


// @ts-ignore
export default class MyDocument extends Document {
    static async getInitialProps({ctx}: IProps) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: ({App}: IProps) => ({props}: IProps) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
    render() {
        return (
            <Html>
                <Head title='' />
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}
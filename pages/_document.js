import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const props = await Document.getInitialProps(ctx)

        return {
            ...props  
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <style>
                        {`.test { color: blue }`}
                    </style>
                </Head>
                <body className="test">
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
        )
    }
}

export default MyDocument
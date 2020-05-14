import App, { Container } from 'next/app'
import 'antd/dist/antd.css'
import Layout from '../components/layout'

class MyApp extends App {
    // 每个页面切换这个方法都会执行

    static async getInitialProps( {Component, ctx} ) {
        let pageProps

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)

        }

        return {
            pageProps
        }
    }

    render() {
        const { Component, pageProps } = this.props
 
        return (
            <Container>
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </Container>
        ) 
    }
}


export default MyApp
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/main.js'
import theme from '../lib/theme.js'
import Fonts from '../components/fonts.js'

const Website = ({ Component, pageProps, router }) => {
	return(
		<ChakraProvider theme={theme}>
			<Fonts />
			<Layout router={router}>
				<Component {...pageProps} key={router.route} />
			</Layout>
		</ChakraProvider>
	)
}

export default Website

import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'
import { BioSection, BioYear } from '../components/bio.js'

const Page = () => {
	return (
		<Container>
			<Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3}  mb={6} align="center">
				Hello - I am full stack developer based in Boston
			</Box>

			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Jaewoo Chung
					</Heading>
					<p>Developer | Designer | Engineer</p>
				</Box>
				<Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
						borderStyle="solid"
						maxWidth="100px"
						display="inline-block"
						borderRadius="full"
						src="/images/jaewoo.png"
						alt="Profile image"
					/>
        </Box>
			</Box>
			<Section delay={0.1}>
				<Heading as="h3" variant="section-title">
					About
				</Heading>
				<Paragraph>
					I have a passion for developing and programming. &#10; I enjoy building FullStack applications as well as learning new
					technologies such as Machine Learning.
				</Paragraph>
				<Box align="center" my={4}>
          <NextLink href="https://github.com/jaewoochung" target="_blank">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
			</Section>

			<Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Seoul (서울), Korea.
        </BioSection>
				<BioSection>
          <BioYear>2000</BioYear>
					Immigrated to Boston, MA
        </BioSection>
				<BioSection>
					<BioYear>2015</BioYear>
					Graduated from Arlington High School
				</BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed my Bachelor&apos;s degree at the University of Massachusetts Boston
					- Computer Science
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Started working at Akamai Technologies - Cambridge, MA
        </BioSection>
      </Section>

			<Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I enjoy...
        </Heading>
        <Paragraph>
          Music, basketball, camping, hiking, Movies/TV and reading
        </Paragraph>
      </Section>

		</Container>
		
	)
}

export default Page

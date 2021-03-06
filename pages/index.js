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
import {
  ChevronRightIcon,
  ArrowRightIcon
} from '@chakra-ui/icons'
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'
import { BioSection, BioYear } from '../components/bio.js'

const Page = () => {
	return (
		<Container>
			<Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3}  mb={6} align="center">
				Hello - I am a full stack developer based in Boston.
			</Box>

			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Jaewoo Chung
					</Heading>
					<p>Developer | Engineer | Designer</p>
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
					I have a passion for developing web applications using React, Node.js and Express.
          For designing my applications I like to utilize Chakra-UI components.
          I also enjoy learning new technologies and topics such as TypeScript, React Native, Containers and Machine Learning.
          <br />
          <br />
    &nbsp; At the moment, I am looking for new opportunities to work as a developer working on both front end and back end development.
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
          Born in Seoul (??????), Korea.
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
          Completed my Bachelor of Science (B.S.) degree at the University of Massachusetts Boston
					in Computer Science
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
        <BioSection>
          <BioYear>
            Music:
          </BioYear>
          Hip/Hop, Jazz, Classical, R&B
        </BioSection>
        <BioSection>
          <BioYear>
            Basketball:
          </BioYear>
          Boston Celtics, playing mens leagues
        </BioSection>
        <BioSection>
          <BioYear>
            National Parks:
          </BioYear>
          Zion, Bryce, Arches and Rocky Mountains
        </BioSection>
        <BioSection>
          <BioYear>
            Reading:
          </BioYear>
          Fiction, Sci/Fi, Fantasy
        </BioSection>
        <BioSection>
          <BioYear>
            TV:
          </BioYear>
          Curb your enthusiasm, Breaking Bad, Prison Playbook
        </BioSection>
      </Section>

		</Container>
		
	)
}

export default Page

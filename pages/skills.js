import {
	Container,
	Heading,
	Box,
	Flex,
	Text,
	Image
} from '@chakra-ui/react'

const Skills = () => (
	<Container>
		<Heading as="h3" fontSize={30} mb={4}>
			Skills
		</Heading>
		<Box>
			<Flex justify="space-between">
				<Text fontSize={25}>Python</Text>
				<Image maxWidth="125px" src="/images/skills/python.png" />
			</Flex>
			<Flex justify="space-between">
				<Text fontSize={25}>Javascript</Text>
				<Image maxWidth="125px" src="/images/skills/javascript.png" />
			</Flex>
			<Flex justify="space-between">
				<Text fontSize={25}>Git</Text>
				<Image maxWidth="125px" src="/images/skills/git.png" />
			</Flex>
			<Flex justify="space-between">
				<Text fontSize={25}>Linux</Text>
				<Image maxWidth="125px" src="/images/skills/linux.png" />
			</Flex>			
		</Box>
	</Container>
)

export default Skills

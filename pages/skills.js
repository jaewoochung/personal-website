import {
	Container,
	Heading,
	Box,
	Flex,
	Text,
	Image
} from '@chakra-ui/react'
import SkillBox from '../components/skillBox'

const Skills = () => (
	<Container>
		<Heading as="h3" fontSize={30} mb={4}>
			Skills
		</Heading>
		<Box>
      <SkillBox
        id="python"
        skillName="Python"
        experience="Proficient"
        imageLink="/images/skills/python.png"
      />
      <SkillBox
        id="javascript"
        skillName="JavaScript"
        experience="Proficient"
        imageLink="/images/skills/javascript.png"
      />
      <SkillBox
        id="git"
        skillName="Git"
        experience="Proficient"
        imageLink="/images/skills/git.png"
      />
      <SkillBox
        id="linux"
        skillName="Linux"
        experience="Proficient"
        imageLink="/images/skills/linux.png"
      />
      <SkillBox
        id="html-css"
        skillName="HTML/CSS"
        experience="Intermediate"
        imageLink="/images/skills/css.png"
      />
      <SkillBox
        id="mongo"
        skillName="mongoDB"
        experience="Intermediate"
        imageLink="/images/skills/mongo.png"
      />
      <SkillBox
        id="redux"
        skillName="Redux"
        experience="Intermediate"
        imageLink="/images/skills/redux.png"
      />
      <SkillBox
        id="sql"
        skillName="SQL"
        experience="Intermediate"
        imageLink="/images/skills/sql.png"
      />
		</Box>
	</Container>
)

export default Skills

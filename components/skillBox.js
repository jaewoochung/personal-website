import {
  Box,
  Flex,
  Text,
  Image
} from '@chakra-ui/react'

const SkillBox = ({ skillName, experience, imageLink }) => (
  <Flex justify="space-around" pb={10}>
    <Box>
      <Text fontSize={25} fontWeight="bold">{skillName}</Text>
      <Text fontSize={20}>{experience}</Text>
    </Box>
    <Image maxWidth="125px" src={imageLink} />
  </Flex>
)

export default SkillBox

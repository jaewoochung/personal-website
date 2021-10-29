import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item.js'
import thumbChat from '../public/images/works/chat.png'
import thumbDashboard from '../public/images/works/dashboard.png'
import thumbPainting from '../public/images/works/painting.png'
import thumbSudoku from '../public/images/works/sudoku.png'

const Works = () => (
	<Container>
		<Heading as="h3" fontSize={20} mb={4}>
			Works
		</Heading>

		<SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
        <WorkGridItem id="chatapp" title="ChatApp" thumbnail={thumbChat}>
          A Markdown note-taking app with 100+ plugins, cross-platform and
          encrypted data sync support
        </WorkGridItem>
      </Section>
      <Section>
				<WorkGridItem
          id="dashboard"
          title="dashboardApp"
          thumbnail={thumbDashboard}
				>
          A utility front end application for daily information intake.
					Provides local weather, NBA scores, and news
				</WorkGridItem>
			</Section>

      <Section delay={0.1}>
				<WorkGridItem
          id="painting"
          title="Basic painting recognition"
          thumbnail={thumbPainting}
				>
          A video work generated with deep learning, imitating famous four
          painters like Van Gogh
				</WorkGridItem>
			</Section>

			<Section delay={0.1}>
				<WorkGridItem id="sudoku" thumbnail={thumbSudoku} title="Sudoku">
					An android Sudoku App
				</WorkGridItem>
			</Section>
    </SimpleGrid>
		
	</Container>
)

export default Works

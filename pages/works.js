import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item.js'
import thumbChat from '../public/images/works/chat.png'
import thumbDashboard from '../public/images/works/dashboard.png'
import thumbPainting from '../public/images/works/painting.png'
import thumbSudoku from '../public/images/works/sudoku.png'
import thumbBrick from '../public/images/works/brickBreaker.png'
import thumbSocial from '../public/images/works/social-network.png'

const Works = () => (
	<Container>
		<Heading as="h3" fontSize={20} mb={4}>
			Works
		</Heading>

		<SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
        <WorkGridItem
          id="social-network"
          title="Social Network"
          thumbnail={thumbSocial}
          gitLink="https://social-network-client-delta.vercel.app/"
        >
          A replication of social media platforms with core features such as creating users, posts, friending and liking
        </WorkGridItem>
      </Section>
      <Section>
        <WorkGridItem
					id="chatapp"
					title="ChatApp"
					thumbnail={thumbChat}
					gitLink="https://chat-app-jaewoo.netlify.app/"
				>
          A Fullstack application that allows a user to send real time messages.
					Makes use of third party services - twilio and stream-chat
        </WorkGridItem>
      </Section>
      <Section>
				<WorkGridItem
          id="dashboard"
          title="dashboardApp"
          thumbnail={thumbDashboard}
					gitLink="https://main.d2s9eeiwuys93w.amplifyapp.com/"
				>
          A utility front end application for daily information intake.
					Provides local weather, NBA scores, and news
				</WorkGridItem>
			</Section>      

      <Section delay={0.1}>
				<WorkGridItem
          id="brickBreaker"
          title="Brick breaker game"
          thumbnail={thumbBrick}
					gitLink="https://github.com/jaewoochung/brick-breaker"
				>
          Famous arcade game - Brick Breaker
          Object oriented focused game project.
				</WorkGridItem>
			</Section>

			<Section delay={0.1}>
				<WorkGridItem
					id="sudoku"
					thumbnail={thumbSudoku}
					title="Sudoku"
					gitLink="https://github.com/jaewoochung/Sudoku"
				>
					An sudoku android application - Full functionalities of the famous logic based puzzle
				</WorkGridItem>
			</Section>

      <Section delay={0.1}>
				<WorkGridItem
          id="painting"
          title="Basic painting recognition"
          thumbnail={thumbPainting}
					gitLink="https://github.com/jaewoochung/painting-classifier"
				>
          A video work generated with deep learning, imitating famous four
          painters like Van Gogh
				</WorkGridItem>
			</Section>
      
    </SimpleGrid>
		
	</Container>
)

export default Works

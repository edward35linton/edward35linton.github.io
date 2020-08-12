import React from 'react'
import ProjectsStyle from '../css/Cv.css'
import {Container, Card, CardDeck, Button} from 'react-bootstrap'
import Stardust_Images from '../img/stardust_images.jpg'
import Water4Cities from '../img/Water4Cities.PNG'


class Projects extends React.Component {
	render(){
		return(
			<Container fluid className="projectsContainer">
				
					<Card className="card">
						<Card.Img variant="top" src={Stardust_Images} />
						<Card.Body>
							<Card.Title>Stardust Images</Card.Title>
							<Card.Text>
								A full MERN stack website designed to allow customers to shop at my sister's photography business.
								<br />
								Allowed me to learn MongoDB, Express and React.
							</Card.Text>
							<Button variant="primary" href="https://github.com/edward35linton/Stardust_Images">GitHub</Button>
						</Card.Body>
					</Card>

					<Card className="card">
						<Card.Img variant="top" src={Water4Cities} />
						<Card.Body>
							<Card.Title>Water4Cities Internship</Card.Title>
							<Card.Text>
								An Internship I undertook at Bangor University, in which I had to visually display data based on an interactive map
								<br />
								Allowed me to learn Bootstrap and D3.
							</Card.Text>
							<Button variant="primary" href="https://github.com/edward35linton/Water4Cities">GitHub</Button>
						</Card.Body>
					</Card>
				
			</Container>
		)
	}
}

export default Projects
import React from 'react'
import HomeStyle from '../css/Home.css'
import {Container, Col, Row} from 'react-bootstrap'
import Edward from '../img/Edward.jpg'

class Home extends React.Component {
	render() {
		return (
			<Container fluid className="homeContainer">
				<Row>
					<Col className="photoColumn" sm={12} lg={6}>
						<img
							src={Edward}
							className="photo"
						/>
					</Col>
					<Col className="textColumn" sm={12} lg={6}>
						<h4>
							About Me
						</h4>
						<p>
							Hi, I'm Ed! I'm a current Computer Science undergraduate at Bangor University, Gwynedd, Wales. I have been interested in computers and their inner workings ever since my cousin showed me a basic command line program when I was 12. From that day, I strived to learn as much as I possibly could. I consumed as much tech media as humanly possible, watching content creators such as Linus Tech Tips and Marques Brownlee. In 2014, using my newfound knowledge, I managed to build a desktop machine from scratch which I still use to this day.
							<br /><br />
							The success of my computer build lead to me taking Computer Science as a GCSE where I learned the basics of programming using Scratch and eventually Python. From there, I continued to take Computer Science at A-level and eventually at degree level. Along the way I have picked up knowledge in multiple languages but after being employed as a web development intern at Bangor University in 2020, I have narrowed down the field in which I would like to pursue a career.
							<br /><br />
							Of course, my life doesn't consist of just computers. I'm an avid mountain hiker, having completed the three peaks in 2016 and continuing to push myself on harder routes such as Helvellyn and Tryfan.  I have also been competing in dance (Ballroom, Latin American and Rock & Roll) at a Nationwide level since 2004, and have been crowned nationwide champion in Rock & Roll in 2012, 2017 and 2018. This has also lead me down the path of teaching dance, which I have previously been employed to do and now do voluntarily for the Ballroom and Latin society at Bangor University.
						</p>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Home
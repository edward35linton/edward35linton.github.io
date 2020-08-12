import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import NavBarStyle from '../css/NavBar.css'

function NavigationBar() {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Navbar.Toggle area-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav>
					<Nav.Item><Nav.Link href="/" className="text">Home</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link href="/cv">CV</Nav.Link></Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavigationBar
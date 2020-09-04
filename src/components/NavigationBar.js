import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import NavBarStyle from '../css/NavBar.css'
import {HashRouter, Route, Link} from 'react-router-dom';

function NavigationBar() {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Navbar.Toggle area-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav>
					<HashRouter basename="/">
					<Nav.Item><Nav.Link><Link to="/" className="link">Home</Link></Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link><Link to="/projects" className="link">Projects</Link></Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link><Link to="/cv" className="link">CV</Link></Nav.Link></Nav.Item>
					</HashRouter>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavigationBar
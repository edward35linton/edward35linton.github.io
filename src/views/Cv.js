import React from 'react'
import ProjectsStyle from '../css/Projects.css'
import {Container} from 'react-bootstrap'
import {Document, Page, pdfjs} from 'react-pdf'
import CV from '../pdf/CV.pdf'

class Projects extends React.Component {
	constructor() {
		super()
		pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
	}

	render(){
		let scale = 1.05
		let width = window.innerWidth

		if (width < 600) {
			scale = 0.55
		}

		return(
			<Container fluid className="cvContainer">
				<div className="pdfHolder">
					<Document file={CV} >
						<Page scale={scale} pageNumber={1} />
					</Document>
				</div>
			</Container>
		)
	}
}

export default Projects
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
		return(
			<Container fluid className="cvContainer">
				<Document file={CV} className="pdfHolder">
					<Page pageNumber={1} />
				</Document>
			</Container>
		)
	}
}

export default Projects
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel,Navbar,Nav} from 'react-bootstrap';
import 'holderjs';
import './App.css';
import stadium from './img/stadium.jpeg'
import logo from './img/Logo.png'
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase.js'
import EmailSignUp from './EmailSignUp';
/* CALENDAR IMPORTS */
import Calendar from "@ericz1803/react-google-calendar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
const API_KEY = 'AIzaSyB25yedkl2l_1rMronrM2-uryhpV5LqqFo';



/* CALENDAR IMPORTS */




let calendars = [
	{ calendarId: "6sgql291u4h6gd6h1d2hf7aulc@group.calendar.google.com" }
];

let calendarStyle = {
	tooltip: {
		opacity: 1
	}
}


export default function Main() {
	const [officers, setOfficers] = useState([])

	useEffect(() => {
		const fetchOfficers = async() => {
			const response = projectFirestore.collection('Officers')
			const data = await response.get()
			data.docs.forEach(item => {
				setOfficers(officers => [...officers, item.data()])
			})
		}
		fetchOfficers();
	}, [])

	const [gallery, setGallery] = useState([])

	useEffect(() => {
		const fetchGallery = async () => {
			const response = projectFirestore.collection('Gallery');
			const data = await response.get();
			data.docs.forEach(item => {
				setGallery(gallery => [...gallery, item.data()])
			})
		}
		fetchGallery();
	}, [])

	const [impacts, setImpacts] = useState([])

	useEffect(() => {
		const fetchImpacts = async () => {
			const response = projectFirestore.collection('Impacts');
			const data = await response.get();
			data.docs.forEach(item => {
				setImpacts(impacts => [...impacts, item.data()])
			})
		}
		fetchImpacts();
	}, [])
	console.log(officers)
	
		return (
		<body>
			<main>
				<header>
					<Navbar bg="light" expand="lg" fixed="top" >
						<Navbar.Brand href="#home"><img src={logo} class="img-fluid" alt="EC Main logo" /></Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
								<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
									<Nav className="ml-auto">
										<Nav.Link href="#">Home</Nav.Link>
										<Nav.Link href="#About us">About us</Nav.Link>
										<Nav.Link href="#Officers">Officers</Nav.Link>
										<Nav.Link href="#Impacts">Impacts</Nav.Link>
										<Nav.Link href="#Calendar">Calendar</Nav.Link>
										<Nav.Link href="#Gallery">Gallery</Nav.Link>
									</Nav>
								</Navbar.Collapse>
					</Navbar>
				</header>

				<div id="banner">
					<section class="py-5 text-center container">
						<div class="row py-lg-5">
							<div class="col-lg-8 col-md-8 mx-auto">
								<h1 class="fw-light"> Entrepreneurship Collective at the University of Florida</h1>
								<img src={stadium} alt="stadium" width="100%"/>
							</div>
						</div>
					</section>
				</div>

				<section id="About us">
					<h1 class="subheader">About us</h1>
					<div class="col-lg-6 col-md-8 mx-auto">
						<p class="lead text-muted">The Entrepreneurship Collective aims to serve the broad range of both graduate and undergraduate students at the University of Florida seeking to engage in the topics of entrepreneurship, creativity, and innovation in educative and social capacities by fostering a strong network of like-minded individuals in order to provide value to others in the Entrepreneurship Collective, the Gainesville Community and the world.</p>

						<div className="social-media">
							<a href="https://www.instagram.com/eco.uf/"><FontAwesomeIcon className="media-button" icon={faFacebook} size="3x" /></a>
							<a href="https://www.facebook.com/eCoUFL"><FontAwesomeIcon className="media-button" icon={faInstagram} size="3x"/></a>
							<a href="https://groupme.com/join_group/45340640/EuNXSbaY"><FontAwesomeIcon className="media-button" icon={faCommentDots} size="3x"/></a>
						</div>


					</div>
				</section>

				<section id="Officers">
					<div class="album py-5 bg-light">
						<div class="container">
							<div class="subheader">
								<h1>Officers</h1>
							</div>
							<div class="container">
								<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

									{
										officers && officers.map(item => {
											return (
												<div class="col">
													<div class="card shadow-sm">
														<img src={item.url} alt={item.name} width="auto" height="auto" />
														<div class="card-body">
															<p class="card-text"> {item.Descriptions}  </p>
															<div class="d-flex justify-content-between align-items-center">
																<small class="text-muted"> {item.Contacts} </small>
															</div>
														</div>
													</div>
												</div>
											)
										})
									}

								</div>
							</div>
						</div>
					</div>
				</section>

			

				{/* IMPACTS SECTION */}
				<section id="Impacts">
					<div class="container">
						<div class="subheader">
							<h1>Impacts</h1>
						</div>

						<div class="row row-cols-md-2">
							{
								impacts && impacts.map(impacts => {
									return (
										<div class="col p-5">
											<img src={impacts.url} width="100%" />
											<p>{impacts.Caption}</p>
										</div>
									)
								})
							}
						</div>

					</div>
				</section>

				<section id="Calendar">
					<div class="container">
						<div class="subheader">
							<h1>Event Calendar</h1>
							<Calendar apiKey={API_KEY} calendars={calendars} styles={calendarStyle} />
						</div>
					</div>
				</section>

				<section id="Gallery">
					<div class="container">
						<div class="subheader">
							<h1>Gallery</h1>
						</div>
						<Carousel>
							{
								gallery && gallery.map(gallery => {
									return (
										<Carousel.Item>
											<img className="d-block w-100" src={gallery.url} alt={gallery.Caption} />
											<Carousel.Caption>
												<p>{gallery.Caption}</p>
											</Carousel.Caption>
										</Carousel.Item>
									)
								})
							}
						</Carousel>
					</div>
				</section>

			</main>
			<hr></hr>
			<footer class="text-muted py-5">
				<div class="container">
					<p class="float-end mb-1">
						<a href="#">Back to top</a>
					</p>
					<Link to="/login">Log in</Link>

					<p>
						<Link to ="/email">Sign up for our mailing list</Link>
					</p>
				</div>
				<script src="../assets/dist/js/bootstrap.bundle.min.js"></script>		
			</footer>
		</body>
	)
};


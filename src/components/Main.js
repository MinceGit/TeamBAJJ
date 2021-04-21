import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import 'holderjs';
import './App.css';
import stadium from './img/stadium.jpeg'
import logo from './img/Logo.png'
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { db } from '../firebase.js'

/* CALENDAR IMPORTS */
import Calendar from "@ericz1803/react-google-calendar";
import EmailSignUp from './EmailSignUp';
const API_KEY =  'AIzaSyB25yedkl2l_1rMronrM2-uryhpV5LqqFo';


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
			const response = db.collection('Officers')
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
			const response = db.collection('Gallery');
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
			const response = db.collection('Impacts');
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
					<nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
						<a class="navbar-brand" href="#">
							<img src={logo} class="img-fluid" alt="EC Main logo" />
						</a>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNav">
							<ul class="navbar-nav ml-auto">
								<li class="nav-item active">
									<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#About us">About us</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#Officers">Officers</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#Impacts">Impacts</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#Calendar">Calendar</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#Gallery">Gallery</a>
								</li>
							</ul>
						</div>
					</nav>
				</header>

				<div id="banner">
					<section class="py-5 text-center container">
						<div class="row py-lg-5">
							<div class="col-lg-6 col-md-8 mx-auto">
								<h1 class="fw-light">Entrepreneurship Collective at the University of Florida</h1>
								<img src={stadium} alt="stadium" width="auto" height="auto" />
							</div>
						</div>
					</section>
				</div>

				<section id="About us">
					<h1 class="subheader">About us</h1>
					<div class="col-lg-6 col-md-8 mx-auto">
						<p class="lead text-muted">The Entrepreneurship Collective aims to serve the broad range of both graduate and undergraduate students at the University of Florida seeking to engage in the topics of entrepreneurship, creativity, and innovation in educative and social capacities by fostering a strong network of like-minded individuals in order to provide value to others in the Entrepreneurship Collective, the Gainesville Community and the world.</p>
						<i className="fa fa-facebook-square" aria-hidden="true"></i>
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
														<img src={item.Images} alt={item.name} width="auto" height="auto" />
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
											<img src={impacts.Image} width="100%" />
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
											<img className="d-block w-100" src={gallery.Image} alt={gallery.Caption} />
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

			<footer class="text-muted py-5">
				<div class="container">
					<p class="float-end mb-1">
						<a href="#">Back to top</a>
					</p>
					<Link to="/login">Log in</Link>
				</div>

 			<Carousel>
				{gallery}
			</Carousel>	
			</div>
		</section>	

	</main>
	
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
  </footer>
		
	<script src="../assets/dist/js/bootstrap.bundle.min.js"></script>			
	</body>
  );
}

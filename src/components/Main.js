import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import 'holderjs';
import './App.css';
import varidin from './img/varidin.jpeg'
import stadium from './img/stadium.jpeg'
import logo from './img/Logo.png'
import {Link} from "react-router-dom"

/* CALENDAR IMPORTS */
import Calendar from "@ericz1803/react-google-calendar";
const API_KEY =  'AIzaSyB25yedkl2l_1rMronrM2-uryhpV5LqqFo';
let calendars = [
	{calendarId: "6sgql291u4h6gd6h1d2hf7aulc@group.calendar.google.com"}
  ];

let calendarStyle = {
	tooltip : {
		opacity : 1
	}
}

export default function main() {
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

		<div id = "banner">
		<section class="py-5 text-center container">
		<div class="row py-lg-5">
			<div class="col-lg-6 col-md-8 mx-auto">
			<h1 class="fw-light">Entrepreneurship Collective at the University of Florida</h1>
			<img src = {stadium} alt = "stadium" width = "auto" height = "auto" />
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
						<div class="col">
							<div class="card shadow-sm">
							{/*<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
									<img src = {varidin} alt = "alex" width = "auto" height = "auto"/>
								<div class="card-body">
									<p class="card-text"> Alex is in his fourth year at the University of Florida and is currently working towards his Master's in Accounting with a minor in entrepreneurship.  </p>
									<div class="d-flex justify-content-between align-items-center">
										<small class="text-muted">Email: avaridin@ufl.edu </small>
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card shadow-sm">
							<img src = {stadium} alt = "stadium" width = "auto" height = "auto" /> 
		
								<div class="card-body">
									<p class="card-text">Another officer's info.</p>
									<div class="d-flex justify-content-between align-items-center">

										<small class="text-muted">Email: </small>
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card shadow-sm">
							<img src = {stadium} alt = "stadium" width = "auto" height = "auto"/>
								<div class="card-body">
									<p class="card-text">Another officer's info.</p>
									<div class="d-flex justify-content-between align-items-center">
										
										<small class="text-muted">Email: </small>
									</div>
								</div>
							</div>
						</div>
		
						<div class="col">
							<div class="card shadow-sm">
							<img src = {stadium} alt = "stadium" width = "auto" height = "auto"/>	
								<div class="card-body">
									<p class="card-text"> Another officer's info. </p>
									<div class="d-flex justify-content-between align-items-center">
										<small class="text-muted">Email: </small>
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card shadow-sm">
								<img src = {stadium} alt = "stadium" width = "auto" height = "auto"/>	
								<div class="card-body">
									<p class="card-text">  Another officer's info. </p>
									<div class="d-flex justify-content-between align-items-center">
										
										<small class="text-muted">Email</small>
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card shadow-sm">
								<img src = {stadium} alt = "stadium" width = "auto" height = "auto"/> 		
								<div class="card-body">
									<p class="card-text"> Another officer's info. </p>
									<div class="d-flex justify-content-between align-items-center">
										
										<small class="text-muted">Email: </small>
									</div>
								</div>
							</div>
						</div>
						
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
				{/* first row of impact images */}
				<div class="row">
					<div class="col-sm">
						<img src={"ecoLogoNoWords.svg"} width="100%"/>
						<p>Description 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
							Risus sed vulputate odio ut.</p>
					</div>
					<div class="col-sm">
						<img src={"ecoLogoNoWords.svg"} width="100%"/>
						<p>Description 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
							Risus sed vulputate odio ut.</p>
					</div>
				</div>
				{/* second row of impact images */}
				<div class="row">
					<div class="col-sm">
						<img src={"ecoLogoNoWords.svg"} width="100%"/>
						<p>Description 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
							Risus sed vulputate odio ut.</p>
					</div>
					<div class="col-sm">
						<img src={"ecoLogoNoWords.svg"} width="100%"/>
						<p>Description 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
							Risus sed vulputate odio ut.</p>
					</div>
				</div>
			</div>
		</section>

		<section id="Calendar">
		<div class="container">
			<div class="subheader">
				<h1>Event Calendar</h1>
				<Calendar apiKey={API_KEY} calendars={calendars} styles = {calendarStyle}/>
			</div>
			</div>
		</section>

		<section id="Gallery">
		<div class="container">
			<div class="subheader">
				<h1>Gallery</h1>
				</div>
 			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="holder.js/800x400?text=First slide&bg=373940"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="holder.js/800x400?text=Second slide&bg=282c34"
						alt="Second slide"
					/>
					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="holder.js/800x400?text=Third slide&bg=20232a"
						alt="Third slide"
					/>
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
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
  </footer>
		
	<script src="../assets/dist/js/bootstrap.bundle.min.js"></script>			
	</body>
  );
}

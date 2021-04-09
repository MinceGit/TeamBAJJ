
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import 'holderjs';
import './App.css';
import varidin from './img/varidin.jpeg'
import stadium from './img/stadium.jpeg'
import logo from './img/Logo.png'


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

let officers = ['Alex','2','3','4','5']
let officerDescriptions = ['Alex is in his fourth year at the University of Florida and is currently working towards his Master\'s in Accounting with a minor in entrepreneurship.','2','3','4','5']
let officerContact = ['Email: avaridin@ufl.edu ','2','3','4','5']
let officerList=[];
officers.forEach((item,index)=>{
  officerList.push(
	<div class="col">
	<div class="card shadow-sm">
		<img src = {varidin} alt = {officers[index]} width = "auto" height = "auto"/>
		<div class="card-body">
			<p class="card-text"> {officerDescriptions[index]}  </p>
			<div class="d-flex justify-content-between align-items-center">
				<small class="text-muted"> {officerContact[index]} </small>
			</div>
		</div>
	</div>
</div>


  )
})


let impactDescriptions = ['Impact 1', 'Impact 2', 'Impact 3', 'Impact 4']
let impacts = [];
impactDescriptions.forEach((item,index)=>{
	impacts.push(
			<div class="col p-5">
			<img src={"ecoLogoNoWords.svg"} width="100%"/>
			<p>{impactDescriptions[index]}</p>
			</div>
	)
  })

let galleryCaptions = ['Cap 1', 'Cap 2', 'Cap 3']
let galleryImages = ['holder.js/800x400?text=Temp&bg=282c34','holder.js/800x400?text=Temp&bg=282c34','holder.js/800x400?text=Temp&bg=282c34']
let gallery = [];
galleryCaptions.forEach((item,index)=>{
	gallery.push(
		<Carousel.Item>
		<img className="d-block w-100" src={galleryImages[index]} alt = {index}/>
		<Carousel.Caption>
			<p>{item}</p>
		</Carousel.Caption>
	</Carousel.Item>


	)
})



function App() {
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
			<div class="subheader">
				<h1>Officers</h1>
			</div>
				<div class="container">
					<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
						{officerList}
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
				{impacts}
				</div>

			</div>
		</section>

		<section id="Calendar">
			<div class="subheader">
				<h1>Event Calendar</h1>
				<Calendar apiKey={API_KEY} calendars={calendars} styles = {calendarStyle}/>
			</div>
		</section>

		<section id="Gallery">
			<div class="subheader">
				<h1>Gallery</h1>
				</div>
 			<Carousel>
				{gallery}
			</Carousel>	
		</section>	

	</main>
	
  <footer class="text-muted py-5">
		<div class="container">
			<p class="float-end mb-1">
				<a href="#">Back to top</a>
      </p>
    </div>
  </footer>
		
	<script src="../assets/dist/js/bootstrap.bundle.min.js"></script>			
	</body>

  );
}
export default App;
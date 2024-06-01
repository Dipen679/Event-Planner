import NavBar from "./NavBar"
import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"

function About()
{
	const nav = useNavigate()
	useEffect( () => {
		const un=localStorage.getItem("un")
		if(un == null)
			nav("/")
	},[]);

	return(
		<>
		<center>
			<div className="bg1">
			<NavBar/>
				<h1> Our Event Coordinators </h1>
				<h2> Click on the Below Links to Know More </h2>
				<h3> 
				<div className="nav1">
				<Link to="/dipen">Dipen Merchant</Link>
				<br/><br/>	
				<Link to="/saaim">Saaim Ansari</Link>
				<br/><br/>
				<Link to="/dhruv">Dhruv Bajoria</Link>
				<br/><br/>	
				<Link to="/sagar">Sagar</Link>
				</div>	
				</h3>
			</div>
		</center>
		</>
	)
}
export default About;
import NavBar from "./NavBar" 
import {useState} from "react"
import {getAuth,signOut, onAuthStateChanged} from "firebase/auth"
import {useNavigate} from "react-router-dom"
import app from "./FbConfig"
import {useEffect} from "react"
import {Link} from "react-router-dom"
import "./App.css"

function Home()
{
	const nav = useNavigate()
	const [user,setUser] = useState("")
	const [ans,setAns] = useState("")
	
	const out = (event) => {
		event.preventDefault()
		const auth = getAuth()
		signOut(auth)
		.then(res => {
			localStorage.clear()
			nav("/")
		})
		.catch(err => setAns("Issue" + err ))
	}


	useEffect( () => {
		let un = localStorage.getItem("un")
		if(un == null)
			nav("/")
		else
			setUser(un)
		},[])

	return(		
		<>

		<div className="bg">
		<NavBar/>
		<h1> Home Page </h1>
		<img src="/8.png" alt=""/>
		<center>
				<h3> Welcome { user } </h3>
				<h2> This is the Website of Lifeline Hospital </h2>
				<h4>
				Won Global Health Care excellence award in 2017 at Delhi,Corporate Excellence Award in Mumbai 2014 The hospital is mainly 				famous for excellent services.

				Life Line Hospital, established in the year 1996, i.e., 22 years super-specialty and multi-specialty corporate hospital. We 				are the best multi-speciality hospital in Maharashtra enlisted in NARI (national Art Registration of India).

				We are a reputed healthcare facility providing outstanding patient care and innovative medical and surgical treatments. It 				is all because of the remarkable support and graces of the medical fraternity and well-wishers.
				</h4>
				<form onSubmit = {out} >
					<input type="Submit" value="Logout" />
				</form>
				<h5> {ans} </h5>
		
		</center>
		</div>
		</>
	)
}
export default Home;
		
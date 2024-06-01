import { Link } from "react-router-dom"
import {getAuth,signOut, onAuthStateChanged} from "firebase/auth"
import {useState} from "react"
import { useNavigate } from "react-router-dom"
function NavBar() {
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
  
	const un = localStorage.getItem("un");
if (un != null) {
  // User is logged in, hide "Login" and "Signup" links
  return (
    <>
      <div className="nav header">
		<div className="nav-logo">
			<img src='./finallogo.png' alt = "hello" height={"121px"} width={"70px"}/> </div>
       <div className="custom-nav-links">
	   <Link to="/home">Home</Link>
        <Link to="/remainder">RemainderApp</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/form">Form</Link>
        <form onSubmit={out}>
          <button>Log Out</button>
        </form>
	   </div>
      </div>
    </>
  );
} else {
  // User is not logged in, show all navigation links
  return (
    <>
      <div className="nav header">
		<div className="nav-logo"><img src='./finallogo.png' /> </div>
       <div className="custom-nav-links">
	   <Link to="/">Login</Link>
        <Link to="/signup">Signup</Link>
	   </div>
      
      </div>
    </>
  );
}
}
export default NavBar;



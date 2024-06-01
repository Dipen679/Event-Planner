import NavBar from "./NavBar";
import { useState, useEffect } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import app from "./FbConfig"

function SignUp() {
	const nav = useNavigate()

	useEffect(() => {
		const un = localStorage.getItem("un")
		if (un != null)
			nav("/home")
	}, []);

	const [un, setUn] = useState("")
	const [pw1, setPw1] = useState("")
	const [pw2, setPw2] = useState("")
	const [ans, setAns] = useState("")

	const hUn = (event) => { setUn(event.target.value) }
	const hPw1 = (event) => { setPw1(event.target.value) }
	const hPw2 = (event) => { setPw2(event.target.value) }

	const save = (event) => {
		event.preventDefault();
		if (pw1 == pw2) {
			const auth = getAuth()
			createUserWithEmailAndPassword(auth, un, pw1)
				.then(res => nav("/"))
				.catch(err => setAns("Email Already in use" + err))
		}
		else {
			setAns("Password Did not Match")
		}
	}
	return (
		<>
			<center>
				<NavBar />
				<div className="signup-container">
					<form onSubmit={save}>
						<h2> SignUp Page </h2>


						<input type="email" placeholder="Enter Reg Email" onChange={hUn} />
						<br /><br />
						<input type="password" placeholder="Enter Password" onChange={hPw1} />
						<br /><br />
						<input type="password" placeholder="Confirm Password" onChange={hPw2} />
						<br /><br />
						<input type="Submit" />
					</form>
					<h2> {ans} </h2>
				</div>
			</center>
		</>
	);
}
export default SignUp;



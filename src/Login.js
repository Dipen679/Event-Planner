import NavBar from "./NavBar";
import { useState, useEffect } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import app from "./FbConfig"

function Login() {
	const nav = useNavigate()

	useEffect(() => {
		const un = localStorage.getItem("un")
		if (un != null)
			nav("/home")
	}, []);

	const [un, setUn] = useState("")
	const [pw, setPw] = useState("")
	const [ans, setAns] = useState("")

	const hUn = (event) => { setUn(event.target.value) }
	const hPw = (event) => { setPw(event.target.value) }

	const check = (event) => {
		event.preventDefault();
		const auth = getAuth()
		signInWithEmailAndPassword(auth, un, pw)
			.then(res => {
				localStorage.setItem("un", un)
				nav("/home")
			})
			.catch(err => setAns("Invalid UserName/Password" + err))
	}
	return (
		<>
			<center>
				<NavBar />
				<div className="login-container">
					<form onSubmit={check}>
						<h2> Login Page </h2>

						<input type="email" placeholder="Enter Reg Email" onChange={hUn} />
						<br /><br />
						<input type="password" placeholder="Enter Password" onChange={hPw} />
						<br /><br />
						<input type="Submit" />
					</form>
					<h2> {ans} </h2>
				</div>

			</center>
		</>
	);
}
export default Login;


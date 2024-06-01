import react from "react"
import NavBar from "./NavBar";
import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import emailjs from '@emailjs/browser'


export default function Form() {
	const nav = useNavigate()
	useEffect(() => {
		const un = localStorage.getItem("un")
		if (un == null)
			nav("/")
	}, []);

	const rName = useRef();

	const [name, setName] = useState("")
	const [add, setAdd] = useState("")
	const [phone, setPhone] = useState("")
	const [date, setDate] = useState("")
	const [time, setTime] = useState("")
	const [party, setParty] = useState("Family Function")


	const hName = (event) => { setName(event.target.value) }
	const hAdd = (event) => { setAdd(event.target.value) }
	const hPhone = (event) => { setPhone(event.target.value) }
	const hDate = (event) => { setDate(event.target.value) }
	const hTime = (event) => { setTime(event.target.value) }
	const hParty = (event) => { setParty(event.target.value) }


	const save = (event) => {
		event.preventDefault()
		let urladd = "http://localhost:9999/create"
		let data = { name, add, phone, date, time, party }
		emailjs.send("service_s0h1cfk", "template_ajsiwyh", data, "2Q0os0jFzx9RYnA9g")
		axios.post(urladd, data)
			.then(res => {
				if (res.data.insertedId != "") {
					alert("Thanks for Filling the Form")
					setName("")
					setAdd("")
					setPhone("")
					setDate("")
					setTime("")
					rName.current.focus();
				}
			})
			.catch(err => {
				if (err.code == "ERR_NETWORK") {
					alert("Pls Try Again Later")
					setName("")
					setAdd("")
					setPhone("")
					setDate("")
					setTime("")
					rName.current.focus();
				}
			});
	}

	return (
		<>
			<center>
				<NavBar />
				<div className="event-form w-100">
				<form onSubmit={save}>
						<h2> Enter the Details </h2>
						<input type="text" placeholder="Enter Name" required value={name} onChange={hName} ref={rName} />
						<br /><br />
						<textarea name="myTextBox" cols="30" rows="5" placeholder="Enter Address" value={add} onChange={hAdd}></textarea>
						<br /><br />
						<input type="text" placeholder="Enter Phone No." required value={phone} onChange={hPhone} />
						<br /><br />
						<label className="purple-text">Select The type of Event </label>
						<label>
						<input type="radio" name="f" value="Family Function" checked={true} onChange={hParty} default/> &nbsp; Family Function
						</label>
						<label>
						<input type="radio" name="f" value="Farewell" onChange={hParty} /> &nbsp; Farewell
						</label>
						<label>
						<input type="radio" name="f" value="Sports" onChange={hParty} /> &nbsp; Sports
						</label>
						<label>
						<input type="radio" name="f" value="Cultural" onChange={hParty} /> &nbsp; Cultural
						</label>

						<br /><br />

						<input type="date" required value={date} onChange={hDate} />
						<br /><br />

						<input type="time" required value={time} onChange={hTime} />
						<br /><br />

						<input type="Submit" />
					</form>
				</div>



			</center>
		</>
	)
}

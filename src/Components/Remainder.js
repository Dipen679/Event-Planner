import React, { useState,useEffect,useRef } from "react";
import { useNavigate,Link } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar";
import {useNavigate} from "react-router-dom"

const Water = () => {
    const nav = useNavigate()
	useEffect( () => {
		const un=localStorage.getItem("un")
		if(un == null)
			nav("/")
	},[]);

const [clockTime, setClockTime] = useState("00:00:00");
const [alarmTime, setAlarmTime] = useState("0");
const [status, setStatus] = useState(false);
const audioPlayer = useRef(null);
const [playing, setPlaying] = useState(false);
const [waterIntake, setWaterIntake] = useState(0);
const [reminders, setReminders] = useState([]);
const [time, setTime] = useState('');
const [dailyIntake, setDailyIntake] = useState({});
const currentDate = new Date().toLocaleDateString();
useEffect(() => {
  
if (status && clockTime === alarmTime) {
alert("It's Time for your Event");
setStatus(false);
}
}, [clockTime, alarmTime, status]);
const updateClockTime = () => {
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

if (hours.toString().length === 1) hours = "0" + hours;
if (minutes.toString().length === 1) minutes = "0" + minutes;
if (seconds.toString().length === 1) seconds = "0" + seconds;
let clockFormat = `${hours}:${minutes}:${seconds}`;
//console.log("Clock: ", clockFormat);
setClockTime(clockFormat);
};

const handleAlarmTimeChange = (e) => {
console.log("alarm time: ", e.target.value);
setAlarmTime(e.target.value);
};
const handleToggle = () => {
setStatus(!status);
};
const handleReset = () => {
setAlarmTime("0");
setWaterIntake(0);
setStatus(false);
};

useEffect(() => {
setInterval(updateClockTime, 1000);
}, []);
const incrementWaterIntake = () => {
setWaterIntake(waterIntake + 1);
setDailyIntake((prevIntake) => {
const updatedIntake = { ...prevIntake };
if (!updatedIntake[currentDate]) {
updatedIntake[currentDate] = 0;
}
updatedIntake[currentDate] += 1;
return updatedIntake;
});
};
const handleAddReminder = () => {
if (alarmTime.trim() !== '') {
setReminders([...reminders, alarmTime]);
}
};
const handleRemoveReminder = (index) => {
const updatedReminders = [...reminders];
updatedReminders.splice(index, 1);
setReminders(updatedReminders);

};
return (
<center>
<NavBar/>
<div class="card">
<div className="wrapper">
<h1>Event Reminder</h1>
<div className="containt">
<p id="clocktime"><b>Current Time : </b>{clockTime}</p>
<input type="time" step="1" value={alarmTime} onChange={handleAlarmTimeChange}/>
<button onClick={handleAddReminder} id="addr">Add Reminder</button><br/><br/>
<table border="2">
<thead>
<tr>
<th>Get Event Reminder at</th>
<th>Remove</th>
</tr>
</thead>
<tbody>
{reminders.map((reminder, index) => (
<tr key={index}>
<td>{reminder}</td>
<td> <button onClick={() => handleRemoveReminder(index)}
id="removebtn">Remove</button></td>
</tr>
))}
</tbody>
</table>
</div></div><br/>

{!playing && <button onClick={handleToggle} id="set">{status ? "Stop Reminder" : "Set Reminder"}</button>}
{playing && <button onClick={handleReset} id="set">Reset</button>}
</div>
</center>

);
};
export default Water;
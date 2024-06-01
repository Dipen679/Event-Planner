import logo from './logo.svg';
import './App.css';
import Login from "./Login"
import SignUp from "./SignUp"
import Form from "./Form"
import Feedback from "./Feedback"
import Remainder from "./Remainder"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"
import Venue from "./Components/Venue"
import Hero from "./Components/Hero"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/home" element={<Hero />} />
					<Route path="/about" element={<Projects />} />
					<Route path="/form" element={<Form />} />
					<Route path="/categories" element={<Skills />} />
					<Route path="/venues" element={<Venue />} />
					<Route path="/remainder" element={<Remainder />} />
					<Route path="/feedback" element={<Feedback />} />
					<Route path="/*" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

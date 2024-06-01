import NavBar from "./NavBar";
import { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
function Feedback() {
    const nav = useNavigate();
    const rId = useRef();
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [feedback, setFeedback] = useState("excellent");
    const [ans, setAns] = useState("");
    const hId = (event) => { setId(event.target.value); }
    const hName = (event) => {
        setName(event.target.value);
    }
    const hFeedback = (event) => {
        setFeedback(event.target.value);
    }
    useEffect(() => {
        const un = localStorage.getItem("un");
        if (un == null)
            nav("/");
    }, []);
    const find = (event) => {
        event.preventDefault();
        let urladd = "http://localhost:9998/create";
        let data = { id, name, feedback };
        axios.post(urladd, data)
            .then(res => {
                if (res.data.affectedRows == 1) {
                    alert("record saved");
                    setId("");
                    setName("");
                    rId.current.focus();
                }
                else {
                    alert("record already exists");
                    setId("");
                    setName("");
                    rId.current.focus();
                }
            })
            .catch(err => {
                if (err.code == "ERR_NETWORK") {
                    alert("Pls try after some time");
                    setAns("");
                    setName("");
                    rId.current.focus();
                    return;
                }
                let msg = "id " + id + " name " + name + " feedback " + feedback;
                setAns(msg);
            }
            );
    }
    return (
        <>
            <center>
                <NavBar />
                <div class="feedback container w-100">
                    <form onSubmit={find}>
                        <h2>Feedback Please</h2>
                        <input type="number" placeholder="Enter ID" onChange={hId} value={id} ref={rId} required />
                        <br /><br />
                        <input type="text" placeholder="Enter Name" onChange={hName} value={name} required />
                        <br /><br />
                        <input id="radio" type="radio" name="f" value="Avoid" checked={true}
                            onChange={hFeedback} /> 
                        <span class="star">&#9733;</span>
                        <br />
                        <input id="radio" type="radio" name="f" value="Poor" onChange={hFeedback} />
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <br />
                        <input id="radio" type="radio" name="f" value="Good" onChange={hFeedback} />
                        
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        
                        <br />
                        <input id="radio" type="radio" name="f" value="Superb" onChange={hFeedback} />
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        
                        <br />
                        <input id="radio" type="radio" name="f" value="Excellent" onChange={hFeedback} />
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <br /><br />
                        <input type="submit" id="login" />
                        <p>{ans}</p>
                    </form>
                </div>
            </center>
        </>
    );
}
export default Feedback;
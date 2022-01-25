
import React, { useState,useEffect } from "react";
import axios from "axios";
import "./form.css";
import {useHistory} from "react-router-dom";

export default function Fundraising(props) {
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [story, setStory] = useState("");
    const [img, setImg] = useState("");
    const [goal, setGoal] = useState("");
    const [id, setId] = useState("");
    const history = useHistory()
	useEffect(() => {
		setId(localStorage.getItem("userID"));
	}, []);
   
console.log('userid',id);
    function handleSubmit(e) {
        e.preventDefault();
        const user = {
           id, category, title, story, img, goal
        };

        alert(JSON.stringify(user));

        axios.post("http://localhost:3001/api/funds/addnewfundraising", user)
            .then(res => {
                console.log(res);
                history.push("/Donate")
                handleReset();
            });
            // alert.show('Thanks for Donating');
    }
    function handleReset() {
        setCategory("");
        setTitle("");
        setStory("");
        setImg("");
        setGoal("");

    }
    function validate() {
        // if (student === "") {
        //   setError("Student name cannot be blank");
        //   return;
        // }
        // if (interviewer === null) {
        //   setError("Interviewer cannot be unselected");
        //   return;
        // }
        // setError("");
        // save(email, password,firstName,lastName,phone,stAddress,province,state,postal);
      }

    return (
        <main className="">
            <section className="main">
                <h1>Fundrasing</h1>
                <form onSubmit={handleSubmit} >
                    <label name="category">category</label>
                    <select name="category" onChange={(e) => setCategory(e.target.value)}>
                        <option value="">--Please choose an option--</option>
                        <option value="therapy">Therapy</option>
                        <option value="medical">Medical</option>
                        <option value="travel">Travel</option>
                        <option value="equipment">Equipment</option>
                        <option value="food">Food</option>
                        <option value="education">Education</option>
                    </select>
                    <label name="title">Title</label>
                    <input className="" name="title" value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <label name="story">Story</label>
                    <textarea className="" name="story" value={story}
                        onChange={(event) => setStory(event.target.value)}
                    />
                    <label name="img">Upload Image</label>
                    <input className="" name="img" value={img}
                        onChange={(event) => setImg(event.target.value)}
                    />
                    <label name="goal">Goal</label>
                    <input className="" name="goal" type="goal" value={goal}
                        onChange={(event) => setGoal(event.target.value)}
                    /><br/>
                    {/* <section className="">{error}</section> */}
                    <button type="submit" >Submit</button>
                    <button onClick={handleReset}>Reset</button>
                </form>
            </section>
        </main>
    );
}
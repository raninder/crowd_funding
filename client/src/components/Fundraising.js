import React, { useState,useEffect } from "react";
import axios from "axios";
import "./form.css";
export default function Fundraising(props) {
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [story, setStory] = useState("");
    const [img, setImg] = useState("");
    const [goal, setGoal] = useState("");
    const [id, setId] = useState("");
	useEffect(() => {
		setId(localStorage.getItem("userID"));
	}, []);
	console.log("ID",id);

    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            id,category,title, story, img, goal
        };

        alert(JSON.stringify(user));

        axios.post("http://localhost:3001/api/funds/addnewfundraising", user)
            .then(res => {
                console.log(res);
                handleReset();
            });
    }

    function handleReset(){
		setCategory(null);
        setTitle("");
		setStory("");
		setGoal("");
		setImg("");
	}
    return (
        <main className="mainsection">
            <section className="main">
                <h1>Fundraising</h1>
                <form onSubmit={handleSubmit}>
                    <label name="category">category</label>
                    <select name="category" onChange={(e) => setCategory(e.target.value)}>
                        <option value="">--Please choose an option--</option>
                        <option value="therapy">Therapy</option>
                        <option value="medical">Medical</option>
                        <option value="travel">Travel</option>
                        <option value="equipment">Equipment</option>
                        <option value="food">Food</option>
                        <option value="education">Education</option>
                    </select><br/><br/>
                    <label name="title">Title</label>
                    <input className="" name="title" value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    /><br /><br/>
                    <label name="story">Story</label>
                    <textarea className="" name="story" value={story}
                        onChange={(event) => setStory(event.target.value)}
                    /><br /><br/>
                    <label name="img">Upload Image</label>
                    <input className="" name="img" value={img}
                        onChange={(event) => setImg(event.target.value)}
                    /><br /><br/>
                    <label name="goal">Goal</label>
                    <input className="" name="goal" type="goal" value={goal}
                        onChange={(event) => setGoal(event.target.value)}
                    /><br /><br/>
                    {/* <section className="">{error}</section> */}
                    <button type="submit" >Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={handleReset}>Reset</button>
                </form>
            </section>
        </main>
    );
}
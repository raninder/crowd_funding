import React, { useState } from "react";
import axios from "axios";
export default function Fundrasing(props) {
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [story, setStory] = useState("");
    const [img, setImg] = useState("");
    const [goal, setGoal] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            category,title, story, img, goal
        };

        alert(JSON.stringify(user));

        axios.post("http://localhost:3001/api/funds/addnewfundrasing", user)
            .then(res => {
                console.log(res);
            });
    }
    return (
        <main className="">
            <section className="">
                <h1>Fundrasing</h1>
                <form>
                    <label name="category">category</label>
                    <select name="category" onChange={(e) => setCategory(e.target.value)}>
                        <option value="">--Please choose an option--</option>
                        <option value="therapy">Therapy</option>
                        <option value="medical">Medical</option>
                        <option value="travel">Travel</option>
                        <option value="equipment">Equipment</option>
                        <option value="food">Food</option>
                        <option value="education">Education</option>
                    </select><br/>
                    <label name="title">Title</label>
                    <input className="" name="title" value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    /><br />
                    <label name="story">Story</label>
                    <textarea className="" name="story" value={story}
                        onChange={(event) => setStory(event.target.value)}
                    /><br />
                    <label name="img">Upload Image</label>
                    <input className="" name="img" value={img}
                        onChange={(event) => setImg(event.target.value)}
                    /><br />
                    <label name="goal">Goal</label>
                    <input className="" name="goal" type="goal" value={goal}
                        onChange={(event) => setGoal(event.target.value)}
                    /><br />
                    {/* <section className="">{error}</section> */}
                    <button type="submit" >Submit</button>
                </form>
            </section>
        </main>
    );
}
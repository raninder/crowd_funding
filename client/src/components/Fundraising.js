import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './form.css';
import {Link, useHistory} from 'react-router-dom';
export default function Fundraising(props) {
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [story, setStory] = useState("");
    const [img, setImg] = useState("");
    const [goal, setGoal] = useState("");
    const [uid, setUid] = useState("");
    const history = useHistory();
    useEffect(() => {
        setUid(localStorage.getItem("userID"));
    }, []);
    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            uid,category,title, story, img, goal
        };
        axios.post("http://localhost:3001/api/funds/addnewfundraising", user)
            .then(res => {
                console.log(res);
                history.push("/DonateMoney")
                
                
            })
            .catch(err => {
                console.log(err)
            });
            handleReset();
            setTimeout(()=> {
                history.push('/DonateMoney');
                },1500);
            // alert.show(‘Thanks for Donating’);
    }
    function handleReset() {
        setCategory("");
        setTitle("");
        setStory("");
        setImg("");
        setGoal("");
    }
    return (
        <main className="">
            <section className="main">
                <h1>Fundraising</h1>
                <form onSubmit={handleSubmit} >
                    <label name="category">category</label>
                    <select name="category" onChange={(e) => setCategory(e.target.value)}>
                        <option value="">--Please choose an option--</option>
                        <option value="therapy">Therapy</option>
                        <option value="medical">Medical</option>
                        <option value="travel">Travel</option>
                        <option value="equipment">Equipment</option>
                        <option value="food">Food</option>
                        <option value="ducation">Education</option>
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
                    {/* <section className=“”>{error}</section> */}
                    <button type="submit" >Submit </button>
                    <button onClick={handleReset}>Reset</button>
                </form>
            </section>
        </main>
    );
}
import React, { useState } from "react";
import { useHistory } from "react-router-dom";


export default function FundraisingOption () {
  const [state, setState] = useState({
    clicked: false
  });

  const history = useHistory();

  const handleClick = () => {
    setState({clicked : ! state.clicked})
  }
  return (
    <div className="fundOption-main">
      <h1> this page shows list of the fundraising campains</h1>
      <button className="startfund" onClick={() => history.push('/fundrasising')}> Start a Fundraising </button>


    </div>
  )
}
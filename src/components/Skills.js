import React, { useState } from "react";

const Skills = (props) => {
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState({skills: ""})
  const [result, setResult] = useState([])



  const togglePopup = () => {
    setToggle(!toggle);
  }

  const saveForm = (e) => {
    e.preventDefault()
    setResult(result.concat(input))
  }

  const removeItems = (data) => {
    const updated = result.filter(todo => todo.skills !== data.skills)
    setResult([...updated])
  }

    return(
      <ul>
      <button onClick={togglePopup}>Skills</button>
      {result.map((data) => (
        <>
        <p key={data.skills}>{data.skills}</p>
        <button onClick={() => removeItems(data)}>Remove</button>
        </>
      ))}
      {toggle && <form>
        <div>
          <label>Skills</label>
        </div>
        <div>
          <input onChange={ e => {setInput({ skills: e.target.value }) }}/>
        </div>
        <button onClick={saveForm}>Save</button>
        <button onClick={togglePopup}>Cancel</button>
       </form>}
     </ul>
    )
  }

export default Skills

import React, { useState } from "react";

const Education = (props) => {
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState({school: "", date: "", degree: "", study: "", location: ""})
  const [result, setResult] = useState([])

  const togglePopup = () => {
    setToggle(!toggle);
  }

  const saveForm = (e) => {
    e.preventDefault()
    setResult(result.concat(input))
  }
  const removeItems = (data) => {
        const updated = result.filter(todo => todo.school !== data.school)
        setResult([...updated]);
    }
    return(
      <ul>
      <button onClick={togglePopup}>Education</button>
      {result.map((data) => (
        <>
        <p key={data.school}>{data.school}</p>
        <p>{data.date}</p>
        <p>{data.degree}</p>
        <p>{data.study}</p>
        <p>{data.location}</p>
        <button onClick={() => removeItems(data)}>Remove</button>
        </>
      ))}
      {toggle && <form>
        <div>
          <label>School</label>
        </div>
        <div>
          <input value={input.school} onChange={ e => {setInput({...input, school: e.target.value }) }}/>
        </div>
        <div>
          <label>Date Attended (MM/YYYY - MM/YYYY)</label>
        </div>
        <div>
          <input onChange={ e => {setInput({...input, date: e.target.value }) }}/>
        </div>
        <div>
          <label>Degree</label>
        </div>
        <div>
          <input onChange={ e => {setInput({...input, degree: e.target.value }) }}/>
        </div>
        <div>
          <label>Field of study</label>
        </div>
        <div>
          <input onChange={ e => {setInput({...input, study: e.target.value }) }}/>
        </div>
        <div>
          <label>Location (e.g. Los Angeles, CA)</label>
        </div>
        <div>
          <input onChange={ e => {setInput({...input, location: e.target.value }) }}/>
        </div>
        <button onClick={saveForm}>Save</button>
        <button onClick={togglePopup}>Cancel</button>
       </form>}
     </ul>
    )
  }

export default Education

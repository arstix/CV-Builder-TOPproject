import React, { useState } from "react";
import '../styles/style.css'

const Experience = (props) => {
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState({title: "", company: "", date: "", location: "", description: ""})
  const [result, setResult] = useState([])


  const togglePopup = () => {
    setToggle(!toggle);
  }

  const saveForm = (e) => {
    e.preventDefault()
    setResult(result.concat(input))
  }
  const removeItems = (data) => {
        const updated = result.filter(todo => todo.title !== data.title)
        setResult([...updated]);
    }
console.log(result)

    return(
      <ul>
      <button onClick={togglePopup}>Work Experience</button>
      {result.map((data) => (
        <>
        <p key={data.title}>{data.title}</p>
        <p>{data.company}</p>
        <p>{data.date}</p>
        <p>{data.location}</p>
        <p>{data.description}</p>
        <button onClick={() => removeItems(data)}>Remove</button>
        </>
      ))}
      {toggle && <form>
        <div>
          <label>Job Title</label>
        </div>
        <div>
          <input value={input.title} onChange={ e => {setInput({ title: e.target.value }) }}/>
        </div>
        <div>
          <label>Company</label>
        </div>
        <div>
          <input value={input.company} onChange={ e => {setInput({...input, company: e.target.value }) }}/>
        </div>
        <div>
          <label>Date Worked (MM/YYYY - MM/YYYY)</label>
        </div>
        <div>
          <input value={input.date} onChange={ e => {setInput({...input, date: e.target.value }) }}/>
        </div>
        <div>
          <label>Location (e.g. Los Angeles, CA)</label>
        </div>
        <div>
          <input value={input.location} onChange={ e => {setInput({...input, location: e.target.value }) }}/>
        </div>
        <div>
          <label>Description</label>
        </div>
        <div>
          <input value={input.description} onChange={ e => {setInput({...input, description: e.target.value }) }}/>
        </div>

        <button onClick={saveForm}>Save</button>
        <button onClick={togglePopup}>Cancel</button>
       </form>}
     </ul>
    )
  }

export default Experience

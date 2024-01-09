import "../scss/form.scss"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {

  const BASE_URL = "https://sophisticated-humane-dandelion.glitch.me/"
  const [inputs, setInputs] = useState({})
  const navigate = useNavigate()

  const handleInput = (e) => {
    const {name, value} = e.target
    setInputs({...inputs, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
        const resp = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(inputs)
        })

        if(resp.ok) {     
        const result = await resp.json()
        alert("Prekė įkelta sėkmingai :)")
        navigate("/")
        }

    } catch (error) {
        console.error("Error during POST request:", error)
    }
  }

  return (
    <form action="#">
      <input name="image" type="url" placeholder="img" onChange={handleInput}/>
      <input name="title" type="text" placeholder="title" onChange={handleInput}/>
      <input name="price" type="number" step="0.01" placeholder="price" onChange={handleInput}/>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default Form
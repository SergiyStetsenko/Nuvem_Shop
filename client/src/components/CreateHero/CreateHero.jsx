import axios from 'axios'
import React, { useCallback, useState } from 'react'
import './CreateHero.scss'

export default function CreateHero(){
  const [text, setText]= useState({
    nickname: "",
    real_name: "",
    origin_description: "",
    superpowers: "",
    catch_phrase:""
  })

  const changeHendler = (event) =>{
    setText({...text, [event.target.name]:event.target.value
  })
  }
  const createHeros =useCallback(async()=>{
    // if(!nickname) return null
    try {
      await axios.post('/api/create',{...text},{
      headers: {'Content-Type': 'applicatiom/json'},
      
    }).then((response)=>console.log(response))
    } catch (error) {
      console.log(error.message)
    }
    
  })
    return(
        
      <div className="container">
      <h3>Добавить героя</h3>
      <form className="form form-login" onSubmit={e=>e.preventDefault()}>
          <div className="row">
            <div className="input-fiel col s12">
               <label className="input" htmlFor="input">Nickname: </label>
                <input 
                 value={text.nickname}
                 onChange={changeHendler}
                type="text"
                name="nickname" 
                id="nickname"
                className="validate"
                autoComplete='off'
                />
              </div> 
              <div className="input-fiel col s12">
               <label className="input" htmlFor="input">Real_name: </label>
                <input 
                value={text.real_name}
                onChange={changeHendler}
                type="text"
                name="real_name" 
                id="real_name"
                className="validate"
                autoComplete='off'
                />
              </div>
              <div className="input-fiel col s12">
               <label className="input " htmlFor="input">Origin_description: </label>
                <input 
                value={text.origin_description}
                 onChange={changeHendler}
                type="text"
                name="origin_description" 
                id="origin_description"
                className="validate origin"
                autoComplete='off'
                />
              </div>
              <div className="input-fiel col s12">
               <label className="input" htmlFor="input">Superpowers: </label>
                <input 
                value={text.superpowers}
                 onChange={changeHendler}
                type="text"
                name="superpowers" 
                id="superpowers"
                className="validate"
                autoComplete='off'
                />
              </div>
              <div className="input-fiel col s12">
               <label className="input" htmlFor="input">Catch_phrase: </label>
                <input 
                autoComplete='off'
                onChange={changeHendler}
                type="text"
                name="catch_phrase" 
                id="catch_phrase"
                className="validate"
                value={text.catch_phrase}
                />
              </div>
              <div className="row">
              <button onClick={createHeros} className="btn-floating btn-large waves-effect waves-light red">
              <i className="large material-icons">add</i>
                </button>    
              </div> 
              
    

          </div>
      </form>
      
      
  </div>
      
    )
}
import React, { useCallback } from 'react'
import axios from 'axios'
import './ListHero.scss'
import hero from  '../../images/hero.jpg'

const ListHero =()=>{

    const getHero = useCallback(async()=>{
        try {
           await axios.get('/api/info',{
            headers:{
                'Content-Type': 'application/json'
            },
            // params:{_id}
           }) 
           .then((response)=>console.log(response))
        } catch (error) {
            console.log(error.message) 
        }
    },)
    // getHero()
return(
    <div className=" list">
        <h3>Список Супергероев</h3>
        <div className=' flex '>
            <ul className=' flexing '> 
                <div className='icon'>
                <i className="material-icons blue-text">create</i>
                <i className="material-icons orange-text">delete</i>
                </div>
                <li className='listing list_item'>
                  <img className="hero" src={hero} alt="супермен" width="150"/>  
                  
                    </li> 
               <li className='listing'>Nickname: <p className='info'>Sus</p></li> 
               <li className='listing'>Real_name:<p className='info'>sedrdre</p></li> 
               <li className='listing'>Origin_description: <p className='info'>he waees born Kal-El on the planet Krypton, before being rocketed to</p> </li> 
               <li className='listing'>Superpowers:<p className='info'>solar eneergy absorption and healing factor, solar flare and heat vision</p></li> 
               <li className='listing'>Catch_phrase:<p className='info'>Look, uep in the sky</p></li> 
              
            </ul>
            <ul className=' flexing '> 
                <div className='icon'>
                <i className="material-icons blue-text">create</i>
                <i className="material-icons orange-text">delete</i>
                </div>
                <li className='listing list_item'>
                  <img className="hero" src={hero} alt="супермен" width="150"/>  
                  
                    </li> 
               <li className='listing'>Nickname: <p className='info'>Sus</p></li> 
               <li className='listing'>Real_name:<p className='info'>sedrdre</p></li> 
               <li className='listing'>Origin_description: <p className='info'>he waees born Kal-El on the planet Krypton, before being rocketed to</p> </li> 
               <li className='listing'>Superpowers:<p className='info'>solar eneergy absorption and healing factor, solar flare and heat vision</p></li> 
               <li className='listing'>Catch_phrase:<p className='info'>Look, uep in the sky</p></li> 
              
            </ul>
            <ul className=' flexing '> 
                <div className='icon'>
                <i className="material-icons blue-text">create</i>
                <i className="material-icons orange-text">delete</i>
                </div>
                <li className='listing list_item'>
                  <img className="hero" src={hero} alt="супермен" width="150"/>  
                  
                    </li> 
               <li className='listing'>Nickname: <p className='info'>Sus</p></li> 
               <li className='listing'>Real_name:<p className='info'>sedrdre</p></li> 
               <li className='listing'>Origin_description: <p className='info'>he waees born Kal-El on the planet Krypton, before being rocketed to</p> </li> 
               <li className='listing'>Superpowers:<p className='info'>solar eneergy absorption and healing factor, solar flare and heat vision</p></li> 
               <li className='listing'>Catch_phrase:<p className='info'>Look, uep in the sky</p></li> 
              
            </ul>
            <ul className=' flexing '> 
                <div className='icon'>
                <i className="material-icons blue-text">create</i>
                <i className="material-icons orange-text">delete</i>
                </div>
                <li className='listing list_item'>
                  <img className="hero" src={hero} alt="супермен" width="150"/>  
                  
                    </li> 
               <li className='listing'>Nickname: <p className='info'>Sus</p></li> 
               <li className='listing'>Real_name:<p className='info'>sedrdre</p></li> 
               <li className='listing'>Origin_description: <p className='info'>he waees born Kal-El on the planet Krypton, before being rocketed to</p> </li> 
               <li className='listing'>Superpowers:<p className='info'>solar eneergy absorption and healing factor, solar flare and heat vision</p></li> 
               <li className='listing'>Catch_phrase:<p className='info'>Look, uep in the sky</p></li> 
              
            </ul>
            <ul className=' flexing '> 
                <div className='icon'>
                <i className="material-icons blue-text">create</i>
                <i className="material-icons orange-text">delete</i>
                </div>
                <li className='listing list_item'>
                  <img className="hero" src={hero} alt="супермен" width="150"/>  
                  
                    </li> 
               <li className='listing'>Nickname: <p className='info'>Sus</p></li> 
               <li className='listing'>Real_name:<p className='info'>sedrdre</p></li> 
               <li className='listing'>Origin_description: <p className='info'>he waees born Kal-El on the planet Krypton, before being rocketed to</p> </li> 
               <li className='listing'>Superpowers:<p className='info'>solar eneergy absorption and healing factor, solar flare and heat vision</p></li> 
               <li className='listing'>Catch_phrase:<p className='info'>Look, uep in the sky</p></li> 
              
            </ul>
            <ul className=' flexing '> 
                <div className='icon'>
                <i className="material-icons blue-text">create</i>
                <i className="material-icons orange-text">delete</i>
                </div>
                <li className='listing list_item'>
                  <img className="hero" src={hero} alt="супермен" width="150"/>  
                  
                    </li> 
               <li className='listing'>Nickname: <p className='info'>Sus</p></li> 
               <li className='listing'>Real_name:<p className='info'>sedrdre</p></li> 
               <li className='listing'>Origin_description: <p className='info'>he waees born Kal-El on the planet Krypton, before being rocketed to</p> </li> 
               <li className='listing'>Superpowers:<p className='info'>solar eneergy absorption and healing factor, solar flare and heat vision</p></li> 
               <li className='listing'>Catch_phrase:<p className='info'>Look, uep in the sky</p></li> 
              
            </ul>
            <ul className=' flexing '> 
                <div className='icon'>
                <i className="material-icons blue-text">create</i>
                <i className="material-icons orange-text">delete</i>
                </div>
                <li className='listing list_item'>
                  <img className="hero" src={hero} alt="супермен" width="150"/>  
                  
                    </li> 
               <li className='listing'>Nickname: <p className='info'>Sus</p></li> 
               <li className='listing'>Real_name:<p className='info'>sedrdre</p></li> 
               <li className='listing'>Origin_description: <p className='info'>he waees born Kal-El on the planet Krypton, before being rocketed to</p> </li> 
               <li className='listing'>Superpowers:<p className='info'>solar eneergy absorption and healing factor, solar flare and heat vision</p></li> 
               <li className='listing'>Catch_phrase:<p className='info'>Look, uep in the sky</p></li> 
              
            </ul>
            <ul className=' flexing '> 
                <div className='icon'>
                <i className="material-icons blue-text">create</i>
                <i className="material-icons orange-text">delete</i>
                </div>
                <li className='listing list_item'>
                  <img className="hero" src={hero} alt="супермен" width="150"/>  
                  
                    </li> 
               <li className='listing'>Nickname: <p className='info'>Sus</p></li> 
               <li className='listing'>Real_name:<p className='info'>sedrdre</p></li> 
               <li className='listing'>Origin_description: <p className='info'>he waees born Kal-El on the planet Krypton, before being rocketed to</p> </li> 
               <li className='listing'>Superpowers:<p className='info'>solar eneergy absorption and healing factor, solar flare and heat vision</p></li> 
               <li className='listing'>Catch_phrase:<p className='info'>Look, uep in the sky</p></li> 
              
            </ul>
            <ul className=' flexing '> 
                <div className='icon'>
                <i className="material-icons blue-text">create</i>
                <i className="material-icons orange-text">delete</i>
                </div>
                <li className='listing list_item'>
                  <img className="hero" src={hero} alt="супермен" width="150"/>  
                  
                    </li> 
               <li className='listing'>Nickname: <p className='info'>Sus</p></li> 
               <li className='listing'>Real_name:<p className='info'>sedrdre</p></li> 
               <li className='listing'>Origin_description: <p className='info'>he waees born Kal-El on the planet Krypton, before being rocketed to</p> </li> 
               <li className='listing'>Superpowers:<p className='info'>solar eneergy absorption and healing factor, solar flare and heat vision</p></li> 
               <li className='listing'>Catch_phrase:<p className='info'>Look, uep in the sky</p></li> 
              
            </ul>
            <ul className=' flexing '> 
                <div className='icon'>
                <i className="material-icons blue-text">create</i>
                <i className="material-icons orange-text">delete</i>
                </div>
                <li className='listing list_item'>
                  <img className="hero" src={hero} alt="супермен" width="150"/>  
                  
                    </li> 
               <li className='listing'>Nickname: <p className='info'>Sus</p></li> 
               <li className='listing'>Real_name:<p className='info'>sedrdre</p></li> 
               <li className='listing'>Origin_description: <p className='info'>he waees born Kal-El on the planet Krypton, before being rocketed to</p> </li> 
               <li className='listing'>Superpowers:<p className='info'>solar eneergy absorption and healing factor, solar flare and heat vision</p></li> 
               <li className='listing'>Catch_phrase:<p className='info'>Look, uep in the sky</p></li> 
              
            </ul>
            
            
        
        </div>
    </div>
)
}
export default ListHero
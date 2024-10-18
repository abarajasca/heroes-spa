import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components/HeroCard';


const NotFound = ( {heroes, q} ) => (
  heroes.length === 0 && q.length > 0 ?  
    <div className="alert alert-danger animate__animated animate__fadeIn">
      No heroes with <b>{ q }</b>
    </div>
    :
    <></>
 )
 
const SearchHero = ( {queryValid} ) => (
  !queryValid ? 
    <div className="alert alert-primary animate__animated animate__fadeIn">
          Search a hero
    </div>      
  :
    <></>  
) 


export const SearchPage = () => {

  const refSearchText = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  
  const { q = '' } = queryString.parse( location.search );
  
  const heroes = getHeroesByName( q ); 

  const {formState, onChangeField} = useForm({ initialState: {searchText: `${q}` }});
  const { searchText } = formState;
  
  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${ searchText }`)
    setTimeout(()=> console.log("finishe timeout"),5000);
  }

  const queryValid = q.length !== 0;

  useLayoutEffect(()=>{refSearchText.current.focus();},[]);

  return (
    <>
    <div className="container">
     <h1>Search</h1>
     <hr/>

     <div className="row">
     <div className="col-5">
      <h4>Searching</h4>
      <hr/>
      <form onSubmit={onSubmit}>
        <input 
          className="form-control"
          ref={refSearchText}
          type="text"
          placeholder='Search a hero'
          name="searchText"
          autoComplete="off"
          value={searchText} 
          onChange={onChangeField}
        />
        <button className="btn btn-outline-primary mt-2">
          Search
        </button>

          
      </form>
     </div>

     <div className="col-7">
      <h4>Results</h4>
      <hr/>

      <SearchHero queryValid={queryValid}/>
      
      <NotFound heroes={ heroes } q={q}/>
           
      {
        heroes.map(
          hero => (
            <HeroCard key={hero.id} {...hero}/>
          )
        )
      }

     </div>
     </div>
     </div>
    </>
  )
}



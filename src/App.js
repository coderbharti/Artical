import React ,{useState} from 'react';
import Navigation from './pages/Navigation';
import SearchBar from './pages/SearchBar';
import ArticalItem from './pages/Artical-item';
import ArticalList from './pages/Artical-list';
import ShowDetails from './pages/ShowDetails';


function App() {
 const [show ,setShow]= useState(false);
  const[slug ,setSlug]= useState("");
  const[query ,setQuery]= useState("");
   const queryChangeHandler= (e)=>{
    setQuery( e.target.value);
    console.log(e.target.value)
   }
 const showHandler = (slug)=>{
  setShow(true)
  setSlug(slug)
  document.body.style.overflow = 'hidden'
  
      
    
  }
  const closeHandler = ()=>{
     setShow(false)
     setSlug(true)
     document.body.style.overflow = 'auto'

  
  }
  return (

    <>
      {show && <ShowDetails slug={slug} onClose={closeHandler}/> }
      <Navigation onShow={showHandler}/>  
      <SearchBar value={query} onChange={queryChangeHandler} onClose={closeHandler} />   
      <ArticalList onShow={ showHandler } searchQuery ={query} /> 

    </>
  
    //  ( show ?<ShowDetails slug={slug}/> :
    //  <>
    //  <Navigation onShow={showHandler}/>  
    //  <SearchBar/>   
    //  <ArticalList onShow={ showHandler } />
    //  </>
    //  )
        
  )
}

export default App
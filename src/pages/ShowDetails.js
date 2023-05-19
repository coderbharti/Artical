import React,{useEffect, useState} from 'react'
import"./ShowDetails.css"

function ShowDetails( {slug ,onClose}) {
   const[details ,SetDetails]=useState({});
   const htmlString = details.body

   const parser = new DOMParser();
   const htmlDocument = parser.parseFromString(htmlString, 'text/html');
   
   const paragraphElements = htmlDocument.querySelectorAll('p');
   let textContent = '';
   paragraphElements.forEach((paragraph) => {
     textContent += paragraph.textContent;
   });
   
   console.log(textContent);
   
   

  
  
     
    useEffect(() => {
        const fetchArticles = async () => {
          try {
            
            const response = await fetch(`https://api.theinnerhour.com/v1/blogdetail/${slug}`);
            const data = await response.json();
            console.log(data)
             SetDetails(data.blog)
            
          } catch (error) {
            console.error('Error fetching articles:', error);
          }
        };
    
        fetchArticles();
      }, []);
  return (
    <>
       <div className="model-wrapper"/>
     <div className='modal-container'> 
       <button className='details-btn' onClick={onClose}>X</button>
     <img src={details.thumb} className='details-img'/>
      <p className='details-title'>{details.title}</p>
      <p className='details-dd'>{textContent}</p>
    </div>
    </>
   
  )
}

export default ShowDetails
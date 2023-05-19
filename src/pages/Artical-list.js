import React,{useState ,useEffect} from 'react'
import ArticalItem from './Artical-item'
import"./Artical-list.css"

function Articallist(props) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://api.theinnerhour.com/v1/customers/resources/articles/list?page=1&limit=10');
        const {data }= await response.json();
      
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

 const filtered = articles.filter(artical =>artical.title.toLowerCase().includes(props.searchQuery.toLowerCase()));
   
  return (
     
     < div className='divs'>
      {filtered.map((article) => (
         <ArticalItem
         key={article.id}
         title={article.title}
         img={article.thumb}
         explain={article.short_description}
         onShow={props.onShow.bind(this,article.slug)}
         />
        
      ))}
   
  
    </ div>
  )
}

export default Articallist
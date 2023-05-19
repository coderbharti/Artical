import React from 'react';
import "./Navigation.css"
import SearchBar from './SearchBar';

function Navigation(props) {
  return (
    <>
    <div className='navbar' >
       <img src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0" className='logo' />
    </div>
    <SearchBar/>
    </>
  )
}

export default Navigation
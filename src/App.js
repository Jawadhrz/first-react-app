import React from 'react';
import BLogCard  from './BlogCard';
import { isArrayEmpty } from './Utils';
import './App.css';
 
function App() {
  const blogArr = [
    {
      id:1,
      title: 'Blog Title 1',
      description:'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor '
    },
    {
      id:2,
      title: 'Blog Title 2',
      description:'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor '
    },
    {
      id:3,
      title: 'Blog Title 3',
      description:'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor '
    }
  ] 

  const blogCards = isArrayEmpty(blogArr) ? [] : blogArr.map((item, pos) => {
     return (
       <BLogCard key={pos} title={item.title} description={item.description} id={item.id}/>
      //  <div className="BlogCard" key={item.id}>
      //    <h3>{item.title}</h3>
      //    <p>{item.description}</p>
      //  </div>
     )
  })

  return (
    <div className="App">
     {blogCards}
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import PostForm from './components/PostForm';
import {useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  // const [state, setState] = useState([]);
  // const [values, setValues] = useState({
  //   title:'',
  //   body:''
  // })

  // useEffect(() => {
  //   // fetch('https://jsonplaceholder.typicode.com/posts')
  //   // .then(res => res.json())
  //   // .then(data => setState(data))
  // },[])

  // useEffect (() => {
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //   .then(res => setTodos(res.data))
  // }, []);

// const onChange = (e) => {
//     setValues(prevState => {
//         ...prevState,[e.target.name]:e.target.value
//     })
// }
// const onChange = (e) => {
//   e.persist()
//   setValues(prevState => ({
//     ...prevState,[e.target.name]:e.target.value
//   }))
// }
// const onSubmit = (e) => {
//     console.log("elo");
//     e.preventDefault();
//     const data = {
//         title:values.title,
//         body:values.body
//     }
//     // fetch('https://jsonplaceholder.typicode.com/posts',{
//     //     method:'POST',
//     //     headers: {
//     //         'content-type':'application/json'
//     //     },
//     //     body: JSON.stringify(data)
//     // })
//     // .then(res => res.json())
//     // .then(data => {
//     //   const postsValue =[...state];
//     //   console.log(postsValue)
//     //   postsValue.unshift(data);
//     //   // console.log(postsValue.unshift(data))
//     //   // return setState(postsValue.unshift(data))
//     //   return setState(postsValue);
//     // })
// }
  return (
    // <Provider store={store}>
    //   <div className="App">
    //     <PostForm 
    //       onChange={onChange}
    //       values={values}
    //     />
    //     <hr></hr>
    //     <Post />
    //   </div>
    // </Provider>
    <div className="">
      <PostForm />
      <hr/>
      <Post/>
    </div>
  );
}

export default App;

import React from "react";

function Food(props) {
  return (
  <h1>I like {props.title}</h1>
  ); 
}


function App() {
  return ( 
  <div> 
    <h1>Hello !!!! </h1>
    <Food title = "Kimchee" something={true} papapapa={['hello', 1,2,3,4, true]}/>

  </div>
  );
}




export default App;

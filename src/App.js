import React from "react";
import ProTypes from 'prop-types';


function Food(props) {
  return (
  <div>
    <h2>I like {props.name}</h2>
    <h4>{props.rating}</h4>
    <img src= {props.picture} alt={props.name} />
  </div>
  ); 
}

//04-1 액션02: 음식데이터만들기 
const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image:
      'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/68/Stone-roasted_bibimbap.jpg',
    rating: 5,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg',
    rating: 5,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg',
    rating: 5,
  },
];

function renderFoods(dish) {

  return <Food key={dish.id} name = {dish.name} picture={dish.image} rating={dish.rating}/>;

}

//아래와 같이 변경도 가능함. 택1 
// const renderFoods = dish => <Food name = {dish.name} picture={dish.image} />;



function App() {
  
  return ( 
  <div> 
    {foodILike.map(renderFoods)}
  </div>
  );
}


Food.prototype = {
  name: ProTypes.string.isRequired,
  picture: ProTypes.string.isRequire,
  rating: ProTypes.number.isRequired,
};

export default App;

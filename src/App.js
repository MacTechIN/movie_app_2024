import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('Hello');
  }



  state = {
    count: 0, 
  };

  add = () => {
    
    this.setState({count:this.state.count + 1}); 
  }

  substract = () =>{
    
    this.setState({count: this.state.count - 1});
  }

  componentDidMount(){
    console.log("component did rendered");
  }

  componentDidUpdate() {
    console.log("component updated");
  }
    

  componentWillUnmount() {
    console.log("Goodbye, Cruel world!");
  }

  render() {
    console.log("render");
    return (
    
    <div>
      <h1>The number in state is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.substract}>Substract</button>
    </div>
);

  }
}

export default App;

/*
var destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <h3><i>Hi Batman</i></h3>
    <h3><i>Hi Jocker</i></h3>
    <h3><i>Hi Dobrinya</i></h3>
    <h3><i>Hi Erast</i></h3>
  </div>,
  
  destination 
);
*/  

class HelloWorld extends React.Component{
  render(){
    return <p>Hello, components world!</p>
  }
}

ReactDOM.render(
  <HelloWorld/>,
  document.querySelector('#container')
)
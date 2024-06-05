import { Component } from "react"

class Header extends Component {
    render(){
        return (<h1 className='hello'>HELLO SHEHIN'S {this.props.data} </h1>)
    }
}

// function Header(props){
//     return (<h1 className='hello'>HELLO SHEHIN'S {props.data} </h1>)   
//   }
  export default Header
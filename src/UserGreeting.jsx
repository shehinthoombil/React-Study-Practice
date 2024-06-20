
function UserGreeting(props) {
  return(props.isLoggedIn ? <h2>welcome {props.username}</h2>:
                        <h2>please login</h2>);
  
}

export default UserGreeting

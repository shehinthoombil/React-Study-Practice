import React, { useContext } from 'react'
export const UserContext = React.createContext();

function UseContext() {
  const user = useContext(UserContext);
  return (
    <div>
      <p>username:{user.name}</p>
    </div>
  )
}

export default UseContext

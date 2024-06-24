
function List(props) {

    const itemsList = props.items;


    const listItems = itemsList.map((itemsList)=><li>{itemsList.name}<b>{itemsList.calories}</b></li>)
  return (
    <>
 
     <ol>{listItems}</ol>
    </>
  
  )
}

export default List


function List() {

    const fruits = [
        {name:"apple", calories:95},
        {name:"orange", calories:100},
        {name:"pineapple", calories:195},
        {name:"jackfruit", calories:295},
     ]
    
const lowCalFruits = fruits.filter(fruit=> fruit.calories > 100)

    const listItems = lowCalFruits.map((lowCalFruit)=><li><b>{lowCalFruit.calories}</b></li>)
  return (
   <ol>{listItems}</ol>
  )
}

export default List
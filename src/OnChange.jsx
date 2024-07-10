import React, { useState } from 'react'


function OnChange() {

  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState('')
  const [comment, setComment] = useState('')
  const [payment, setPayment] = useState('')
  const [shipping, setShipping] = useState('')




  function handleNameChanges(event) {
    setName(event.target.value);
  }

  function handleQuantityChanges(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChanges(event) {
    setComment(event.target.value)
  }

  function handlePaymentChanges(event) {
    setPayment(event.target.value)
  }

  function handleShippingChanges(event) {
    setShipping(event.target.value)
  }

  return (
    <div>
      <input value={name} onChange={handleNameChanges} />
      <p>Name:{name}</p>

      <input value={name} onChange={handleQuantityChanges} type='number' />
      <p>Quantity: {quantity}</p>

      <textarea value={comment} onChange={handleCommentChanges}
        placeholder="enter delivery instructions"></textarea>
      <p>Comment:{comment}</p>

      <select value={payment} onChange={handlePaymentChanges}>
        <option> select an option</option>
        <option value="visa">visa</option>
        <option value="mastercard">mastercard</option>
        <option value="rupay">rupay</option>
      </select>
      <p>Payment:{payment}</p>

      <label >
        <input type="radio" value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChanges} />
        Pick Up
      </label>
      <label >
        <input type="radio" value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChanges} />
        Delivery
      </label>
      <p>shipping :{shipping}</p>

    </div>
  )
}

export default OnChange

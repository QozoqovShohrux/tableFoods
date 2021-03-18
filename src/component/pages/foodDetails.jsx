import React, { Component } from 'react'

export default class FoodDetails extends Component {
 render() {
  const {foodsId = 123} = this.props.match.params;
  return (
   <div>
    <h1 className="text-center"> FoodDetails Components {foodsId}  id_isi shunga  &#x1F923;</h1>
   </div>
  )
 }
}

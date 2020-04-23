import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ReactDOM from "react-dom";
import styled from "styled-components";


class Table extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        prodcutList: [
           { id: 1, productName: 'Moto G5', quantity: 2, price: 'Rs 10000' },
           { id: 2, productName: 'Recold Geyser', quantity: 1, price: 'Rs 6000' },
           { id: 3, productName: 'Dell Inspiron', quantity: 2, price: 'Rs 50000' },
           { id: 4, productName: 'Apple X', quantity: 2, price: 'Rs 100000' }
        ]
     }
  }

  renderTableHeader() {
     let header = Object.keys(this.state.prodcutList[0])
     return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
     })
  }

  renderTableData() {
     return this.state.prodcutList.map((prodcutList, index) => {
        const { id, productName, quantity, price } = prodcutList 
        return (
           <tr key={id}>
              <td>{id}</td>
              <td>{productName}</td>
              <td>{quantity}</td>
              <td>{price}</td>
           </tr>
        )
     })
  }

  render() {
     return (
        <div>
           <h1 id='title'>All Product List </h1>
           <table id='prodcutlist'>
              <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
  }
}

ReactDOM.render(<Table />, document.getElementById('root'));


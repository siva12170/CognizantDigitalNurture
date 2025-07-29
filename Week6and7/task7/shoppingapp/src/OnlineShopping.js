import React from 'react';
import Cart from './Cart'; 
import './OnlineShopping.css'; 

class OnlineShopping extends React.Component {
  render() {
    const CartInfo = [
      { itemname: "Laptop", price: 80000 },
      { itemname: "TV", price: 120000 },
      { itemname: "Washing Machine", price: 50000 },
      { itemname: "Mobile", price: 30000 },
      { itemname: "Fridge", price: 70000 }
    ]; // 

    return (
      <div className="mydiv">
        <h1>Items Ordered :</h1>
        <table className="shopping-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <Cart item={CartInfo} /> 
          </tbody>
        </table>
      </div>
    );
  }
}

export default OnlineShopping;
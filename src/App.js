import React, { Fragment } from "react";
import Deposit from "../src/components/bank/deposit/deposit"
import Withdraw from "../src/components/bank/withdraw/withdraw"
class App extends React.Component {

  myArray = localStorage.getItem('myArray') ? JSON.parse(localStorage.getItem('myArray')) : []

  deposit = (amount) => {
    if (localStorage.getItem("budget")) {
      localStorage.setItem("budget", parseInt(localStorage.getItem("budget")) + amount);
    } else {
      localStorage.setItem("budget", amount);
    }
    this.updateBalance(amount)

  }
  withdraw = (amount, itemName) => {
    const obj = {
      Name: itemName,
      Price: amount,
    };

    let quality = false;

    this.myArray.forEach((value) => {
      if(value.Name===itemName){
        quality=true

      }else{
        
      }
    }); 
      if(quality){
        alert('No')
        return
      }
      
   


    this.myArray.push(obj);
    localStorage.setItem('myArray', JSON.stringify(this.myArray))

    if (localStorage.getItem("withdraw")) {
      localStorage.setItem("withdraw", parseInt(localStorage.getItem("withdraw")) + amount);
    } else {
      localStorage.setItem("withdraw", amount);
    }
    this.updateBalance(-amount);
  }


  updateBalance = (amount) => {
    let balance = localStorage.getItem("balance") ? parseInt(localStorage.getItem("balance")) : 1;
    balance = balance + amount;
    localStorage.setItem("balance", balance);
    window.location.reload();
  }

  


  render() {
    const budget = localStorage.getItem("budget")
      ? localStorage.getItem("budget")
      : 0;

    const withdraw = localStorage.getItem("withdraw")
      ? localStorage.getItem("withdraw")
      : 0;

    return (
      <Fragment>
        <Deposit deposit={this.deposit}></Deposit>
        <Withdraw withdraw={this.withdraw}></Withdraw>
        <h2>Budget:{budget} kr. </h2>
        <h2>Withdrawn: {withdraw} kr. </h2>
        <h2> Balance: {budget - withdraw} kr.</h2>
        {this.myArray.map((value) => {
          return (
            <div className="list">
              <ul>{value.Name}</ul>
              <ul>{value.Price}</ul>
            </div>

          )
        })}
      </Fragment>
    )
  }
}

export default App;
import React, { Fragment } from "react";
export default class Deposit extends React.Component {
  inputDepositAmount = 0;

  getDepositAmount = (e) => {
    this.inputDepositAmount = parseInt(e.target.value);
  };

  onSubmitHandel = (e) => {
    e.preventDefault();
    this.props.deposit(this.inputDepositAmount);
  };
  render() {
    return (
      <Fragment>
        <h1>Deposit</h1>
        <form onSubmit={this.onSubmitHandel}>
          {console.log(this.props)}
          <input
            placeholder="Deposit Amount"
            type="number"
            onChange={this.getDepositAmount}
          />
          <input type="submit" value="submit" />
        </form>
      </Fragment>

    )
  }
}

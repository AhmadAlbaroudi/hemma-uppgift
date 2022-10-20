import React, { Fragment } from "react";
export default class Withdraw extends React.Component {
    inputWithdrawAmount = 0;
    inputItemName = ""

    getWithdrawAmount = (e) => {
        this.inputWithdrawAmount = parseInt(e.target.value);
    };
    getWithdrawName = (e) => {
        this.inputItemName = e.target.value;
    };

    onSubmitHandel = (e) => {
        e.preventDefault();
        if ((localStorage.getItem("balance")) === null || this.inputWithdrawAmount >= parseInt(localStorage.getItem("balance"))) {
            alert (" u broke")
        }else{
            this.props.withdraw(this.inputWithdrawAmount,  this.inputItemName );
        }
        

    };
    render() {
        return (
            <Fragment>
                <h1>Withdraw</h1>
                <form onSubmit={this.onSubmitHandel}>
                    <input type='text' placeholder='Expense name' onChange={this.getWithdrawName}></input>
                    <input
                        placeholder="Withdraw Amount"
                        type="number"
                        onChange={this.getWithdrawAmount}
                    />
                    <input type="submit" value="submit" />
                </form>
            </Fragment>

        )
    }
}

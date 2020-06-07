import React, { Component } from "react";
import { getRulesList } from "./../services/apiServices";

/**
 * @name RuleList
 * @description This component shows the list of rules
 * Rules will come from API's response which is called in componentDidMount()
 */

class RuleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        //call the API
        getRulesList().then(res => {
            this.setState({ list: res });
        });
    }

    goToEdit = obj => {
        localStorage.setItem("rule", JSON.stringify(obj));
        this.props.history.push("/create");
    }

    renderList() {
        return this.state.list.map(condData => {
            let fullCondString = condData.map((cond, i) => {
                let singleCond = cond.map((obj, j) => {
                    let str = `${obj.fieldName} ${obj.operator} ${obj.value}`
                    str += j < cond.length - 1 ? " AND " : "";
                    return str;
                });
                singleCond = singleCond.toString().replace(",", "");
                singleCond += i < condData.length - 1 ? " OR " : "";
                return singleCond;
            });
            fullCondString = fullCondString.toString().replace(",", "");
            return (
                <div className="single-cond">
                    <span onClick={() => this.goToEdit(condData)}>{fullCondString}</span>
                    <br />
                </div>
            );
        });
    }

    render() {
        return (
            <div className="cond-list">
                <div className="list-heading">List of Rules</div>
                {this.renderList()}
                </div>
        )
    }
}

export default RuleList;
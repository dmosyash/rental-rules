import React, { Component } from 'react';
import Condition from './condition';
import { createPostRule, updatePutRule } from './../services/apiServices';
import './../App.css';

/**
 * @name CreateRule
 * @description This component used to create a rule
 */

class CreateRule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullCondition: null,
      condData: [[]],
      isEdit: false
    }
  }


  componentDidMount() {
    let propData = localStorage.getItem('rule');
    if (propData) {
      propData = JSON.parse(propData);
      this.setState({ condData: propData, isEdit: true });
    } else {
      this.setState({ condData: [[{ fieldName: 'Amount', value: '', operator: '<' }]] });
    }
  }

  generateRule = () => {
    const fullCondString = this.state.condData.map((cond, i) => {
      let singleCond = cond.map((obj, j) => {
        let str = `${obj.fieldName} ${obj.operator} ${obj.value}`
        str += j < cond.length-1 ? ' AND ' : '';
        return str;
      });
      singleCond = singleCond.toString();
      singleCond += i < this.state.condData.length - 1 ? ' OR ' : '';
      return singleCond;
    });
    return fullCondString.toString();
  }

  setCondition = (index, obj) => {
    index = index.split(';');
    const tmpList = [...this.state.condData];
    tmpList[index[0]][index[1]] = obj;
    this.setState({ condData: tmpList });
  }

  renderCondition = () => {
    const arr = this.state.condData.map((cond, i) => {
      const renderCond = cond.map((item, j) => <Condition key={`${i};${j}`} dataObj={item} setCondition={obj => this.setCondition(`${i};${j}`, obj)} />);
      return (
        <div>
          {renderCond}
          <button key={`and_button_${i}`} onClick={() => this.addAndCondition(i)}>Add AND</button>
          <><br />{i === (this.state.condData.length - 1) ? <button key={`or_button_${i}`} onClick={this.addOrCondition}>Add OR</button> : <span>OR</span>}
          </>
        </div>
      )
    });
    return arr;
  }

  addAndCondition = (i) => {
    let cond = [...this.state.condData];
    cond[i].push([]);
    this.setState({ condData: cond });
  }

  addOrCondition = () => {
    let cond = [...this.state.condData];
    cond.push([[]]);
    this.setState({ condData: cond });
  }

  postRule = () => {
    createPostRule(this.state.condData);
  }

  updateRule = () => {
    updatePutRule(this.state.condData);
  }
  
  render() {
    return (
      <div className="CreateRule">
        <div className="cond-block">
          {this.renderCondition()}
          <div className="cond-str">
          {this.generateRule()}
          <br />
            {this.state.isEdit ? <button onClick={this.updateRule}>Update Rule</button> : <button onClick={this.postRule}>Create Rule</button>}
            </div>
        </div>
      </div>
    );
  }
}

export default CreateRule;

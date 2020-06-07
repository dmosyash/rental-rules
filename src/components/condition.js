import React, { useState, useEffect } from 'react';
import './condition.css'

/**
 * @name Condition
 * @description This is a dumb component
 * used to create one condition of a rule
 */

var Condition = (props) => {
    const [value, setValue] = useState(props.dataObj ? props.dataObj.value : '');
    const [fieldName, setFieldName] = useState(props.dataObj ? props.dataObj.fieldName : '');
    const [operator, setOperator] = useState(props.dataObj ? props.dataObj.operator : '');

    useEffect(() => {
        props.setCondition({ fieldName, value, operator });
    }, [fieldName, value, operator]);

    return (
        <div className="unit">
            <div className="field">
                <label for="fieldName">Field</label>
                <select id="fieldName" value={fieldName} onChange={e =>setFieldName(e.target.value)}>
                    <option value="Amount">Amount</option>
                    <option value="Period">Period</option>
                    <option value="Age">Age</option>
                    <option value="Item">Item</option>
                </select>
            </div>
            <div className="field">
                <label for="operator">Operator</label>
                <select id="operator" value={operator} onChange={e => setOperator(e.target.value)}>
                    <option value="<">&lt;</option>
                    <option value="<=">&lt;=</option>
                    <option value=">">></option>
                    <option value=">=">>=</option>
                    <option value="=">=</option>
                </select>
            </div>
            <div className="field">
                <label for="value">Value</label>
                <input id="value" type="text" placeholder="Value" value={value} onChange={e => setValue(e.target.value)} />
            </div>
        </div>
    );
}

export default Condition;
import React, { useState } from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import RuleList from './components/ruleList';
import CreateRule from './components/createRule';
import './App.css';

/**
 * @name App
 * @description The main component of the app.
 * It contains two parts Header, Route part
 */

function App(props) {
  const goToCreate = () => {
    localStorage.removeItem('rule');
  }

  return (<div>
    <header className="App-header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create" onClick={goToCreate}>Create Rule</Link>
        </nav>
      </header>
    <div>
      <Switch>
        <Route exact path="/" component={RuleList} />
        <Route path="/create/" component={CreateRule} />
      </Switch>
    </div>
  </div>
  );
}

export default withRouter(App);

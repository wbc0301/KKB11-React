import React, { Component } from "react";
import { BrowserRouter, Link, Route } from './../react-router-dom';

export default class MyRouterTest extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/foo">foo</Link>
        <Link to="/bar">bar</Link>
        <Link to="/mua/abc">mua</Link>
        <Route path="/foo" component={() => <div>foo</div>} />
        <Route path="/bar" component={() => <div>bar</div>} />
        <Route path="/mua/:ns" render={({ match }) => match.params.ns} />
        <Route children={({ location }) => "xxx"} />
      </BrowserRouter>
    );
  }
}

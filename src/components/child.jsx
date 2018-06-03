import React, { Component } from 'react';
import showMe from './type.ts';
console.log(showMe);
console.log('result', showMe('hello'));

class Child extends Component {
  render() {
    return <div>hello word</div>;
  }
}

export default Child;

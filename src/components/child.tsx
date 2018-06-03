import * as React from 'react';
import showMe from './type';
console.log(showMe);
console.log('result', showMe('hello'));

class Child extends React.Component {
  render() {
    return <div>hello word</div>;
  }
}

export default Child;

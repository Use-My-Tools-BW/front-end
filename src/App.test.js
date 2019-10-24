import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// function addTwoNumbers(a, b) {
//   return a + b;
// }
// describe('addTwoNumbers', () => {
//  it('should add two numbers', () => {
//     expect(addTwoNumbers(2, 3)).to.equal(5);
//  });
// });
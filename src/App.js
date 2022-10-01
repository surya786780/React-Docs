import React from 'react';
import ReactDOM from 'react-dom';

// this is from index.js
class MyApp extends React.Component
{
  // must use this ,'render' method for access inside html in website
  render()
  {
    return <h1>I am from MYAPP.JS</h1>
  }
}

class MyApp2 extends React.Component
{
  // must use this ,'render' method for access inside html in website
  render()
  {
    return <h1>I am from MYAPP2.JS</h1>
  }
}


class MyApp3 extends React.Component
{
  // must use this ,'render' method for access inside html in website
  render()
  {
    return <div>
      <MyApp/>
      <MyApp2/>
        <h1>I am from MYAPP3.JS</h1>
      </div>
  }
}
export default MyApp3;
ReactDOM.render(<MyApp3 />,document.getElementById('root'));
// this is for index.js class components

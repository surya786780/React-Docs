import React from 'react';
import ReactDOM from 'react-dom';

import { useNavigate } from 'react-router-dom';

export default function Home(p) {

    let navi = useNavigate();
        return(
          <div>
              <h2>Home Page</h2>
              <button onClick={() => { 
                navi("/about")
              }}>About</button>
              <h4>{p.val}</h4>

          </div>
        )
}
 class Datarev extends React.Component {
   
  render(){
    return (<div>
       <ul>
                <li>{this.props.val}</li>
                {console.log(this.props)}
              </ul> 
    </div>)
  }
}
ReactDOM.render(<Datarev />,document.getElementById('inp'));

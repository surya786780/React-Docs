import React, {useState,useEffect,Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
// import styles from './demo.module.css';
import {BrowserRouter as Router, Routes,Route,Link,NavLink,Switch,useHistory } from 'react-router-dom';
import Home,{Datarev} from './Home';
import About from './About';
import Profile from './profile';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import MyApp3 from './App.js'
// import { getValue } from '@testing-library/user-event/dist/utils';

// CM_Practisee
import Index1 from '../src/CM_Practise/index1';
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Index1 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// New learn react ES6 CLASSES
// class Demo{
//   one(a,b){
//     var c = a+b;
//     document.getElementById('root').innerHTML = c;
//     return c;
//   }
//   two(a){
//     var c=a*a;
//     document.getElementById('root').innerHTML = c;
//   }
// }

// var run = new Demo();
// let x = run.one(5,5); 
// console.log(x);
// run.two(x);

// ARROW FUNCTION
// var arrow = (a,b,d) => {
//   var c = a+b+d;
//   document.getElementById('root').innerHTML = c; 
// }
// arrow(5,3,1);
 

//      JSX (javascript+XML) build html directly in reactjs

// $$$$$$$$$$$$$$$$$$ without JSX
// const ele = React.createElement('h1',{},"hello world"); 
// inside the {} we put classes,...
// ReactDOM.render(ele,document.getElementById('root'));

// @@@@@@@@@@@@@@@@@@     with JSX
// var myStyle={
//   color:'skyblue',
//   textAlign:'center'
// }
// var cal = "monkey";
// const ele2 = <div style={myStyle}>
//     <h3>Hello surya </h3>
//     <h2>hi {cal}</h2>
//     <p>lorem ipsum dolor sit amet, consectetur</p>
//   </div>
// ReactDOM.render(ele2,document.getElementById('root'));


// External stylesheet

//  FIRST IMPORT THAT STYLE SHEET TOP OF THE CODE that is index.css
// var cal = "monkey";
// const ele2 = <div className="header">
//     <h3 >Hello surya </h3>
//     {/* using className we put external style sheet */}
//     <h2>hi {cal}</h2>
//     <p>lorem ipsum dolor sit amet, consectetur</p>
//   </div>
// ReactDOM.render(ele2,document.getElementById('root'));




// @@@@@@@@@@@@@@@   Functional Components @@@@@@@@@@@@@@
// use Capital letter for function NAME's and Class name's First Letter

// function Header(){
//   var myStyle={
//     color:'green',
//     textAlign:'center'
//   };
//   return <div style={myStyle}>
//       <h1>surya</h1>
//       <h2>Welcomes you</h2>
//    </div>
// }
// function Sidebar(){
//   return <h1>Sidebar</h1>
// }
// function Navbar(){
//   return <h1>Navbar</h1>
// }
// // call multiple function using one function
// function MyWebsite(){
//   return <div>
//     <Header />
//     <Sidebar/>
//     <Navbar />
//   </div>
// }
// ReactDOM.render(<MyWebsite /> ,document.getElementById('root'));






// @@@@@@@@@@@@@@@   CLASS Components @@@@@@@@@@@@@@
// class MyWebsite extends React.Component
// {
//   // must use this ,'render' method for access inside html in website
//   render()
//   {
//     return <h1>Welcome CLASS Components </h1>
//   }
// }

// //  EXternal Classes call 
// class Mynew extends React.Component
// {
//   render()
//   {
//     var myStyle={
//           color:'green',
//           textAlign:'center'
//         };
//         return <div style={myStyle}>
//             <MyWebsite />
//             <MyApp3 />
//             <h1>surya</h1>
//             <h2>Welcomes you</h2>
//          </div>
//   }
// }
// ReactDOM.render(<Mynew /> ,document.getElementById('root'));








// ^^^^^^^^^^^^^^^^ REACT PROPERTY -> (PROPS) ^^^^^^^^^^^^^^^^^
// PASS INFORMATION OR DATA TO COMPONENTS TO COMPONENTS

/*
    props are immutable so this problem we use state
    publically globally available pass data to anywhere
*/

// class SharingParent extends React.Component
// {
//   render(){
//     return <div>
//               <h4> 
//                 {this.props.val}I am 
//                 {this.props.data2} from
//                 {this.props.data3} Department of 
//                 {this.props.data1}
//               </h4> 

//                 <h2>
//                 {this.props.objData.name}<br></br>
//                 {this.props.objData.address}<br></br>
//                 {this.props.objData.dept}<br></br>
//                 {this.props.date}
//                 </h2>
//             </div>
//   }
// }
// // Set default values
// SharingParent.defaultProps = {date:"24/10/1999"}

// pass data directly to class component
// ReactDOM.render(<SharingParent val="surya"/> ,document.getElementById('root'));



// class SharingChild extends React.Component
// {
  
//   render(){
//     var name="Surya" ;
//     var address="KSRCE";
//     var dept = "CSE";
//     const objPass = {
//       name:"Surya",
//       address:"KSRCE",
//       dept : "CSE",
//       date:""
//       // date not give so take the default value
//     }
    
//     return <SharingParent data1={dept} data2={name} data3={address} objData={objPass} />
  
//   }
// }
// // Pass data via children component
// // ReactDOM.render(<SharingChild />, document.getElementById('root'));
// ReactDOM.render(<SharingChild /> ,document.getElementById('root'));








// **************** REACT STATES ****************************
// change the property value because property is immutable so using state we can change it

// class Reactstate extends React.Component
// {
//   constructor(){
//     super();
//     this.state={initialvalue : "wel",name:"surya"}
//   }
//   changedata = () => {
//     // using this.setState we can change the value
//     this.setState({initialvalue : "welcome",name:"all"})
//   }
//   render(){
//     return  <div>
//       <h2>{this.state.initialvalue} {this.state.name}</h2>
//       <br />
//       <button type="button" onClick={this.changedata}>Show</button>
//     </div>
//   }
// }
// ReactDOM.render(<Reactstate />,document.getElementById('root'));









// %%%%%%%%%%%%%%%%%%%%%%%%%%5       SIMPLE DATA SEND VIA INPUT BOX
// // First Components
// class First extends React.Component{

//   render(){
//     return <div>
//       <h4>first class</h4>
//       <ul>
//         <li>{this.props.fname}</li>
//         <li>{this.props.pword}</li>
//       </ul>
//     </div>
//   }
// }
// ReactDOM.render(<First />,document.getElementById('root'));


// SEC Component
// class SEC extends React.Component{

//   constructor(){
//     super();
//     this.state = {fn:"name",pw:"password"}
//   }
//   Sendit = () => {
//     let a = document.getElementById('i1').value;
//     let b = document.getElementById('i2').value;
//     // console.log(a,b);
//     this.setState({fn:a,pw:b})
//   }

//   render(){ 
//    let ele = <div>
//               <input type="text" placeholder="fname" name="fn" id="i1"/>< br/> 
//               <input type="password" placeholder="pass" name="pw" id="i2" /><br />
//               <h5>{this.state.fn}  {this.state.pw}</h5>
              
//         </div>

//       return <div>
//         {ele}
//         {/* <First fname={this.state.fn} pword={this.state.pw}/> */}
//         <button type="submit" onClick={this.Sendit}>Add</button>
//         </div>
//   }

//   componentDidUpdate(){
//     document.getElementById('list')
//     .innerText=this.state.fn+" -- "+this.state.pw;
//   }
  
// }

// ReactDOM.render(<SEC />,document.getElementById('root'));










// REACT LIFECYCLE
/* 
    INITIAL (default or initial value)
    MOUNTING (execute only one time) -> (exp: first signup then next all the time we signin only)
    UPDATING (based on user performance)
    UNMOUNTING (cleanup)
*/


// class InitialReact extends React.Component
// {
//   constructor(){
//     super();
//     this.state = {name:"sk",pass:"123",bgColor:"red"};
//   }
//   // this is Initial LIFECYCLE execute before render
//   componentWillMount(){
//     alert("InitialReact LIFECYCLE before render");
//   }

//   render() {

//     return <div style={{backgroundColor:this.state.bgColor}}>
//         <h2 id="upd"></h2>
//         <h3>{this.state.name} - {this.state.pass}</h3><br />
//         <button onClick={this.change}>Update</button>
//         <button onClick={this.delete}>Delete</button>
//   </div>
//   }

//   change = (e) => {
//     this.setState( {
//       name:"kumar",
//       pass:"8838",
//       bgColor:"green"
//     })
//   }

//   // this is Initial LIFECYCLE execute after render
//   componentDidMount(){
//     setTimeout(() =>{
//       this.setState({name:"surya",pass:"1234",bgColor:"yellow"});
//     },2000)
//   }

//   // Update LIFECYCLE
//   componentWillUpdate(){
//     // document.getElementById('upd').innerText="update anything?..";
//     alert("Confirm Update");
//   }
//   // if the update is successful give one acknowlege to the component or used to update the value of the another component
//   componentDidUpdate(){
//     document.getElementById('mydiv').innerHTML = "<h2>Updated Successfully!</h2>"+this.state.name+" -- "+this.state.pass;
//   }
//   // return true update happens else not update
//   shouldComponentUpdate(){
//     return true;
//   }

//   // unmount used for delete file or tags or anything -> shouldComponentUpdate must be true
//   delete = () => {
//     this.setState({name:false,pass:false})
//   }
//    componentWillUnmount(){
//     alert("Data delete")
//    }

// }
// ReactDOM.render(<InitialReact />, document.getElementById('root'))





// ****************** React Event Handling and STYLES ****************

// class Eventbind extends React.Component{
//   constructor(){
//     super();
//     this.state={msg:"welcome"}
//   }

//   change = (e) => {
//     let x = document.getElementById('fname').value;
//     this.setState({
//       msg:e +" "+x
//     })
//   }

//   render() {
//     // Event BINDING
//     // return (
//     // <div>
//     //     <h3>{this.state.msg}</h3>
//     //     <input type="text" name="n" placeholder="name" id="fname"/>
//     //     {/* Argument pass 2 ways without bind */}
//     //     {/* <button onClick={() => this.change("thankyou")}>Change Event</button> */}
//     //     {/* with bind */}
//     //     {/* <button onClick={this.change.bind(this,"thankyou")}>Change Event with bind</button> */}
//     //     {/* <button onMouseOver={() => this.change("thankyou")}>Change Event</button> */}
//     //   </div>
//     // )
    
//     // CSS STYLE
//     const myst={
//       color:'blue',
//       fontFamily:'Helvetica'
//     }
//     return (
//       <div>
//         <h2 style={{color:'green',textAlign:'center'}}>Inline and <span style={myst}>JS Object</span></h2>
//         <h3 className="ext">EXternal</h3>
//         <h1 className={styles.heading}>React Modules</h1>
//       </div>
//     )
//   }

// }
// ReactDOM.render(<Eventbind />, document.getElementById('root'));











// ###################  REACT FORMS $$$$$$$$$$$$$$$$$
// class FormsinReact extends React.Component{

//   constructor(){
//     super();
//     this.state={fname:"",age:null,error:""};
//   }
//   Userval = (e) => {
//     let n= e.target.name;
//     let v= e.target.value;
//     let err="";
//     if(n=='age'){
//       if(v!="" && !Number(v)){
//         err=<strong>Invalid Age</strong>
//       }
//     }
//     this.setState({
//       error: err
//     });
//     this.setState({[n]:v})
//   }

//   formsub = (event) =>{
//     event.preventDefault();
//     alert("name is: "+this.state.fname);
//   }

//   render(){
//     return(
//         <form onSubmit={this.formsub}>
//           <h3>Your name is: {this.state.fname} <br /> Your Age is: {this.state.age}</h3>
//           <br />
//           <label>First Name: </label>
//           <input type="text" name="fname" onChange={this.Userval}/><br />
//           <label>Age: </label>
//           <input type="password" name="age" onChange={this.Userval}/>
//           {this.state.error}
//           <br /><input type="submit"/>
//         </form>
//     )
//   }


// }
// ReactDOM.render(<FormsinReact />, document.getElementById('root'));










// REACT FRAGMENTS
// class Fragements extends React.Component{

//   render(){
//     return(
//         <table>
//           <tr><Fragements2 /></tr>
//         </table>
//     )
//   }
// }


// class Fragements2 extends React.Component{

//   render(){
//     return(
//       // <React.Fragment> alternate use <> </> shortname
//       <React.Fragment>
//         <td>Name</td>
//         <td>Age</td>
//       </React.Fragment>
//     )
//   }
// }
// ReactDOM.render(<Fragements />, document.getElementById('root'));









// %%%%%%%%%%%% REACT LISTS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// function Mylist(props){
// // const newList=[5,4,3,2,1,"s",'u','r','y','a'];
// // const rl =newList.map((listval) => {
// //   return <li key={listval.toString()}>{listval}</li>;
// // })
// // outside list 
// const newList=props.Listval;
// const rl =newList.map((listval) => {
//   return <li>{listval}</li>;
// })
// return <ul>{rl}</ul>
// }
// const val=[3,4,5,2,1];
// ReactDOM.render(<Mylist Listval = {val}/>,document.getElementById('root'));



// @@@@@@@@@@@@@ REACT KEY @@@@@@@@@@@@@
/* 
    using key
    ^ change list value,new or delete
    ^ same does in array also
*/
// function Keylists(props){
//   const content = props.data.map((show) => 
//     <div key={show.id}>
//       <h3>{show.id} : {show.title} : {show.language} </h3>
//     </div>
//   );
//   return (
//     <div>
//       {content}
//     </div>
//   )
// }
// const myVal = [
//   {id:1,title:"first",language:"tamil"},
//   {id:2,title:"sec",language:"English"}]

// ReactDOM.render(
//   <Keylists data={myVal} />,
//   document.getElementById('root')
// );







//  ^^^^^^^^^^^^^^^^^ REACT HOOK STATE ^^^^^^^^^^^^^^^

// function ReactHooks(){
//   const [count, updatecount]=useState(0);
//   // this is same as componentDidmount 
//   useEffect(() => {
//     alert("count change");
//   })
//   return (
//     <div>
//       <p>click the button {count} Time</p>
//       <button onClick={() => updatecount(count+1)}>Click</button>
//     </div>
//   )
// };


// ReactDOM.render(<ReactHooks />, document.getElementById('root'));







// ***************** ROUTES *******************
// without reload a web page
/*
    route - check web url and user gived url
    BrowserRouter - History API (pushState,replaceState,popState)
    NavLink - avtiveStyle to the link
    switch - not match to any url select Default URL
    
*/


// var err="ERROR";
// var ab = "ABOUT";
// const routing = (
//   <BrowserRouter>
//     <div>
//       <h1>React Router</h1> 
//       <nav>
//         <NavLink to="/home" >Home</NavLink>
//         <NavLink to="/about" >About</NavLink>
//         <NavLink to="/profile">Profile</NavLink>
//       </nav>
    
//     {/* <Switch> */}
//     <Routes>
//       <Route path="/home" element={<Home/>} />
//       <Route path="/about" element={<About />} />
//       <Route path="/profile/:username" element={<Profile />} />
//       <Route path="*" element= {<About />} />
//     {/* </Switch> */}
//     </Routes>
//     <div>Footer</div>
//   </div> 
//   </BrowserRouter>
// )

// ReactDOM.render(routing, document.getElementById('root'));











// SIMPLE DATA PASSING BETWEEN COMPONENTS USING ROUTER    

// class Abc extends Component {

//   render(){
//     return (
//   <Router>
//     <div>
//         <h1>React Router</h1> 
//         <nav>
//           <NavLink to="/home" >Home</NavLink>
//           <NavLink to="/about" >About</NavLink>
//           <NavLink to="/profile">Profile</NavLink>
//         </nav>
//           <Routes>
//             <Route path="/home" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/profile" element={<Profile />} />
//           </Routes>
//           <br />
//           <br />
//       </div>
//   </Router>
//     )
//   }
// }
// ReactDOM.render(<Abc />, document.getElementById('routediv'));

// class Received extends Component {
//   render(){
//     return (
//       <div>
//         <h3>Received Class</h3> 
//         <ul>
//           <li>{this.props.val}</li>
//         </ul>
//       </div>
//     )
//   }
// }
// class Datapass extends Component{
//   constructor(){
//     super()
//     this.state={Authorval:"first"}
//   }

//   sendval = () => {
//     let a = document.getElementById('inpval').value;
//     this.setState({Authorval:a});
//     console.log(a);
//   }

//   render(){

//     const ss = <div>
//       <hr />
//        <h2>Second class</h2>
//         <input id="inpval" type="text" />
//         <button type="submit" onClick={this.sendval}>Send</button>
//     </div>
//     return(
//         <div>
//           {ss}
//           <p>Data Passing Class</p>
//           <Home val={this.state.Authorval} />
//       {/* {this.state.a} */}
//         <Received val={this.state.Authorval}/>
//     </div>
//         )    
//   }
//       componentDidUpdate(){
//         // list from index.html 48
//           let a = document.getElementById('list').innerText=this.state.Authorval;
//           return a;
//         }
    
// } 

// ReactDOM.render(<Datapass />,document.getElementById('root'));












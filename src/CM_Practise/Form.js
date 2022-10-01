import React from "react";
import ReactDOM from 'react-dom';
export default function indexPage()
{
    function save(){
        let a = document.getElementById("fname").value;
        let b = document.getElementById("age").value;
        let c = document.getElementById("india").value;
        console.log(a,b,c);
    }
    let api = (data) => {
        console.log(data);
    }
    return (
        <div>
            <h2>Form</h2>

            <form onSubmit={api}>
            <input type="text" name="fname" id="fname" placeholder="firstname" />
            < br/><br/>
            <input type="number" name="age" id="age" placeholder="age" />
            < br/><br/>
            <input type="checkbox" name="indian" id="india" value="Indian"/>
            < br/><br/>
            <button type="submit" name="submit">Submit</button>
            </form>
            
        </div>
    );
}

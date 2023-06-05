import React from "react";
import Navbar from "./navbar";
import { useState } from 'react'
import Temp from "./temp";

let num = 1;
console.clear()

function addNote() {
  let arr = [];

  let sn = num;
  num++;
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  title = "ddd";
  let time = new Date();
  time = time.toLocaleString();
  arr.push({ sn: sn, title: title, description: description, time: time });
  return arr;
}
function show(props) {
  let data = addNote();


  if (data.length > 0) {
    for (let datas in data) {
      let ExData = document.getElementById("tbody").innerHTML;
      let table = document.getElementById("tbody");
      table.innerHTML += `
      <tr>
      <th scope="col">${data[datas].sn}</th>
      <th scope="col">${data[datas].title}</th>
      <th scope="col">${data[datas].description}</th>
      <th scope="col">${data[datas].time}</th>
      <th scope="col"><btn class="btn btn-danger" id="del" type="button">Delete </btn> <btn class="btn btn-primary disabled" type="button">View </btn> <btn class="btn btn-secondary disabled" type="button">Edit </btn></th>
      </tr>
          
      `;
    }
  }
}


 


function Note() {
   // function modeCHanger(){
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [mode, setMode] = useState('light');
   // eslint-disable-next-line react-hooks/rules-of-hooks
      const [color, setColor] = useState('black');
      const [bg,setBg] = useState('white');
   // }
   const modeF = ()=>{
      if (mode === 'light') {
         setMode('dark');
         setBg('#312828');

         setColor('white');
      }
      if (mode === 'dark') {
         setMode('light');
         setBg('white');

         setColor('black');
      }

}
  return (<div className="mainn" style={{backgroundColor:bg , width: '100vw', minHeight: '100vh'}}>
     <Navbar mode={mode} color={color} modeF={modeF}/>

    <div className="container my-3">

      <h2 style={{color:color}}>Add your todo</h2>
      <form action="" id="todoForm">
        <div className="form-group">
          <label for="title" style={{color:color}}>Todo title</label>
          <input style={{ backgroundColor: bg, color: color }} 
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder="Add a title to your note..."
            minlength="10"
            required
          />
        </div>
        <div className="form-group">
          <label for="description" style={{color:color}}>Todo description</label>
          <textarea
          style={{ backgroundColor: bg, color: color }} 
            className="form-control"
            name="description"
            id="description"
            rows="5"
            placeholder="Add a description to your note..."
            minlength="10"
            required
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-sm btn-danger"
          onClick={show}
          id="addBtn"
          style={{color:color}}
        >
          Add todo
        </button>
      </form>
      <hr />
      <h2 style={{color:color}}>Your personal todos</h2>
      <table  className="table table-Default">
        <thead >
          <tr  >
            <th scope="col" style={{color:color}}>S.No</th>
            <th scope="col" style={{color:color}}>Title</th>
            <th scope="col" style={{color:color}}>Description</th>
            <th scope="col" style={{color:color}}>Timestamp</th>
            <th scope="col" style={{color:color}}>Actions</th>
          </tr>
        </thead>
        <tbody id="tbody" style={{ backgroundColor: bg, color: color }} ></tbody>
      </table>
    </div>
    </div>
  );
}

export default Note;
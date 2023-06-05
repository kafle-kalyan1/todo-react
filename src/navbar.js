import React from 'react'








 function navbar(props) {



  return (
   // <h1>Hello world</h1>
   
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{'border-bottom':"2px solid blue"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Note-app</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">AboutUS</a>
        </li>
        
      </ul>
    </div>
    <div className="form-check form-switch">
  <input className="form-check-input"  onClick={props.modeF}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label"  style={{color:props.color}} forhtml="flexSwitchCheckDefault">Dark Mode</label>
</div>
  </div>
</nav> 



  )
}
export default navbar;  

import React from 'react'
import NavBar from './NavBar'

const Delete = () => {
  return (
    <div>
      <NavBar/>

      <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Delete</label>
                    <input type="text" className="form-control" placeholder='Enter name to delete'/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-danger">DELETE</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Delete

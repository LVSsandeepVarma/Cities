import React from 'react'

function Register(){
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="First Name"  />
                </div>
                <div className="col">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="last Name"/>
                </div>
            </div>

        </div>
    )
}
export default Register;
import React from 'react'

const HcSignup = () => {
    return (
        <div>
            
            <div className="row">
                <div className="input-field col s6">
                    <input  id="email" type="email" className="validate" />
                    <label className="active" for="email">Email</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6">
                    <input  id="password" type="password" className="validate" />
                    <label className="active" for="password">Password</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6">
                    <input  id="password2" type="password" className="validate" />
                    <label className="active" for="password2">Enter Password Again</label>
                </div>
            </div>


        </div>
    )
}

export default HcSignup

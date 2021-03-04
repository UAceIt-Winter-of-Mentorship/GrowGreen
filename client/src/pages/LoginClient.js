import React, { Component } from 'react'
import './LoginClient.css'
class LoginClient extends Component {
    render() {
        return (
            <div><div className="container d-flex justify-content-center">
                <div className="row my-5">
                    <div className="col-md-6 text-left text-white lcol">
                        <div className="greeting">
                            <h3>Welcome to <span className="txt">.........GrowGreen.........</span></h3>
                        </div>
                        <h6 className="mt-3">Great to see you back!</h6>
                        <div className="footer">
                            <div className="socials d-flex flex-row justify-content-between text-white">
                                <div className="d-flex flex-row"><i className="fab fa-linkedin-in"></i><i className="fab fa-facebook-f"></i><i className="fab fa-twitter"></i></div> <span>Privacy Policy</span> <span>&copy; 2021 GrowGreen</span> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 rcol">
                        <form className="sign-up">
                            <h2 className="heading mb-4">Login As A Client</h2>
                            <div className="form-group fone mt-2"> <i className="fas fa-user"></i> <input type="name" className="form-control" placeholder="Name" /> </div>              <div className="form-group fone mt-2"> <i className="fas fa-envelope"></i> <input type="email" className="form-control" placeholder="Work email"/> </div>
                                <div className="form-group fone mt-2"> <i className="fas fa-lock"></i> <input type="password" className="form-control" placeholder="Password" />
                                    <div className="image"><i className="fas fa-eye"></i></div>
                                </div> 
                    </form> <button type="button" className="btn btn-success mt-5">Login</button>
                            <p className="exist mt-4">New user? <span>Sign Up</span></p>
                </div>
                    </div>
                </div></div>
        )
    }
}

export default LoginClient

import React from 'react'

const SignupModal = () => {
    return(
        <React.Fragment>
            <div className="modal fade show" id="signupModal" tabindex="-1" role="dialog" style={{display: 'block'}}>
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content rounded-0 border-0 p-4">
                    <div className="modal-header border-0">
                        <h3>Register</h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="login">
                            <form action="#" className="row">
                                <div className="col-12">
                                    <input type="text" className="form-control mb-3" id="signupPhone" name="signupPhone" placeholder="Phone"></input>
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control mb-3" id="signupName" name="signupName" placeholder="Name"></input>
                                </div>
                                <div className="col-12">
                                    <input type="email" className="form-control mb-3" id="signupEmail" name="signupEmail" placeholder="Email"></input>
                                </div>
                                <div className="col-12">
                                    <input type="password" className="form-control mb-3" id="signupPassword" name="signupPassword" placeholder="Password"></input>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">SIGN UP</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </React.Fragment>
    )
}

export default SignupModal;
import React from 'react';

const LoginModal = () =>{
    return(
        <React.Fragment>
            <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content rounded-0 border-0 p-4">
            <div className="modal-header border-0">
                <h3>Login</h3>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form action="#" className="row">
                    <div className="col-12">
                        <input type="text" className="form-control mb-3" id="loginPhone" name="loginPhone" placeholder="Phone"></input>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control mb-3" id="loginName" name="loginName" placeholder="Name"></input>
                    </div>
                    <div className="col-12">
                        <input type="password" className="form-control mb-3" id="loginPassword" name="loginPassword" placeholder="Password"></input>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">LOGIN</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
        </React.Fragment>
        )
    };
    export default LoginModal;
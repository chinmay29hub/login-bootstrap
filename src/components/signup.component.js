import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="mb-3">
                    <label className="form-label">First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label" placeholder="Enter Email">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block mx-auto d-grid gap-2 col-6">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}
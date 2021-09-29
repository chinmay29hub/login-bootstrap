import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label" placeholder="Enter Email">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="mb-3">
                <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault">Remember Me</label>
</div>
                </div>

                <button type="submit" className="btn btn-primary btn-block mx-auto d-grid gap-2 col-6">Submit</button>
                
            </form>
        );
    }
}
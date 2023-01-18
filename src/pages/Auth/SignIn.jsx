import React from "react";

const SignIn = () => (
  <form action="" className="form">
    <h3>Sign In</h3>

    <div>
      <input type="text" placeholder="Username" className="info-input" />
    </div>

    <div>
      <input type="password" placeholder="Password" className="info-input" />
    </div>
    <div className="">
      <span className="">Don't have account. Sign Up</span>
    </div>
    <button className="btn self-end">Login</button>
  </form>
);

export default SignIn;

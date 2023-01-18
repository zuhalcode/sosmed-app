import React from "react";

const SignUp = () => (
  <form action="" className="form">
    <h3 className="">Sign Up</h3>

    <div>
      <input type="text" placeholder="First Name" className="info-input" />
      <input type="text" placeholder="Last Name" className="info-input" />
    </div>

    <div>
      <input type="text" placeholder="Username" className="info-input" />
    </div>

    <div>
      <input type="password" placeholder="Password" className="info-input" />
      <input
        type="password"
        placeholder="Confirm Password"
        className="info-input"
      />
    </div>
    <div className="">
      <span className="">Already have account. Login!</span>
    </div>
    <button className="btn self-end">Sign Up</button>
  </form>
);

export default SignUp;

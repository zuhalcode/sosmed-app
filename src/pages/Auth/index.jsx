import React, { useState } from "react";
import logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../../actions/AuthAction";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [confirmPass, setConfirmPass] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpass: "",
  });

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signup(data))
        : setConfirmPass(false);
    } else dispatch(login(data));
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpass: "",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen gap-16 relative">
      {/* Left Side */}
      <div className="flex items-center justify-center gap-8">
        <img src={logo} alt="" className="w-16 h-16" />
        <div className="webname">
          <h1 className="text-5xl bg-red-500 bg-button bg-cover bg-repeat">
            ZKC Media
          </h1>
          <h6 className="text-sm">Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* Right Side */}
      <form
        action=""
        className="form w-[40%]"
        onSubmit={(e) => handleOnSubmit(e)}
      >
        <h3 className="text-2xl font-bold">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h3>

        {isSignUp && (
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="info-input w-1/2"
              name="firstname"
              value={data.firstname}
              onChange={handleOnChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="info-input w-1/2"
              name="lastname"
              value={data.lastname}
              onChange={handleOnChange}
            />
          </div>
        )}

        <div>
          <input
            type="text"
            placeholder="Email"
            className="info-input w-1/2"
            name="email"
            value={data.email}
            onChange={handleOnChange}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            className="info-input w-1/2"
            name="password"
            value={data.password}
            onChange={handleOnChange}
          />
          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="info-input w-1/2"
              name="confirmpass"
              value={data.confirmpass}
              onChange={handleOnChange}
            />
          )}
        </div>
        {isSignUp && (
          <span
            className={`${
              confirmPass ? "hidden" : "block"
            } self-end text-xs mr-8 -mt-5 text-red-500`}
          >
            * Confirm Password doesn't same
          </span>
        )}

        <div>
          <span
            className="text-sm hover:cursor-pointer hover:underline"
            onClick={() => {
              setIsSignUp((prev) => !prev);
              resetForm();
            }}
          >
            {isSignUp
              ? "Already have account. Login"
              : "Don't have account. Sign Up"}
          </span>
        </div>
        <button className={`btn self-end`} disabled={loading} type="submit">
          {loading ? "Loading ..." : isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Auth;

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { CurrUserContext } from "../../store/CurrUser/CurrUserProvider";

const Login = () => {
  const { setCurrUser, setIsUpdated } = useContext(CurrUserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmitHandler = (data) => {
    // User login
    fetch("http://localhost:5000/api/v1/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          const user = data?.data.user;
          setCurrUser(user);
          setIsUpdated(true);
          localStorage.setItem("currUser", user._id);
        }
      })
      .catch((err) => console.log(err.message))
      .finally(() => {});
  };

  return (
    <form
      className="max-w-2xl mx-auto p-10"
      onSubmit={handleSubmit(formSubmitHandler)}
    >
      {/* User phone number input */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Your Phone Number</span>
        </label>
        <input
          {...register("phoneNum", {
            required: "You have to input a phone number for login",
            minLength: {
              value: 11,
              message: "Please provide a valid Bangladeshi phone number",
            },
            maxLength: {
              value: 11,
              message: "Please provide a valid Bangladeshi phone number",
            },
          })}
          type="text"
          placeholder="ex:01xxxxxxxxx"
          className="input input-bordered w-full max-w-xs"
        />
        {errors?.phoneNum && (
          <label className="label">
            <span className="label-text-alt">{errors?.phoneNum?.message}</span>
          </label>
        )}
      </div>

      {/* User password input */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Your Password</span>
        </label>
        <input
          {...register("password", {
            required: "You have to inpur password for login",
            minLength: {
              value: 6,
              message: "Password must be more or equal 6 charecters",
            },
          })}
          type="password"
          placeholder="ex: abc1234"
          className="input input-bordered w-full max-w-xs"
        />
        {errors?.password && (
          <label className="label">
            <span className="label-text-alt">{errors?.password?.message}</span>
          </label>
        )}
      </div>

      <input className="btn btn-primary" type="submit" value="Login" />
    </form>
  );
};

export default Login;

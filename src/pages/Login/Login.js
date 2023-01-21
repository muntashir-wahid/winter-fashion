import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SecondaryHeading from "../../components/Headings/SecondaryHeading/SecondaryHeading";
import FromErrorText from "../../components/Wrappers/FormWrapper/FromErrorText";
import FromWrapper from "../../components/Wrappers/FormWrapper/FromWrapper";
import SectionHeaderWrapper from "../../components/Wrappers/SectionHeaderWrapper/SectionHeaderWrapper";
import SectionWrapper from "../../components/Wrappers/SectionWrapper/SectionWrapper";
import { CurrUserContext } from "../../store/CurrUser/CurrUserProvider";

const Login = () => {
  // -----------//
  // Hook Calls //
  // -----------//
  const { setCurrUser, setIsUpdated, setIsUserLoading } =
    useContext(CurrUserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ---------------------------- //
  // User Login Handler Function //
  // -------------------------- //
  const formSubmitHandler = (data) => {
    toast("Please Wait!Logging in...");

    // User login
    fetch("https://winter-fashion-server.vercel.app/api/v1/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // Successfull login
        if (data.status === "success") {
          toast.success("Login successfull!");
          const user = data?.data.user;
          setCurrUser(user);
          setIsUserLoading(false);
          setIsUpdated(true);
          localStorage.setItem("currUser", user._id);
          navigate(from, { replace: true });
        } else {
          toast.error(
            "Phone number and password didn't match! Please try again"
          );
        }
      });
  };

  return (
    <SectionWrapper className="min-h-screen">
      <SectionHeaderWrapper>
        <SecondaryHeading>Log in Fast</SecondaryHeading>
        <p>
          Please log in with your credential and buy some high-quality clothes.
        </p>
      </SectionHeaderWrapper>
      <FromWrapper className="max-w-xl">
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          {/* User phone number input */}

          <div className="form-control w-full">
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
              className="input input-bordered w-full"
            />
            {errors?.phoneNum && (
              <label className="label">
                <FromErrorText message={errors?.phoneNum?.message} />
              </label>
            )}
          </div>

          {/* User password input */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Password</span>
            </label>
            <input
              {...register("password", {
                required: "You have to input password for login",
                minLength: {
                  value: 6,
                  message: "Password must be more or equal 6 charecters",
                },
              })}
              type="password"
              placeholder="ex: abc1234"
              className="input input-bordered w-full"
            />
            {errors?.password && (
              <label className="label">
                <FromErrorText message={errors?.password?.message} />
              </label>
            )}
          </div>

          <input className="btn btn-primary mt-4" type="submit" value="Login" />
        </form>
        <p className="mt-2">
          New to <strong>Winter Fashion</strong>? Plese
          <Link
            className="btn btn-link p-0 pl-1 lowercase text-base"
            to="/register"
          >
            register.
          </Link>
        </p>
      </FromWrapper>
    </SectionWrapper>
  );
};

export default Login;

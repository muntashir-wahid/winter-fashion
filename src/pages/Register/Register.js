import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SecondaryHeading from "../../components/Headings/SecondaryHeading/SecondaryHeading";
import FromErrorText from "../../components/Wrappers/FormWrapper/FromErrorText";
import FromWrapper from "../../components/Wrappers/FormWrapper/FromWrapper";
import SectionHeaderWrapper from "../../components/Wrappers/SectionHeaderWrapper/SectionHeaderWrapper";
import SectionWrapper from "../../components/Wrappers/SectionWrapper/SectionWrapper";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmitHandler = (data) => {
    const user = { ...data };

    const formData = new FormData();
    const image = data.photo[0];

    formData.append("image", image);

    // Host image to imageBB
    fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_BB_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success && imageData.status === 200) {
          user.picture = imageData.data.display_url;

          // User Reagistration
          fetch(
            "https://winter-fashion-server.vercel.app/api/v1/users/register",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            }
          )
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
      });
  };

  return (
    <SectionWrapper>
      <SectionHeaderWrapper>
        <SecondaryHeading>Register Fast</SecondaryHeading>
        <p>
          Please create an account with some of your basic credentials. We
          ensure you that all your data will be pretty safe and secure.
        </p>
      </SectionHeaderWrapper>
      <FromWrapper className="max-w-xl">
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          {/* User name input */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              {...register("name", {
                required: "You have to register with your name",
              })}
              type="text"
              placeholder="ex:John Doe"
              className="input input-bordered w-full"
            />
            {errors?.name && (
              <label className="label">
                <FromErrorText message={errors?.name?.message} />
              </label>
            )}
          </div>

          {/* User phone number input */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Phone Number</span>
            </label>
            <input
              {...register("phoneNum", {
                required: "You have to register with your phone number",
                minLength: {
                  value: 11,
                  message: "Please provide a valid Bangladeshi phone number",
                },
                maxLength: {
                  value: 11,
                  message: "Please provide a valid Bangladeshi phone number",
                },
              })}
              type="tel"
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
                required: "You have to register with your password",
                minLength: {
                  value: 6,
                  message: "Password must be more or equal 6 charecters",
                },
              })}
              type="password"
              placeholder="ex:abc1234"
              className="input input-bordered w-full"
            />
            {errors?.password && (
              <label className="label">
                <FromErrorText message={errors?.password?.message} />
              </label>
            )}
          </div>

          {/* User photo input */}

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Pick your photo</span>
            </label>
            <input
              {...register("photo", {
                required: "You have to register with your photo",
              })}
              type="file"
              className="file-input file-input-bordered w-full"
            />
            {errors?.photo && (
              <label className="label">
                <FromErrorText message={errors?.photo?.message} />
              </label>
            )}
          </div>

          <input
            className="btn btn-primary mt-4"
            type="submit"
            value="register"
          />
        </form>
        <p className="mt-2">
          Already have an account? Plese
          <Link className="btn btn-link p-0 pl-1 lowercase" to="/login">
            login.
          </Link>
        </p>
      </FromWrapper>
    </SectionWrapper>
  );
};

export default Register;

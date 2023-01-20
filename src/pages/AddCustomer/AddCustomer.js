import React from "react";
import { useForm } from "react-hook-form";

const AddCustomer = () => {
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
          fetch("http://localhost:5000/api/v1/users/register", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
      });
  };

  return (
    <form
      className="max-w-2xl mx-auto p-10"
      onSubmit={handleSubmit(formSubmitHandler)}
    >
      {/* User name input */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Your Name</span>
        </label>
        <input
          {...register("name", {
            required: "You have to register with your name",
          })}
          type="text"
          placeholder="ex:John Doe"
          className="input input-bordered w-full max-w-xs"
        />
        {errors?.name && (
          <label className="label">
            <span className="label-text-alt">{errors?.name?.message}</span>
          </label>
        )}
      </div>

      {/* User phone number input */}
      <div className="form-control w-full max-w-xs">
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
            required: "You have to register with your password",
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

      {/* User photo input */}

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick your photo</span>
        </label>
        <input
          {...register("photo", {
            required: "You have to register with your photo",
          })}
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
        />
        {errors?.photo && (
          <label className="label">
            <span className="label-text-alt">{errors?.photo?.message}</span>
          </label>
        )}
      </div>

      <input className="btn btn-primary" type="submit" value="add customer" />
    </form>
  );
};

export default AddCustomer;

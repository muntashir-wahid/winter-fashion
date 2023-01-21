import React from "react";
import { useForm } from "react-hook-form";
import SecondaryHeading from "../../components/Headings/SecondaryHeading/SecondaryHeading";
import FromErrorText from "../../components/Wrappers/FormWrapper/FromErrorText";
import FromWrapper from "../../components/Wrappers/FormWrapper/FromWrapper";
import SectionHeaderWrapper from "../../components/Wrappers/SectionHeaderWrapper/SectionHeaderWrapper";
import SectionWrapper from "../../components/Wrappers/SectionWrapper/SectionWrapper";

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
    <SectionWrapper>
      <SectionHeaderWrapper>
        <SecondaryHeading>Add a New Customer</SecondaryHeading>
      </SectionHeaderWrapper>
      <FromWrapper className="max-w-xl">
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          {/* User name input */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Customer Name</span>
            </label>
            <input
              {...register("name", {
                required: "A customer must have a name",
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
              <span className="label-text">Customer Phone Number</span>
            </label>
            <input
              {...register("phoneNum", {
                required: "A customer must have a phone number",
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
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Customer must have a password for further login",
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
              <span className="label-text">Customer photo</span>
            </label>
            <input
              {...register("photo", {
                required: "Customer must have a photo",
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
            value="Add Customer"
          />
        </form>
      </FromWrapper>
    </SectionWrapper>
  );
};

export default AddCustomer;

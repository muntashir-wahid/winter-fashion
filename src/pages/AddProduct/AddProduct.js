import React from "react";
import { useForm } from "react-hook-form";
import SecondaryHeading from "../../components/Headings/SecondaryHeading/SecondaryHeading";
import FromErrorText from "../../components/Wrappers/FormWrapper/FromErrorText";
import FromWrapper from "../../components/Wrappers/FormWrapper/FromWrapper";
import SectionHeaderWrapper from "../../components/Wrappers/SectionHeaderWrapper/SectionHeaderWrapper";
import SectionWrapper from "../../components/Wrappers/SectionWrapper/SectionWrapper";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmitHandler = (data) => {
    const product = { ...data };

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
          product.picture = imageData.data.display_url;

          // User Reagistration
          fetch("https://winter-fashion-server.vercel.app/api/v1/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
      });
  };

  return (
    <SectionWrapper>
      <SectionHeaderWrapper>
        <SecondaryHeading>Add a New Product</SecondaryHeading>
      </SectionHeaderWrapper>
      <FromWrapper className="max-w-xl">
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          {/* Product name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              {...register("name", {
                required: "A product must have a name",
              })}
              type="text"
              placeholder="Some product Name"
              className="input input-bordered w-full"
            />
            {errors?.name && (
              <label className="label">
                <FromErrorText message={errors?.name?.message} />
              </label>
            )}
          </div>

          {/* Brand name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product brand</span>
            </label>
            <input
              {...register("brandName", {
                required: "A product must have a brand name",
              })}
              type="text"
              placeholder="Some brand name"
              className="input input-bordered w-full"
            />
            {errors?.brandName && (
              <label className="label">
                <FromErrorText message={errors?.brandName?.message} />
              </label>
            )}
          </div>

          {/* Product price */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              {...register("price", {
                required: "A product must have a price",
                min: {
                  value: 50,
                  message: "Product price need to be more then 50",
                },
              })}
              type="number"
              placeholder="120"
              className="input input-bordered w-full"
            />
            {errors?.price && (
              <label className="label">
                <FromErrorText message={errors?.price?.message} />
              </label>
            )}
          </div>

          {/* Product Color */}

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Color</span>
            </label>
            <input
              {...register("color", {
                required: "A product must have some color",
              })}
              type="text"
              placeholder="red"
              className="input input-bordered w-full"
            />
            {errors?.color && (
              <label className="label">
                <FromErrorText message={errors?.color?.message} />
              </label>
            )}
          </div>

          {/* Product image */}

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Pick a photo</span>
            </label>
            <input
              {...register("photo", {
                required: "A product must have a photo",
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
            value="add product"
          />
        </form>
      </FromWrapper>
    </SectionWrapper>
  );
};

export default AddProduct;

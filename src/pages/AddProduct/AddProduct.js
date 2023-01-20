import React from "react";
import { useForm } from "react-hook-form";

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
          fetch("http://localhost:5000/api/v1/products", {
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
    <form
      className="max-w-2xl mx-auto p-10"
      onSubmit={handleSubmit(formSubmitHandler)}
    >
      {/* Product name */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Product Name</span>
        </label>
        <input
          {...register("name", {
            required: "A product must have a name",
          })}
          type="text"
          placeholder="Some product Name"
          className="input input-bordered w-full max-w-xs"
        />
        {errors?.name && (
          <label className="label">
            <span className="label-text-alt">{errors?.name?.message}</span>
          </label>
        )}
      </div>

      {/* Brand name */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Product brand</span>
        </label>
        <input
          {...register("brandName", {
            required: "A product must have a brand name",
          })}
          type="text"
          placeholder="Some brand name"
          className="input input-bordered w-full max-w-xs"
        />
        {errors?.brandName && (
          <label className="label">
            <span className="label-text-alt">{errors?.brandName?.message}</span>
          </label>
        )}
      </div>

      {/* Product price */}
      <div className="form-control w-full max-w-xs">
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
          className="input input-bordered w-full max-w-xs"
        />
        {errors?.price && (
          <label className="label">
            <span className="label-text-alt">{errors?.price?.message}</span>
          </label>
        )}
      </div>

      {/* Product Color */}

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Color</span>
        </label>
        <input
          {...register("color", {
            required: "A product must have some color",
          })}
          type="text"
          placeholder="red"
          className="input input-bordered w-full max-w-xs"
        />
        {errors?.color && (
          <label className="label">
            <span className="label-text-alt">{errors?.color?.message}</span>
          </label>
        )}
      </div>

      {/* Product image */}

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick a photo</span>
        </label>
        <input
          {...register("photo", {
            required: "A product must have a photo",
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

      <input className="btn btn-primary" type="submit" value="add product" />
    </form>
  );
};

export default AddProduct;

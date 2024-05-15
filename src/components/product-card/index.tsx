import { ProductType } from "@/types/product.types";
import Image from "next/image";
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import LikeButton from "../like";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product }: { product: ProductType }) => {
  const addLike = () =>
    toast.success("Add to Favorites", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  const addCard = () =>
    toast.success("Add to Savat", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  return (
    <div className="w-[150px] cursor-pointer py-5">
      <Image
        src={product.images[0]}
        alt={product.title}
        width={194}
        height={194}
        className="h-[130px] object-cover"
      />
      <div className="relative">
        <div className="text-sm font-semibold inline-block px-3 py-0.5 bg-red-500 text-white rounded-2xl absolute left-2 -top-8">
          {Math.round(product.discountPercentage)}%
        </div>
        <div onClick={addLike} className="absolute right-2 -top-32">
          <ToastContainer />
          <LikeButton />
        </div>
        <div className="text-xs h-[24px]">{product.title}</div>
        <div className="line-through text-[13px] pt-1 text-gray-400">
          {product.price}$
        </div>
        <div className="text-red-500 text-[13px] py-1  font-medium">
          {(
            product.price -
            (product.price * product.discountPercentage) / 100
          ).toFixed(2)}
          $
        </div>
        <button
          onClick={addCard}
          className="flex items-center gap-1 bg-yellow-400 px-3 py-2 rounded-md"
        >
          <MdOutlineShoppingCart /> Savatga
          <ToastContainer />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

"use client";
import Carousel from "@/components/banner/carousel";
import Loader from "@/components/loader";
import ProductCard from "@/components/product-card";
import useProductStore from "@/store/product/productStore";
import { ProductType } from "@/types/product.types";
import React, { useEffect } from "react";

const slides = [
  "https://minio.alifnasiya.uz/shop/catalog/carousel/202/1713186227-Glav_1600x491_uz.png",
  "https://minio.alifnasiya.uz/shop/catalog/carousel/207/1714733057-main_1600x491_uz.png",
  "https://minio.alifnasiya.uz/shop/catalog/carousel/209/1715658746-Banner-1-uzb (2).jpg",
  "https://minio.alifnasiya.uz/shop/catalog/carousel/204/1711612116-Main_1600x491_uz.png",
  "https://minio.alifnasiya.uz/shop/catalog/carousel/206/1713186276-1600x491radar.png",
  "https://minio.alifnasiya.uz/shop/catalog/carousel/208/1714989982-Intel s23_1600╤Е491_uz.png",
  "https://minio.alifnasiya.uz/shop/catalog/carousel/192/1705063992-1600х491 UZ.png",
  "https://minio.alifnasiya.uz/shop/catalog/carousel/196/1707476026-1600491_x8b.png",
  "https://minio.alifnasiya.uz/shop/catalog/carousel/194/1707125602-1600x491 UZ.png",
];
const Products = () => {
  const { loading, products, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <Carousel>
        {slides.map((s) => (
          <img src={s} alt="Carousel-img" />
        ))}
      </Carousel>
      {loading && <Loader />}
      {products?.length > 0 ? (
        <div className="flex flex-wrap gap-9 justify-center">
          {products.map((product: ProductType) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        !loading && <div>No products yet</div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Products;

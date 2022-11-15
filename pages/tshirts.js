import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import mongoose from "mongoose";
import connectDb from "../middleware/mongoose";
import Product from "../models/Product";
const Tshirts = ({ products }) => {
  return (
    <div>
      <Head>
        <title>CodesWear - TShirts</title>
      </Head>

      <div className='mx-auto'>
        <section className='text-gray-600 body-font mx-auto'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='flex flex-wrap -m-4 mx-auto w-full md-w-[80%] items-center justify-center cus3xl:w-[85%]'>
              {products?.map((item) => (
                <Link
                  passHref={true}
                  href={`/product/${item.slug}`}
                  key={item.title}
                >
                  <div className='p-4 sm:p-6 md:p-10 mx-4 items-center my-5 cursor-pointer shadow-lg'>
                    <img
                      alt='ecommerce'
                      className='m-auto md:mx-0 h-[30vh] md:h-[36vh] block'
                      src={item.img}
                    />
                    <div className='mt-4 text-center'>
                      <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                        {item.title}
                      </h3>
                      <h2 className='text-gray-900 title-font text-lg font-medium'>
                        {item.desc}
                      </h2>
                      <p className='mt-1'>{item.price}</p>
                      <p className='mt-1'>{item.size} </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: "tshirt" });
  console.log("Products", products);
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}

export default Tshirts;

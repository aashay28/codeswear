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
              {Object.keys(products)?.map((item) => (
                <Link
                  passHref={true}
                  href={`/product/${products[item].slug}`}
                  key={products[item].title}
                >
                  <div className='p-4 sm:p-6 md:p-10 mx-4 items-center my-5 cursor-pointer shadow-lg'>
                    <img
                      alt='ecommerce'
                      className='m-auto md:mx-0 h-[30vh] md:h-[36vh] block'
                      src={products[item].img}
                    />
                    <div className='mt-4 text-center'>
                      <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                        {products[item].title}
                      </h3>
                      <h2 className='text-gray-900 title-font text-lg font-medium'>
                        {products[item].desc}
                      </h2>
                      <p className='mt-1'>{products[item].price}</p>

                      <p className='mt-1'>
                        {products[item].size.map((s, i) => (
                          <span
                            key={i}
                            className='border border-gray-300 px-1 mx-1'
                          >
                            {s}
                          </span>
                        ))}
                      </p>

                      <div className='mt-1'>
                        {products[item].color.map((col, i) => (
                          <button
                            key={i}
                            className={`border-2 border-gray-300 ml-1 ${`bg-${col}-500`} rounded-full w-6 h-6 focus:outline-none`}
                          ></button>
                        ))}
                      </div>
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
  const tshirts = {};
  for (let item of products) {
    if (item.title in tshirts) {
      if (
        !tshirts[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].color.push(item.color);
      }
      if (
        !tshirts[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].size.push(item.size);
      }
    } else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        tshirts[item.title].color = [item.color];
        tshirts[item.title].size = [item.size];
      } else {
        tshirts[item.title].color = [];
        tshirts[item.title].size = [];
      }
    }
  }

  return {
    props: { products: JSON.parse(JSON.stringify(tshirts)) },
  };
}

export default Tshirts;

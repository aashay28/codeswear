import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleCart = () => {
    setSidebar(!sidebar);
  };

  return (
    <header>
      <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 mb-1 shadow-xl'>
        <div className='logo mx-5'>
          <Link href={"/"}>
            <Image
              src={"/img/logo.jpeg"}
              alt={"Codeswear.com"}
              width={230}
              height={45}
              className=''
            />
          </Link>
        </div>
        <div className='nav'>
          <ul className='flex items-center space-x-3 font-bold md:text-lg'>
            <Link href={"/tshirts"}>
              <li>Tshirts</li>
            </Link>
            <Link href={"/hoodies"}>
              <li>Hoodies</li>
            </Link>
            <Link href={"/stickers"}>
              <li>Stickers</li>
            </Link>
            <Link href={"/mugs"}>
              <li>Mugs</li>
            </Link>
          </ul>
        </div>
      </div>
      <div
        className='cart absolute right-0 top-4 mx-4 vvsm:mx-5 cursor-pointer'
        onClick={toggleCart}
      >
        <AiOutlineShoppingCart className='text-2xl md:text-3xl' />
      </div>
      {sidebar && (
        <div className='sideCart w-[100vw] vvsm:w-[85vw] vsm:[50vw] sm:w-[65vw] md:w-[50vw] lg:w-[35vw] xl:w-[25vw] h-full absolute top-0 right-0 bg-pink-100 py-10 px-5 vvsm:px-10 z-10 ease-in-out duration-1000 transform transition-transform'>
          <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
          <span
            onClick={toggleCart}
            className='absolute top-5 right-4 text-2xl cursor-pointer text-pink-500'
          >
            <AiFillCloseCircle />
          </span>
          <ol className='list-decimal font-bold'>
            <li>
              <div className='item flex my-5 mx-2'>
                <div className='font-semibold w-2/3'>
                  TShirts - Wear the Code
                </div>
                <div className='font-semibold w-1/3 flex items-center justify-center text-lg'>
                  {" "}
                  <AiFillMinusCircle className='cursor-pointer text-pink-500' />{" "}
                  <span className='mx-2 text-sm'>1</span>{" "}
                  <AiFillPlusCircle className='cursor-pointer text-pink-500' />
                </div>
              </div>
            </li>
          </ol>
          <div className='flex items-center justify-center space-x-2'>
            <button className='flex mt-10 text-white bg-pink-500 border-2 border-pink-500 py-[0.35rem] px-3 focus:outline-none hover:bg-pink-600 rounded text-lg items-center justify-center space-x-1'>
              <BsFillBagCheckFill />{" "}
              <span className='text-sm sm:text-base'>Checkout</span>
            </button>
            <button className='flex mt-10 text-stone-700 text-sm border-2 border-pink-500 outline-pink-500 py-[0.35rem] px-3 focus:outline-none hover:bg-pink-500 hover:border-white ease-in-out hover:text-white rounded items-center justify-center'>
              <span className='text-sm sm:text-base'>Clear Cart</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;

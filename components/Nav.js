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
import { MdAccountCircle } from "react-icons/md";

const Nav = ({
  user,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
  logout,
}) => {
  const [sidebar, setSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const toggleCart = () => {
    setSidebar(!sidebar);
  };
 
  return (
    <header>
      {!sidebar && (
        <span
          onMouseOver={() => {
            setDropdown(true);
          }}
          onMouseLeave={() => {
            setDropdown(false);
          }}
          className='fixed top-6 z-30 right-10'
        >
          {dropdown && (
            <div className='absolute right-6 bg-white top-6 rounded-md px-5 w-32 z-30'>
              <ul>
                <Link href={"/myaccount"}>
                  <li className='py-1 hover:text-pink-700 font-bold text-sm'>
                    My account
                  </li>
                </Link>
                <Link href={"/orders"}>
                  <li className='py-1 hover:text-pink-700 font-bold text-sm'>
                    My Orders
                  </li>
                </Link>

                <li
                  onClick={logout}
                  className='py-1 cursor-pointer hover:text-pink-700 font-bold text-sm'
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
          <span>
            {user.value && <MdAccountCircle className='md:text-3xl text-3xl' />}
          </span>
        </span>
      )}
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
      <div className='cart absolute right-0 top-4 mx-4 vvsm:mx-5 cursor-pointer flex '>
        {!user.value && (
          <Link
            href={"/login"}
            className='bg-pink-600 px-2 py-1 rounded-md text-white mx-2'
          >
            Login
          </Link>
        )}
        <AiOutlineShoppingCart
          className='text-2xl md:text-3xl'
          onClick={toggleCart}
        />
      </div>
      {sidebar && (
        <div className='sideCart overflow-y-scroll w-[100vw] vvsm:w-[85vw] vsm:[50vw] sm:w-[65vw] md:w-[50vw] lg:w-[35vw] xl:w-[25vw] h-full absolute top-0 right-0 bg-pink-100 py-10 px-5 vvsm:px-10 z-10 ease-in-out duration-1000 transform transition-transform'>
          <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
          <span
            onClick={toggleCart}
            className='absolute top-5 right-4 text-2xl cursor-pointer text-pink-500'
          >
            <AiFillCloseCircle />
          </span>
          <ol className='list-decimal font-bold'>
            {Object.keys(cart).length == 0 && (
              <div className='my-4 font-semibold'>Your cart is empty!</div>
            )}
            {Object.keys(cart).map((k) => (
              <li key={k}>
                <div className='item flex my-5 mx-2'>
                  <div className='w-2/3 font-semibold'>
                    {cart[k].name}({cart[k].size}/{cart[k].variant})
                  </div>
                  <div className='font-semibold w-1/3 flex items-center justify-center text-lg'>
                    {" "}
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className='cursor-pointer text-pink-500'
                    />{" "}
                    <span className='mx-2 text-sm'>{cart[k].qty}</span>
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className='cursor-pointer text-pink-500'
                    />
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div className='font-bold my-2'>Subtotal : ₹{subTotal}</div>
          <div className='flex'>
            <Link href={"/checkout"}>
              <button className=' disabled:bg-pink-300 flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm'>
                <BsFillBagCheckFill className='m-1' />
                Checkout
              </button>
            </Link>
            <button
              onClick={clearCart}
              className='flex mr-2 disabled:bg-pink-300 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm'
            >
              <BsFillBagCheckFill className='m-1' />
              clearCart
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;

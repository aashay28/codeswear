import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
const checkout = ({ cart, clearCart, addToCart, removeFromCart, subTotal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState({ value: null });
  const handleChange = () => {};
  return (
    <div className='container m-auto px-2 sm:m-auto min-h-screen'>
      <Head>
        <title>Checkout - Codeswear.com</title>
        <meta
          name='viewport'
          content='width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0'
        />
      </Head>
      <Script
        type='application/javascript'
        crossorigin='anonymous'
        src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`}
      >
        {" "}
      </Script>

      <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
      <h2 className='font-semibold text-xl'>1, Delivery Details</h2>
      <div className='mx-auto flex my-2'>
        <div className='px-2 w-1/2'>
          <div className='mb-4'>
            <label htmlFor='name' className='leading-7 text-sm text-gray-600'>
              Name
            </label>
            <input
              onChange={handleChange}
              value={name}
              type='text'
              id='name'
              name='name'
              className='w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className='mb-4'>
            <label htmlFor='email' className='leading-7 text-sm text-gray-600'>
              Email
            </label>
            {user && user.token ? (
              <input
                value={user.email}
                type='email'
                id='email'
                name='email'
                readOnly
                className='w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            ) : (
              <input
                onChange={handleChange}
                value={email}
                type='email'
                id='email'
                name='email'
                className='w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            )}
          </div>
        </div>
      </div>
      <div className='px-2 w-full'>
        <div className='mb-4'>
          <label htmlFor='address' className='leading-7 text-sm text-gray-600'>
            Address
          </label>
          <textarea
            onChange={handleChange}
            value={address}
            name='address'
            id='address'
            cols='30'
            rows='2'
            className='w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          ></textarea>
        </div>
      </div>
      <div className='mx-auto flex my-2'>
        <div className='px-2 w-1/2'>
          <div className='mb-4'>
            <label htmlFor='phone' className='leading-7 text-sm text-gray-600'>
              Phone
            </label>
            <input
              onChange={handleChange}
              value={phone}
              placeholder='Your 10 Digit phone Number'
              type='phone'
              id='phone'
              name='phone'
              className='w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className='mb-4'>
            <label
              htmlFor='pincode'
              className='leading-7 text-sm text-gray-600'
            >
              Pincode
            </label>
            <input
              onChange={handleChange}
              value={pincode}
              type='text'
              id='pincode'
              name='pincode'
              className='w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
        </div>
      </div>
      <div className='mx-auto flex my-2'>
        <div className='px-2 w-1/2'>
          <div className='mb-4'>
            <label htmlFor='state' className='leading-7 text-sm text-gray-600'>
              State
            </label>
            <input
              onChange={handleChange}
              value={state}
              type='text'
              id='state'
              name='state'
              className='w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
        </div>

        <div className='px-2 w-1/2'>
          <div className='mb-4'>
            <label htmlFor='city' className='leading-7 text-sm text-gray-600'>
              District
            </label>
            <input
              onChange={handleChange}
              value={city}
              type='text'
              id='city'
              name='city'
              className='w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
        </div>
      </div>
      <h2 className='font-semibold text-xl'>2. Review Cart item & Pay</h2>
      <div className='sideCart bg-pink-100 p-6 m-2 '>
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length == 0 && (
            <div className='my-4 font-semibold'>Your cart is empty!</div>
          )}
          {Object?.keys(cart)?.map((k) => {
            return (
              <li key={k}>
                <div className='item flex my-5'>
                  <div className=' font-semibold'>
                    {cart[k].name}({cart[k].size}/{cart[k].variant})
                  </div>
                  <div className='flex font-semibold items-center justify-center w-1/3 text-lg'>
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
                    />
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
            );
          })}
        </ol>
        <span className='font-bold'>Subtotal : {subTotal}</span>
      </div>
      <div className='mx-4'>
        <Link href={"/checkout"}>
          <button
            disabled={disabled}
            // onClick={initiatePayment}
            className='disabled:bg-pink-300 flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm'
          >
            <BsFillBagCheckFill className='m-1' />
            Pay ₹1000
          </button>
        </Link>
      </div>
    </div>
  );
};

export default checkout;

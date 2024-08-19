"use client";

import { useState } from 'react';
import InputModal from '../components/InputModal';

export default function AllRawData() {
  try {
    const handleSubmit = () => {
      console.log('Submit');
    }

    return (
      <div>
        {/* <InputModal /> */}
        <h1 className="text-2xl font-bold">Raw Data</h1>

        <div className="mt-4">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
            </div>
          </div>

        </div>

      </div>
    );

  } catch (error) {
    return (
      <div>
        <h2>Error</h2>
        <p>{(error as Error).message}</p>
      </div>
    )
  }
}
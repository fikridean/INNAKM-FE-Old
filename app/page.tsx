"use client";

import { useState } from 'react'

import Link from "next/link";

import searchRequest from './search';

interface SearchData {
  data: Object[];
  message: string;
  status: number;
  success: boolean;
}

export default function AllPortals() {
  try {
    const [searchResults, setSearchResults] = useState<SearchData>({ data: [], message: "", status: 0, success: false });

    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      const search_input = document.getElementById('search_input') as HTMLInputElement;

      console.log(search_input.value.length)

      if (search_input.value.length < 5 || search_input.value.length > 500) {
        return;
      }

      searchRequest(search_input.value).then((item: SearchData) => {
        console.log(item.data)
        setSearchResults(item);
      });
    }

    return (
      <div className="flex flex-wrap mt-4 justify-center">
        <div className="w-full lg:w-1/2 mb-4 p-4">
          <Link href="/portals">
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Portals</div>
                <p className="text-gray-700 text-base">
                  Managing portal-related data.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Route</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CRUD</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Transaction</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full lg:w-1/2 mb-4 p-4">
          <Link href="/raws">
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Raw Data</div>
                <p className="text-gray-700 text-base">
                  Collecting and storing raw data.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Route</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CRUD</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Transaction</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full p-4 m-auto">
          <div className="md:flex md:items-center">
            <div className="md:w-1/5 px-2 mt-4">
              <label className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4">
                Search
              </label>
            </div>

            <div className="md:w-4/5 px-2 mt-4">
              <input className="shadow-lg appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="search_input" type="text" />
            </div>

            <div className="md:w-1/6 px-2 mt-4">
              <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Search
              </button>
            </div>
          </div>
        </div>

        {searchResults.data.length > 0 ? (
          searchResults.data.map((item: Object, index) => (
            <div className="w-full mb-4 p-4" key={index}>
              <div className="max-w rounded overflow-hidden shadow-lg mx-auto p-4">
                <div className="font-bold text-xl mt-4 text-center mb-4">{(item as { species: string })['species']}</div>

                {Object.entries((item as { data: Object[] })['data']).map(([key, value]) => (
                  <div key={key}>
                    <span>{key}: </span>
                    <span>{typeof value === 'object' ? JSON.stringify(value) : value}</span>
                  </div>
                ))}

                <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3 justify-center text-white">{(item as { web: string })['web']}</span>
              </div>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}

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
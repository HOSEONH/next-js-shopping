"use client";

import React from "react";
import axios from "axios"; 
import { useState, useEffect } from "react"; 

export default function SearchList() {

interface Item {
  brand: string;
}

const [data, setData] = useState<Item[]>([]);
console.log(data);
  const shoppingData = async () => {
    const URL = "/v1/search/shop.json";
    const ClientID = process.env.NEXT_PUBLIC_ClientID;
    const ClientSecret = process.env.NEXT_PUBLIC_ClientSecret;

    await axios
      .get(URL, {
        params: {
          query: "모자",
          display: 20,
        },
        headers: {
          "X-Naver-Client-Id": ClientID,
          "X-Naver-Client-Secret": ClientSecret,
        },
      })
      .then((res) => setData(res.data.items))
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    shoppingData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
      <h1 className="text-2xl font-bold">검색 결과</h1>
      <div className="grid gap-4 grid-cols-4">
        {data.map((item, index) => {
          return (
            <div key={index} className="bg-white p-4 rounded-md shadow-md">
              <h2 className="text-lg font-bold">{item.brand}</h2>
            </div>
          );
        })}
      </div>


    </div>
  )
}
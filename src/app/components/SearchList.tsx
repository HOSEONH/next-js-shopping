import React from "react";
import axios from "axios"; 

interface Item {
  brand: string;
}

async function fetchShoppingData() {
  const URL = process.env.BaseURL;
  const ClientID = process.env.ClientID;
  const ClientSecret = process.env.ClientSecret;

  try {
    const response = await axios.get(URL as string, {
      params: {
        query: "모자",
        display: 20,
      },
      headers: {
        "X-Naver-Client-Id": ClientID,
        "X-Naver-Client-Secret": ClientSecret,
      },
    })
    return response.data.items;
  }
  catch (error) {
    console.error("API 호출 에러:", error);
    return [];
  }
};

export default async function SearchList() {
  const data: Item[] = await fetchShoppingData();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
      <h1 className="text-2xl font-bold">검색 결과</h1>
      <div className="grid gap-4 grid-cols-4">
        {data.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold">{item.brand}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
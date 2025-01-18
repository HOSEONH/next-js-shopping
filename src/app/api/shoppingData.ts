import axios from "axios";

type TShoppingData = {
  title: string;
  brand: string;
  category1: string;
  category2: string;
  category3: string;
  image: string;
  link: string;
  lprice: number;
}

export async function fetchShoppingData() {
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
    const data: TShoppingData[] = response.data.items;
    console.log("API 호출 결과:", data);
    return data;
  }
  catch (error) {
    console.error("API 호출 에러:", error);
    return null;
  }
};
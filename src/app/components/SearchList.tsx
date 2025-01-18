
import { fetchShoppingData } from "../api/shoppingData";
import Image from 'next/image';

export default async function SearchList() {
  const data = await fetchShoppingData();

  if (data === null) {
    return <div>API 호출 에러</div>;
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-40 py-2 my-24 gap-24">
      <div className="flex justify-start gap-4 w-full">
        <h1 className="text-3xl font-bold">밀듀샵 🏪</h1>
        <input type="text" placeholder="검색어를 입력해주세요" className="bg-slate-100 rounded-md w-[600px] h-10 px-1" />
        <button className="bg-black text-white rounded-md py-2 px-5">검색</button>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between gap-4 w-full">
          <button className="flex-1">전체</button>
          <button className="flex-1">가격비교</button>
          <button className="flex-1">네이버페이</button>
          <button className="flex-1">백화점/홈쇼핑</button>
          <button className="flex-1">쇼핑윈도</button>
          <button className="flex-1">해외직구</button>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex gap-4">
            <button>네이버 랭킹순</button>
            <button>낮은 가격순</button>
            <button>네이버 랭킹순</button>
            <button>네이버 랭킹순</button>
          </div>
        <div className="flex gap-4">
          <select>
            <option>상품타입(전체)</option>
            <option>해외직구보기</option>
            <option>해외직구제외</option>
            <option>중고보기</option>
            <option>중고제외</option>
            <option>렌탈보기</option>
            <option>렌탈제외</option>
          </select>

          <select>
            <option>20개씩 보기</option>
            <option>40개씩 보기</option>
            <option>60개씩 보기</option>
            <option>80개씩 보기</option>
          </select>
        </div>
      </div>
    </div>
      <div className="grid gap-10 grid-cols-1 w-full">
         {data.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
             <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
            <span>{`${item.category1} > `}</span>
            <span>{`${item.category2} > `}</span>
            <span>{item.category3}</span>
            <p>{`${item.lprice}원`}</p>
            <Image src={item.image} alt={item.title} width={100} height={100} style={{ width: "auto", height: "auto" }} />
          </div>
        ))}
      </div>
    </div>
  )
}
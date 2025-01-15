"use client";

import { useRouter } from "next/navigation";

export default function HomeSearch() {
  const router = useRouter();
  const onClickSearch = () => {
    router.push("/search");
  };

  return (
  <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
    <h1 className="text-3xl font-bold">밀듀샵 🏪</h1>
    <input type="text" placeholder="검색어를 입력해주세요" className="bg-slate-100 rounded-md w-[500px] h-10 px-1" />
    <button onClick={onClickSearch} className="bg-black text-white rounded-md py-2 px-5">검색</button>
  </div>
  );
}
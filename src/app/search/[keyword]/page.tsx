"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getRTListApi, GetRTListApi } from "Api/apis";
import SearchList from "Components/Molecules/searchList";
import { useEffect, useRef } from "react";

const Search = ({ params }: { params: { keyword: string } }) => {
  const keyword = params.keyword;
  const ref = useRef<HTMLDivElement>(null);
  const { data, fetchNextPage } = useInfiniteQuery(
    ["RTList", keyword],
    async ({ pageParam = 1 }) => {
      return getRTListApi(keyword, pageParam);
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage?.data?.data) return undefined;

        const isMore = lastPage.data.data.length === 20;
        const nextPage = allPages.length + 1;
        const next = isMore ? nextPage : undefined; // 다음 데이터가 있는지 없는지 판단
        return next;
      },
    }
  );

  const options = {
    rootMargin: "100px",
    threshold: 0.1,
  };

  const observer = useRef(
    new IntersectionObserver(() => fetchNextPage(), options)
  );
  ref.current && observer.current.observe(ref.current);
  const RTList = data?.pages?.map((el) => el.data.data).flat();
  console.log(RTList);
  return (
    <div className="grid md:grid-cols-2 gap-x-50 relative">
      {RTList && RTList?.length !== 0 ? (
        <SearchList storeList={RTList} />
      ) : (
        "없음"
      )}
      <div className="opacity-0 h-500 absolute bottom-0" ref={ref}>
        리스트 불러오는중
      </div>
    </div>
  );
};
export default Search;

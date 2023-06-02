"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getRTListApi } from "Api/apis";
import SearchList from "Components/Molecules/searchList";
import { useEffect, useRef } from "react";

const OPTIONS = {
  rootMargin: "100px",
  threshold: 0.1,
};

const Search = ({ params }: { params: { keyword: string } }) => {
  const keyword = params.keyword;
  const ref = useRef<HTMLDivElement>(null);
  const observer = useRef(
    new IntersectionObserver(() => fetchNextPage(), OPTIONS)
  );

  const { data, fetchNextPage } = useInfiniteQuery(
    ["RTList", keyword],
    async ({ pageParam = 1 }) => {
      return getRTListApi(keyword, pageParam);
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage?.data) return undefined;

        const isMore = lastPage.data.length === 20; // 받아온 데이터가 20개면 다음페이지가 있는걸로 판단
        const nextPage = allPages.length + 1; // 다음페이지
        const next = isMore ? nextPage : undefined;
        return next;
      },
    }
  );

  const RTList = data?.pages?.map((el) => el.data).flat();

  useEffect(() => {
    ref.current && observer.current.observe(ref.current);
  }, []);

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

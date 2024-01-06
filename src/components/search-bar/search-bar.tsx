"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export function SearchBar({ query }: any) {
  const router = useRouter();

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const inputRef = useRef<HTMLInputElement>(null);

  const setQueryParam = (query: string) => {
    params.set("query", query);
    const url_query = params.toString();

    router.push(`/blog?${url_query}`, { scroll: false });
  };

  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === "Enter") {
        event.preventDefault();
        setQueryParam(inputRef.current?.value || "");
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <div className="d-flex justify-content-end mb-4">
      <form action="#" className="search-form" style={{ width: "350px" }}>
        <div className="form-group">
          <span className="fa fa-search" />
          <input
            ref={inputRef}
            type="text"
            className="form-control"
            placeholder="Type a keyword and hit enter"
          />
        </div>
      </form>
    </div>
  );
}

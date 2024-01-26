"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export function SearchBar({ query, categories, currentCategory }: any) {
  const router = useRouter();

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const inputRef = useRef<HTMLInputElement>(null);

  const setQueryParam = () => {
    params.set("query", inputRef.current?.value || "");
    const url_query = params.toString();
    router.push(`/blog?${url_query}`, { scroll: false });
  };

  const setCategoryParam = (e: React.ChangeEvent<HTMLSelectElement>) => {
    params.set("category", e.target?.value);
    const url_query = params.toString();
    router.push(`/blog?${url_query}`, { scroll: false });
  };

  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === "Enter") {
        event.preventDefault();
        setQueryParam();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <div className="d-flex justify-content-between mb-4">
      <div className="d-flex align-items-center">
        <label className="mr-4">Categories: </label>

        <select
          aria-label="Default select example"
          style={{
            padding: "7px",
            borderRadius: "5px",

            border: "1.5px solid #e9e9e9",
          }}
          onChange={setCategoryParam}
        >
          <option value="">All</option>
          {categories.map((category: any, index: number) => {
            const category_ = category?.category;
            return (
              <option
                key={category_?.slug?.current}
                value={category_?.slug?.current}
                selected={currentCategory === category_?.slug?.current}
              >
                {category_?.name}
              </option>
            );
          })}
        </select>
      </div>
      <form action="#" className="search-form" style={{ width: "350px" }}>
        <div className="form-group">
          <button
            className="fa fa-search btn btn-outline-primary"
            onClick={(e) => {
              e.preventDefault();
              setQueryParam();
            }}
          ></button>
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

/* eslint-disable react/jsx-no-bind */

"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({
  pageIndex,
  isFirstPage,
  isLastPage,
}: any) {
  const router = useRouter();

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  // Define functions for navigating to the next and previous pages
  // These functions update the page query parameter in the URL
  const handleNextPage = () => {
    params.set("page", (pageIndex + 1).toString());
    const query = params.toString();

    router.push(`/blog?${query}`, { scroll: false });
  };

  const handlePrevPage = () => {
    params.set("page", (pageIndex - 1).toString());
    const query = params.toString();

    router.push(`/blog?${query}`, { scroll: false });
  };

  return (
    <div className="container">
      <div
        aria-label="Pagination"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            disabled={isFirstPage}
            onClick={handlePrevPage}
            className="btn btn-outline-primary"
          >
            <span>Previous</span>
          </button>
          <button
            onClick={handleNextPage}
            disabled={isLastPage}
            className="btn btn-outline-primary"
          >
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

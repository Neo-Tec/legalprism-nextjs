"use client";

import { DiscussionEmbed } from "disqus-react";
import { usePathname } from "next/navigation";
import React from "react";

function DisqusComments({ title, slug }: any) {
  const pathname = usePathname();
  const disqusConfig = {
    url: `https://legalprism.in${pathname}`,
    identifier: slug?.current,
    title: title,
  };
  return <DiscussionEmbed shortname="legalprism" config={disqusConfig} />;
}

export default DisqusComments;

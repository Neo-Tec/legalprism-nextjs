"use client";

import { DiscussionEmbed } from "disqus-react";
import React from "react";

function DisqusComments({ title, slug }: any) {
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const disqusConfig = {
    url: pageUrl,
    identifier: slug,
    title: title,
  };
  return <DiscussionEmbed shortname="legalprism" config={disqusConfig} />;
}

export default DisqusComments;

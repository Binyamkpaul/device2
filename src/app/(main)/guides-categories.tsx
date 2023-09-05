"use client";
import { useAtomValue } from "jotai";
import React from "react";
import { useGetGuidesByModelIdQuery } from "./api-queries";
import { selectedModelAtom } from "@/store";
import GuideItem from "./guide-item";

export default function GuidesCategories() {
  const selectedModel = useAtomValue(selectedModelAtom);
  const { data: catagories } = useGetGuidesByModelIdQuery(selectedModel);

  return (
    <div>
      {catagories?.map((catagories: any) => (
        <GuideItem key={catagories.id} catagories={catagories} />
      ))}
    </div>
  );
}

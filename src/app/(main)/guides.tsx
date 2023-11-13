"use client";
import { selectedModelAtom } from "@/store";
import { useAtomValue } from "jotai";
import React, { useState } from "react";
import { useGetGuidesByModelIdQuery } from "./api-queries";
import GuideItem from "./guide-item";
import _ from "lodash";
import GuidesCategories from "./guides-categories";

export default function GuidesList() {
  const selectedModel = useAtomValue(selectedModelAtom);
  const { data } = useGetGuidesByModelIdQuery(selectedModel);
  const categoryNames = Object.keys(data?.categories ?? {});
  const [selectedCategroy, setSelectedCategory] = useState("Settings");
  return (
    <div>
      <GuidesCategories
        setSelectedCategory={setSelectedCategory}
        categoryNames={categoryNames}
        selectedCategory={selectedCategroy} // Make sure to provide this prop
      />

      {data?.categories?.[selectedCategroy]?.map((guide: any) => (
        <GuideItem key={guide.id} guide={guide} />
      ))}
    </div>
  );
}

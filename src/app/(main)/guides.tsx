"use client";
import { selectedModelAtom } from "@/store";
import { useAtomValue } from "jotai";
import React from "react";
import { useGetGuidesByModelIdQuery } from "./api-queries";
import GuideItem from "./guide-item";

export default function GuidesList() {
  const selectedModel = useAtomValue(selectedModelAtom);
  const { data: guides } = useGetGuidesByModelIdQuery(selectedModel);

  return (
    <div>
      {guides?.map((guide: any) => (
        <GuideItem key={guide.id} guide={guide} />
      ))}
    </div>
  );
}

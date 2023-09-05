"use client";
import { selectedModelAtom } from "@/store";
import { useAtomValue } from "jotai";
import React from "react";
import { useGetGuidesByModelIdQuery } from "./api-queries";

export default function GuidesList() {
  const selectedModel = useAtomValue(selectedModelAtom);
  const { data: guides } = useGetGuidesByModelIdQuery(selectedModel);

  return (
    <div>
      {guides && Array.isArray(guides) ? (
        guides.map((guide: any) => (
          <div key={guide.id}>
            {guide.categories && Array.isArray(guide.categories) ? (
              guide.categories.map((category: any) => (
                <div key={category.id}>{category.name}</div>
              ))
            ) : (
              <div>No categories available.</div>
            )}
          </div>
        ))
      ) : (
        <div>No guides available.</div>
      )}
    </div>
  );
}

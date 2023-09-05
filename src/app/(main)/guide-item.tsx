import React from "react";

export default function GuideItem({ guide }: any) {
  return (
    <div>
      <pre>{JSON.stringify(guide, null, 2)}</pre>
    </div>
  );
}

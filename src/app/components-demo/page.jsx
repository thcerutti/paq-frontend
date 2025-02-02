"use client";

import PaqButton from "@/app/components/PaqButton";

const ComponentsDemoPage = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    }}
  >
    <h1>Components Demo</h1>
    <PaqButton
      label="Quero fazer parte"
      onClick={() => alert("You clicked me!")}
    />
  </div>
);

export default ComponentsDemoPage;

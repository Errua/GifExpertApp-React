import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  // const handleAdd = () => {
  //   setCategories(["Pokemon", ...categories]);
  // };

  return (
    <div style={{ width: "85%", margin: "auto", padding: "0.75rem" }}>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      
    </div>
  );
};

export default GifExpertApp;

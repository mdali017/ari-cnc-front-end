import React from "react";
import Container from "../Container";
import { categories } from "./categoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item, index) => (
          <CategoryBox key={index} icon={item.icon} label={item.label} />
        ))}
      </div>
    </Container>
  );
};

export default Categories;

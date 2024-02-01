import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";
// import { Navigate } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon }) => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const value = params.get("category");
  // console.log(value);

  const handleclick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery = {
      ...currentQuery,
      category: label,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );
    navigate(url);
  };

  return (
    <div
      onClick={handleclick}
      className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500"
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;

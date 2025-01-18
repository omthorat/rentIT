"use client";
import ClipLoader from "react-spinners/ClipLoader";
const Loading = () => {
  const override = {
    display: "block",
    margin: "100px auto",
  };
  return <ClipLoader color="#4B0082" cssOverride={override} />;
};

export default Loading;

import { useState } from "react";
import Description from "./Components/Description";
import Image from "./Components/Image";
import Price from "./Components/Price";
import Name from "./Components/Name";
import product from "./product";
import Button from "react-bootstrap/Button";
import MyCard from "./Components/MyCard";

function App() {
  const { name, description, price, image } = product;

  return (
    <>
      {/* <Name name={name} />
      <Description description={description} />
      <Price price={price} />
      <Image image={image} /> */}
      <MyCard product={product} />
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Banner />
    </div>
  );
};

export default Home;

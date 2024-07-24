import React, { useState, useEffect, useMemo } from "react";
import "./gallery.css";
import Button from "@mui/material/Button";
import plant1 from "./images/plant1.jpg";
import plant2 from "./images/plant2.jpg";
import plant3 from "./images/plant3.jpg";
import plant4 from "./images/plant4.jpg";
import "react-slideshow-image/dist/styles.css";
const Galleryy = () => {
  const [imagesToo, setImagesToo] = useState([]);
  const images = useMemo(() => {
    return [plant1, plant2, plant3, plant4];
  }, []);
  useEffect(() => {
    const removeImage = (index) => {
      setImagesToo(images.filter((item) => item.index !== index));
    };
    removeImage(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    
      <section className="wrapper">
        {
          //loop through images array and display each image
          images.map((image, index) => {
            return (
              <img
                src={image}
                key={index}
                alt="plant"
                className={"images" + index}
                style={{ width: 300, height: 400 }}
              />
            );
          })
        }
        {imagesToo.map((image, index) => {
          return (
            <img
              src={image}
              key={index}
              alt="plant"
              className={"images" + index}
              style={{ width: 300, height: 400 }}
            />
          );
        })}
      </section>
  
  );
};

export default Galleryy;

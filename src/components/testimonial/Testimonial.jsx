import React, { useState } from "react";
import sunLogo from "../../assets/images/sunlogo.svg";
import star from "../../assets/images/star.svg";
import carousel1 from "../../assets/images/carousel1.png";
import carousel4 from "../../assets/images/carousel4.jpg";
import carousel5 from "../../assets/images/carousel5.jpg";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import play from "../../assets/images/Play.svg";
import "./testimonials.scss";
import { Center, Box } from "@chakra-ui/react";

const Testimonial = () => {
  const [imgArr, setImgArr] = useState([
    carousel1,
    carousel4,
    carousel5,
    carousel4,
    carousel5,
  ]);
  const shiftLeft = () => {
    setImgArr((arr) => {
      const temp = [...arr];
      const out = temp.pop();
      temp.unshift(out);
      return temp;
    });
  };
  const shiftRight = () => {
    setImgArr((arr) => {
      const temp = [...arr];
      const out = temp.shift();
      temp.push(out);
      return temp;
    });
  };

  return (
    <div className="testimonials">
      <div className="sun-logo">
        <img src={sunLogo} />
      </div>
      <div className="title">
        <span>
          <img src={star} />
        </span>
        <span>User Testimonial</span>
        <span>
          <img src={star} />
        </span>
      </div>
      <div className="carousel">
        {imgArr.map((val, ind) => {
          let classObj;
          if (ind === 0) {
            classObj = "img-wrapper small one";
          } else if (ind === 1) {
            classObj = "img-wrapper med two";
          } else if (ind === 2) {
            classObj = "img-wrapper large three";
          } else if (ind === 3) {
            classObj = "img-wrapper med four";
          } else if (ind === 4) {
            classObj = "img-wrapper small five";
          }

          return (
            <div className={classObj} key={ind}>
              <img className="main-img" src={val} />
              <img className="play-btn" src={play} />
            </div>
          );
        })}
      </div>
      <Center>
        <Box
          bg={"gray.300"}
          borderRadius="50%"
          w="10"
          marginRight={10}
          _hover={{
            background: "gray.200",
            color: "orange.500",
          }}
          onClick={shiftLeft}
          cursor="pointer"
        >
          <ChevronLeftIcon boxSize={10} />
        </Box>

        <Box
          bg={"gray.300"}
          borderRadius="50%"
          w="10"
          marginLeft={10}
          _hover={{
            background: "gray.200",
            color: "orange.500",
          }}
          onClick={shiftRight}
          cursor="pointer"
        >
          <ChevronRightIcon boxSize={10} />
        </Box>
      </Center>
    </div>
  );
};

export default Testimonial;

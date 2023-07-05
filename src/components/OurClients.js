import React from "react";
//Import Icons
import serviceCops from "../img/truck.gif";
import neptune from "../img/truck.png";

import schoolpay from "../img/schoolpay.png";
import gulapay from "../img/gulapay.png";
import seepug from "../img/seepug.png";
import wefarm from "../img/wefarm.png";
//Styles
import { About, DescriptionOurClients, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const OurClients = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <DescriptionOurClients>
        <Cards>
          <Card>
            <div className="icon">
              <div className="inner_circle">
                <Image>
                  <img src={serviceCops} alt="guy with a camera" />
                </Image>
              </div>
            </div>
            <div class="media-body">
              <h3 class="heading">Always Fresh</h3>
              <span>Product well package</span>
            </div>
          </Card>
          <Card>
            <div className="icon ic_2">
              <div className="inner_circle ">
                <i class="uil uil-truck"></i>
              </div>
            </div>
            <div class="media-body">
              <span>Quality Products</span>
              <h3 class="heading">Superior Quality</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <div className="inner_circle">
                <Image>
                  <img src={neptune} alt="guy with a camera" />
                </Image>
              </div>
            </div>
            <div class="media-body">
              <h3 class="heading">Free Shipping</h3>
              <span>On order over $100</span>
            </div>
          </Card>
          <Card>
            <div className="icon icon_c">
              <div className="inner_circle inner_last">
                <i class="uil uil-truck"></i>
              </div>
            </div>
            <div class="media-body">
              <h3 class="heading">Support</h3>
              <span>24/7 Support</span>
            </div>
          </Card>
        </Cards>
      </DescriptionOurClients>
    </Services>
  );
};

const Services = styled(About)`
height: 50vh;
  text-align: center;
  background: white;

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  margin: 0 auto;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 15rem;
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  row-gap: 1rem;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #e4b2d6;
    height: 10rem;
    width: 10rem;

    border-radius: 50%;

  
    .inner_circle {
      display:flex;
      align-items: center;
      justify-content: center;
      height: 8rem;
      width: 8rem;
      border-radius: 50%;
      border: 3px solid #e9c1de;

      img{
      border-radius: 50%;
      }

      i {
        font-size: 40px;
        color: #fff;
      }

    }    
   .inner_last{
        border: 3px solid #e3dea6;    
    }
   
  }
  .media-body{
    width:100%;
    h3 {
      font-size: 17px;
      text-transform: uppercase;
      font-weight: bolder;
      font-family: "Poppins", Arial, sans-serif;
      color: #000000;
      margin-bottom:.6rem
    }
    span {
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.5);
      font-size: 12px;
      font-weight: 500;
    }
  }
  .ic_2{
      background: #dcc698;
    }
  .icon_c{
      background: #dcd691;
  }
`;

export default OurClients;

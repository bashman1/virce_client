import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { base_url } from "../api";
import mimiNawewe from "../img/neverLetMeDown.webp"

const AboutDesc = () => {
  const [aboutDesc, setAboutDesc] = useState(null);

  useEffect(() => {
    const getAboutDesc = async () => {
      const { data: { data },
      } = await axios.post(base_url, { postData: "ABOUT_DESC" });
      setAboutDesc((prev) => data);
    };

    getAboutDesc();
  }, []);

  return (
    <StyledVegieRight>
      {aboutDesc && aboutDesc.map(obj =>
         <>
         <div className="vegie_right_header">
           <h2 className="mb-4">{obj.heading}</h2>
         </div>

         <div className="vegie_right_text">
           <p>
             {obj.aboutDescriptoin}
           </p>
         </div>
       </> ) }
    </StyledVegieRight>
  );
};

//Styled Components
const StyledVegieRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 3rem 10rem;
  background-image: url(${mimiNawewe});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .vegie_right_header {
    margin: 1.5rem 0;

    h2 {
      font-size: 40px;
      font-weight: 800;
      color: #000000;
      text-align: center;
    }
  }
  .vegie_right_text {
    p {
      margin-bottom: 1rem;
      line-height: 205%;
      color: #171616;;

      a {
        button {
          background: #82ae46;
          border: 1px solid #82ae46;
          color: #fff;
          border-radius: 2rem;
        }
      }
    }
  }
`;

export default AboutDesc;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
//Animations
import { motion } from "framer-motion";
import {
  photoAnim_contactUs,
  photoAnim,
  pageAnimation,
  fade,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";
// api
import axios from "axios";
import { base_url } from "../api";


const ContactUs = () => {
  const [element, controls] = useScroll();
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    telphone:"",
    subject:"",
    message:"",
    web_id:1,
    status:"Active",
    business_id:5,
    branch_id:5

  })
  const [contactUs, setContactUs] = useState(null);
  const [formSubmitCode, setFormSubmitCode] = useState(null)
  const [loanding, setLoading] = useState(false)


  useEffect(() => {
    const getcontactUs = async () => {
      const {data:{data}}= await axios.post(base_url, { postData: "CONTACT_US" });
      console.log("data--", data)
      setContactUs(prev => data);
    };

    getcontactUs();
  }, []);
  
  // ==================================== HANDLE FORM SUBMIT ===============================
  const handleSubmit = async(event) => {
      event.preventDefault();
      setLoading(prev => true)
      
      const {status}= await axios.post("https://virce.co.ug/core/api/public-web-contact-us", 
        formData , 
        { headers: {  'Content-Type': 'application/json'  }
        }); 
        setFormSubmitCode(prev => status)

        setTimeout(()=>{        
          setFormData(prevData => {
            return {...prevData, name:"",
            email:"",
            telphone:"",
            subject:"",
            message:"", }
          })
          setFormSubmitCode(prev => null)
          setLoading(prev => false)
        }, 3000)
  }

  // ======================================= HANDLE INPUT CHANGE ===========================
  const handleChange = (event) => {
    const {name, value} = event.target;
   
    setFormData(prevFormData => {
      return {
        ...prevFormData, [name]:value
      }

    })
  }

  // ================================== handle loanding


  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
    {contactUs &&
      contactUs.map(contactItem => 
        <>
          {contactItem.contactHeader && contactItem.contactHeader.map(headerItem => 
            <Movie>
              <Hide>
                <motion.img variants={photoAnim_contactUs} src={headerItem.imgSrc} alt={headerItem.imgDesc} />
                <div className="about_title">            
                  <h1 className="mb-0 bread">{headerItem.heading}</h1>
                  <p>{headerItem.subheading}</p>
                </div>
              </Hide>
            </Movie>
          )          
         }
          <StyledContact ref={element} variants={fade} animate={controls} initial="hidden">
          <ContactAddress>
            {contactItem.address && contactItem.address.map(addressItem => 
              <>
                  {addressItem.physical && <p><span>Address:</span> {addressItem.physical}</p>}
                  {addressItem.Phone && <p><span>Phone:</span> <Link href={`tel://${addressItem.Phone}`}>{addressItem.Phone}</Link></p>}
                  {addressItem.website && <p><span>website:</span> {addressItem.website}</p>}
      
              </>
              )}
            </ContactAddress>
             {contactItem.formDetails && contactItem.formDetails.map(formItem => 
                <ContactForm ref={element} variants={fade} animate={controls} initial="hidden">
                   <GoogleMap>
                     <Hide>
                       <motion.img variants={photoAnim} src={formItem.formImg} alt={formItem.imgDesc} />
                     </Hide>
                   </GoogleMap>
   
                   <StyledForm>
                     <form onSubmit={handleSubmit} className="bg-white p-5 contact-form">
                       <div className="form-group">
                        <h2>{formItem.formTitle ? formItem.formTitle : "Form Title - (Not Set)"}</h2>
                       </div>
                        {formSubmitCode && <div className="form_success">Message Successfully Sent, thank you</div>}
                       <div className="form-group">
                         <input 
                           type="text" 
                           className="form-control" 
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           placeholder="Your Name" 
                         />
                       </div>
                       <div className="form-group">
                         <input type="text" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                         className="form-control" placeholder="Your Email" />
                       </div>
                       <div className="form-group">
                         <input type="tel" 
                          name="telphone"
                          value={formData.telphone}
                          onChange={handleChange}
                         className="form-control" placeholder="Your Phone" />
                       </div>
                       <div className="form-group">
                         <input type="text" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                         className="form-control" placeholder="Subject" />
                       </div>
                       <div className="form-group">
                         <textarea 
                         name="message" 
                         value={formData.message}
                         onChange={handleChange}
                         id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                       </div>
                       <div className="form-group"> 
                        <input type="submit" value={loanding ? "Sending..." : formItem.formTitle } className="btn btn-primary py-3 px-5" /> 
                       </div>
                     </form>
                   </StyledForm>
                    
   
           </ContactForm>)          
            }
             
             </StyledContact>
          
        </>
        )
      
    }
      <Footer />

      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  background: #f7f6f2 !important;
  
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled(motion.div)`
.about_title{
  position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: white;
}
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;  
  }
`;

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  row-gap:5rem;
  min-height:100vh;
  overflow:hidden;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const ContactForm = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height:100vh;
  overflow:hidden;
  width:100%;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const GoogleMap = styled.div`
  position: relative;
  height: inherit;
  flex:1;

  img{
    border-radius: 1.5rem;
  }
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
  padding:1.5rem 3rem;
  background:white;
  border-radius: 0rem 1rem 1rem 0rem;
  form{
    position: relative;
  }
  .form_success{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #5b1a0e;
    color: white;
    padding: 2rem;
    font-size: 1.1rem;
    width: 70%;
    border-radius: .5rem;
    text-align: center;
  }
  .form-group {
    margin-bottom: 1.5rem;
    h2{
       color: #000000 !important;
       text-align:center;
       font-weight:bolder;
    }
    .form-control {
      height: 52px !important;
      background: #fff !important;
      color: #000000 !important;
      display: block;
      width: 100%;
      padding: 0.375rem 0.75rem;
      border-radius: 1rem;
    }

    textarea.form-control {
      height: inherit !important;
    }
    .btn.btn-primary {
      background: #82ae46;
      border: 1px solid #82ae46;
      color: #fff;
      border-radius: 30px;
      box-shadow: 0px 24px 36px -11px rgba(0, 0, 0, 0.09);
      padding:1rem 3rem 1rem 0rem;
      width: 50%;
      cursor: pointer;
    }
  }
  
`
const ContactAddress = styled.div`
  display:flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  column-gap: 2rem;

  p{
    background: #fff;
    padding: 2rem;
    flex:1;
    height: 10rem;
    border-radius: 1rem;
    text-align:center;

    .mouse-icon{
      width: 100px;
      height: 100px;
      border: 1px solid rgba(255, 255, 255, 0.7);
      border-radius: 50%;
      background: #82ae46;
      cursor: pointer;
      position: relative;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;

      .mouse-wheel{
        i{
          font-size: 3rem;
          color: white;
        }
      }
    }
  }
`;


const Hide = styled.div`
  overflow: hidden;
  position:relative;

`;

//Frame Animation




export default ContactUs;

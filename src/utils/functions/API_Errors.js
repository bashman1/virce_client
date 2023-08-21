import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion"

export const handleAPIError = (errorMessage) => {
  return (
    <StyledError className="error_msg">{errorMessage}</StyledError>
  )
}

const StyledError = styled(motion.div)`


`
import styled from "styled-components";

// InputTextArea
const inputStyles = css`
  color: #aeaeae;
  background-color: #fff;
  border: 1px solid #aeaeae;
  border-radius: 5px;
  resize: none;
  width: 500px;
  text-indent: 10px;
  padding-top: 10px;
  height: 220px;
  margin-left: 10px;

  &:hover {
    border-color: #212121;
  }
`;

export const InputTextArea = styled.textarea`
  ${inputStyles}

  &:focus {
    outline: none;
    border-color: #58c5c6;
  }
`;
// ------


export const Image = styled.img`
  height: 100%;

  @media screen and (min-width: 768px) and (max-width: 1367px) {
    height: 440px;
  }

  @media screen and (min-width: 1367px) and (max-width: 1537px) {
    height: 500px;
  }
`;
 
// <ButtonV
//             activeClass="active"
//             className="clickpointer clickButtonMotives"
//             to="sct-formularios"
//             spy={true}
//             smooth={true}
//             duration={500}
//           >
//             Abrir
//   </ButtonV>

export const ButtonV = styled(Link)`
  color: #fff !important;
  font-family: "Source Sans Pro" !important;
  font-size: 24px;
  font-weight: 600 !important;
  width: 199px !important;
  height: 58px;
  background: #002c43;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;

  @media screen and (min-width: 768px) and (max-width: 1367px) {
    width: 180px;
    height: 45px;
    font-size: 20px;
  }

  @media screen and (min-width: 1367px) and (max-width: 1537px) {
    width: 180px;
    height: 45px;
    font-size: 20px;
  }

  :hover {
    font-family: "Source Sans Pro";
    background-color: #fff;
    border: 1px solid #002c43 !important;
    text-decoration: none !important;
    color: #002c43 !important;
  }
`;

export const ButtonF = styled(Link)`
  background-color: #002c43;
  color: #fff;
  font-family: "Source Sans Pro" !important;
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 24px;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  width: 199px;
  height: 58px;

  @media screen and (min-width: 768px) and (max-width: 1367px) {
    width: 180px;
    height: 45px;
    font-size: 20px !important;
    padding: 7px !important;
  }

  @media screen and (min-width: 1367px) and (max-width: 1537px) {
    width: 180px;
    height: 45px;
    font-size: 20px !important;
    padding: 7px !important;
  }

  :hover {
    background: none;
    color: #002c43;
    outline: 1px solid #002c43;
    text-decoration: none;
    transition: all 0.25s ease;
  }
`;

export const ContainerFooter = styled.div`
  width: 100%;
  height: 340px;
  background-color: #e3e3e3;
  display: flex;
  justify-content: space-between;
`;

export const ContainerDiv1 = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 52px;

  span {
    display: flex;
    flex-direction: column;
    width: 40%;

    @media screen and (min-width: 768px) and (max-width: 1367px) {
      width: 50%;
    }

    @media screen and (min-width: 1367px) and (max-width: 1537px) {
      width: 50%;
    }
  }

  h2 {
    font-size: 24px;
    font-family: Source Sans Pro;
    font-weight: 700;
    line-height: 24px;
    color: #002c43;
    margin-bottom: 24px;
  }

  p {
    font-size: 20px;
    font-family: Source Sans Pro;
    font-weight: 600;
    line-height: 20px;
    color: #7b7b7b;

    @media screen and (min-width: 768px) and (max-width: 1367px) {
      font-size: 18px;
    }

    @media screen and (min-width: 1367px) and (max-width: 1537px) {
      font-size: 18px;
    }
  }
`;

export const ContainerDiv2 = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 52px;

  span {
    display: flex;
    flex-direction: column;
    width: 77%;
    font-family: Source Sans Pro;
    font-size: 20px;

    @media screen and (min-width: 768px) and (max-width: 1367px) {
      width: 100%;
    }

    @media screen and (min-width: 1367px) and (max-width: 1537px) {
      width: 100%;
    }
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    font-family: Source Sans Pro;
    color: #002c43;
    margin-bottom: 24px;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    font-family: Source Sans Pro;
    color: #7b7b7b;
    line-height: 24px;

    @media screen and (min-width: 768px) and (max-width: 1367px) {
      font-size: 18px;
    }

    @media screen and (min-width: 1367px) and (max-width: 1537px) {
      font-size: 18px;
    }
  }
`;

export const ContainerDiv2Icons = styled.div`
  display: flex;
  margin-top: 10px;

  img {
    width: 32px;
    height: 32px;
  }

  p {
    font-weight: 700;
    font-size: 20px;
    padding: 3px 37px 0px 12px;

    @media screen and (min-width: 768px) and (max-width: 1367px) {
      font-size: 18px;
      padding-left: 10px;
    }

    @media screen and (min-width: 1367px) and (max-width: 1537px) {
      font-size: 18px;
      padding-left: 10px;
    }
  }
`;

export const ContainerDiv3 = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 52px;

  span {
    display: flex;
    flex-direction: column;
    width: 28%;

    @media screen and (min-width: 768px) and (max-width: 1367px) {
      width: 35%;
    }

    @media screen and (min-width: 1367px) and (max-width: 1537px) {
      width: 35%;
    }
  }

  h2 {
    font-size: 24px;
    font-family: Source Sans Pro;
    font-weight: 700;
    color: #002c43;
  }
`;

export const ContainerDiv3Icons = styled.div`
  display: flex;
  margin-top: 10px;

  img {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }
`;

export const InputTextArea = styled.textarea`
  color: #aeaeae !important;
  background-color: #fff !important;
  border: 1px solid #aeaeae !important;
  border-radius: 5px !important;
  resize: none;
  width: 500px;
  text-indent: 10px;
  padding-top: 10px;
  height: 220px;
`;

import styled from "styled-components";

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

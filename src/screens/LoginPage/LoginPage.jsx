import React from "react";
import styled from "styled-components";

const StyledLoginPage = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  & .div {
    background-color: #ffffff;
    height: 800px;
    position: relative;
    width: 1500px;
  }

  & .group {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0px 10px 40px #00000029;
    height: 961px;
    left: 833px;
    position: absolute;
    top: 40px;
    width: 1047px;
  }

  & .group-2 {
    height: 555px;
    left: 111px;
    position: relative;
    top: 203px;
    width: 826px;
  }

  & .don-t-have-an {
    color: transparent;
    font-family: "Poppins", Helvetica;
    font-size: 18px;
    font-weight: 400;
    left: 242px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 528px;
  }

  & .text-wrapper {
    color: #04072e;
  }

  & .span {
    color: #04072e;
    font-weight: 700;
  }

  & .text-wrapper-2 {
    color: #f78719;
    font-weight: 700;
    text-decoration: underline;
  }

  & .group-3 {
    height: 488px;
    left: 0;
    position: absolute;
    top: 0;
    width: 836px;
  }

  & .text-wrapper-3 {
    color: var(--text-color);
    font-family: var(--heading-1-bold-48-font-family);
    font-size: var(--heading-1-bold-48-font-size);
    font-style: var(--heading-1-bold-48-font-style);
    font-weight: var(--heading-1-bold-48-font-weight);
    height: 53px;
    left: 346px;
    letter-spacing: var(--heading-1-bold-48-letter-spacing);
    line-height: var(--heading-1-bold-48-line-height);
    position: absolute;
    text-align: center;
    top: 0;
    white-space: nowrap;
  }

  & .text-wrapper-4 {
    color: var(--text-color);
    font-family: var(--label-medium-18-font-family);
    font-size: var(--label-medium-18-font-size);
    font-style: var(--label-medium-18-font-style);
    font-weight: var(--label-medium-18-font-weight);
    left: 0;
    letter-spacing: var(--label-medium-18-letter-spacing);
    line-height: var(--label-medium-18-line-height);
    position: absolute;
    top: 93px;
    white-space: nowrap;
  }

  & .text-wrapper-5 {
    color: var(--text-color);
    font-family: var(--label-medium-18-font-family);
    font-size: var(--label-medium-18-font-size);
    font-style: var(--label-medium-18-font-style);
    font-weight: var(--label-medium-18-font-weight);
    left: 0;
    letter-spacing: var(--label-medium-18-letter-spacing);
    line-height: var(--label-medium-18-line-height);
    position: absolute;
    top: 217px;
    white-space: nowrap;
  }

  & .text-wrapper-6 {
    color: var(--secondary-1);
    font-family: var(--body-light-regular-18-font-family);
    font-size: var(--body-light-regular-18-font-size);
    font-style: var(--body-light-regular-18-font-style);
    font-weight: var(--body-light-regular-18-font-weight);
    left: 660px;
    letter-spacing: var(--body-light-regular-18-letter-spacing);
    line-height: var(--body-light-regular-18-line-height);
    position: absolute;
    text-align: right;
    top: 329px;
    white-space: nowrap;
  }

  & .overlap {
    border: 1px solid;
    border-color: #04072e66;
    border-radius: 8px;
    height: 56px;
    left: 0;
    position: absolute;
    top: 129px;
    width: 824px;
  }

  & .text-wrapper-7 {
    color: var(--light-color-1);
    font-family: var(--placeholder-regular-18-font-family);
    font-size: var(--placeholder-regular-18-font-size);
    font-style: var(--placeholder-regular-18-font-style);
    font-weight: var(--placeholder-regular-18-font-weight);
    left: 15px;
    letter-spacing: var(--placeholder-regular-18-letter-spacing);
    line-height: var(--placeholder-regular-18-line-height);
    position: absolute;
    top: 17px;
    white-space: nowrap;
  }

  & .overlap-group {
    border: 1px solid;
    border-color: #04072e66;
    border-radius: 8px;
    height: 56px;
    left: 0;
    position: absolute;
    top: 253px;
    width: 824px;
  }

  & .img {
    height: 24px;
    left: 783px;
    position: absolute;
    top: 15px;
    width: 24px;
  }

  & .overlap-group-wrapper {
    height: 56px;
    left: 143px;
    position: absolute;
    top: 432px;
    width: 540px;
  }

  & .div-wrapper {
    background-color: var(--primary-1);
    border-radius: 8px;
    height: 56px;
    position: relative;
    width: 538px;
  }

  & .text-wrapper-8 {
    color: var(--white-color);
    font-family: var(--button-medium-18-font-family);
    font-size: var(--button-medium-18-font-size);
    font-style: var(--button-medium-18-font-style);
    font-weight: var(--button-medium-18-font-weight);
    left: 244px;
    letter-spacing: var(--button-medium-18-letter-spacing);
    line-height: var(--button-medium-18-line-height);
    position: absolute;
    top: 18px;
    white-space: nowrap;
  }

  & .group-4 {
    height: 20px;
    left: 0;
    position: absolute;
    top: 329px;
    width: 158px;
  }

  & .text-wrapper-9 {
    color: var(--light-color-1);
    font-family: var(--body-light-regular-18-font-family);
    font-size: var(--body-light-regular-18-font-size);
    font-style: var(--body-light-regular-18-font-style);
    font-weight: var(--body-light-regular-18-font-weight);
    left: 24px;
    letter-spacing: var(--body-light-regular-18-letter-spacing);
    line-height: var(--body-light-regular-18-line-height);
    position: absolute;
    top: 0;
    white-space: nowrap;
  }

  & .rectangle {
    border: 1px solid;
    border-color: #727b85;
    border-radius: 4px;
    height: 16px;
    left: 0;
    position: absolute;
    top: 2px;
    width: 16px;
  }

  & .group-5 {
    height: 27px;
    left: 0;
    position: absolute;
    top: 365px;
    width: 283px;
  }

  & .agree-to-terms {
    color: transparent;
    font-family: "Poppins", Helvetica;
    font-size: 18px;
    font-weight: 400;
    left: 24px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 0;
  }

  & .text-wrapper-10 {
    color: #727b85;
  }

  & .text-wrapper-11 {
    color: #f78719;
    text-decoration: underline;
  }

  & .rectangle-2 {
    border: 1px solid;
    border-color: #727b85;
    border-radius: 4px;
    height: 16px;
    left: 0;
    position: absolute;
    top: 6px;
    width: 16px;
  }

  & .group-6 {
    height: 634px;
    left: 142px;
    position: absolute;
    top: 203px;
    width: 543px;
  }
`;

export const LoginPage = () => {
  return (
    <StyledLoginPage>
      <div className="div">
        <div className="group">
          <div className="group-2">
            <p className="don-t-have-an">
              <span className="text-wrapper">Don’t have an account?</span>
              <span className="span">&nbsp;</span>
              <span className="text-wrapper-2">Register Here</span>
            </p>
            <div className="group-3">
              <div className="text-wrapper-3">Login</div>
              <div className="text-wrapper-4">Login ID</div>
              <div className="text-wrapper-5">Password</div>
              <div className="text-wrapper-6">Change Password</div>
              <div className="overlap">
                <div className="text-wrapper-7">Enter Login ID</div>
              </div>
              <div className="overlap-group">
                <div className="text-wrapper-7">Enter Password</div>
                <img
                  className="img"
                  alt="Group"
                  src="https://c.animaapp.com/bq6MBBic/img/group-3287@2x.png"
                />
              </div>
              <div className="overlap-group-wrapper">
                <div className="div-wrapper">
                  <div className="text-wrapper-8">Login</div>
                </div>
              </div>
              <div className="group-4">
                <div className="text-wrapper-9">Remember Me</div>
                <div className="rectangle" />
              </div>
              <div className="group-5">
                <p className="agree-to-terms">
                  <span className="text-wrapper-10">Agree to </span>
                  <span className="text-wrapper-11">
                    Terms &amp; Conditions
                  </span>
                </p>
                <div className="rectangle-2" />
              </div>
            </div>
          </div>
        </div>
        <img
          className="group-6"
          alt="Group"
          src="https://c.animaapp.com/bq6MBBic/img/group-3608.png"
        />
      </div>
    </StyledLoginPage>
  );
};

import styled from '@emotion/styled';
import React from 'react';

const ButtonGroup = styled.span`
  display: flex;
  margin-top: 50px;
`;

const ButtonOne = styled.span`
  padding-right: 48px;
`;

const ButtonColor = styled.button`
  cursor: pointer;
  width: 63px;
  height: 32px;
  background-color: #000000;
  border: 1px solid #ffffff;
  border-radius: 6px;
  .button_font {
    color: #ffffff;
    text-align: center;
  }
`;

const Button: React.FC = () => {
  return (
    <ButtonGroup>
      <ButtonOne>
        <ButtonColor>
          <div className="button_font">9기</div>
        </ButtonColor>
      </ButtonOne>
      <ButtonOne>
        <ButtonColor>
          <div className="button_font">8기</div>
        </ButtonColor>
      </ButtonOne>
      <ButtonOne>
        <ButtonColor>
          <div className="button_font">7기</div>
        </ButtonColor>
      </ButtonOne>
    </ButtonGroup>
  );
};

export default Button;

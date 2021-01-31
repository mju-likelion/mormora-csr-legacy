import styled from '@emotion/styled';
import React from 'react';

const ButtonBlock = styled.div`
  display: flex;
`;

const ButtonOne = styled.div`
  padding-right: 48px;
`;

const ButtonColor = styled.button`
  background-color: #000;
  width: 63px;
  height: 32px;
  border: 1px solid #fff;
  border-radius: 6px;
  cursor: pointer;

  .button_font {
    color: #fff;
    text-align: center;
  }
`;

const ButtonGroup: React.FC = () => {
  return (
    <ButtonBlock>
      <ButtonOne>
        <ButtonColor>
          <div className='button_font'>9기</div>
        </ButtonColor>
      </ButtonOne>
    </ButtonBlock>
  );
};

export default ButtonGroup;

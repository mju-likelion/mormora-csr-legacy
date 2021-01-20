import styled from '@emotion/styled';

interface UIImgProps {
  src: SVGElement | string;
  width: string | number;
  height: string | number;
}

const UIImg = styled.span`
  display: inline-block;
  ${(props: UIImgProps) =>
    props.src && `background: url(${props.src}) no-repeat center`};
  background-size: contain;
  ${(props: UIImgProps) => props.width && `width: ${props.width}`};
  ${(props: UIImgProps) => props.height && `height: ${props.height}`};
`;

export default UIImg;

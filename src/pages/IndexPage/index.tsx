/* @jsx jsx */

import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

const Highlight = styled.span`
  font-weight: 400;
`;

const IndexPage: ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <div
    className="page"
    ref={ref}
    css={css`
      z-index: 10;
      
      height: 100%;

      font-weight: 300;
      font-size: 4vw;
      line-height: 108.5%;
      letter-spacing: -0.1rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
    `}
  >
    <span css={css`
      margin-left: 4rem;
    `}>
      <Highlight>데일리 백준</Highlight>으로<br />
      <Highlight>하루</Highlight>에 적어도 <Highlight>한 문제</Highlight>는<br />
      풀어봅시다
    </span>
  </div>
);

export default forwardRef(IndexPage);
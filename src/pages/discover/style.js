import styled from 'styled-components';

export const SubNavWrapper = styled.div`
  height: 35px;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
`;

export const SubNavList = styled.ul`
  float: left;
  padding-left: 180px;
  .item {
    float: left;
    height: 20px;
  }
  a {
    float: left;
    display: inline-block;
    padding: 0 13px;
    margin: 8px 10px 0;
    border-radius: 20px;
    color: #fff;
    &:hover,
    &.item-active {
      text-decoration: none;
      height: 20px;
      background: #9b0909;
    }
  }
`;

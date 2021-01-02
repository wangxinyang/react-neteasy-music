import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 100%;
  height: 285px;
  background: url('${(props) => props.bgImage}') center center/6000px;
  .banner {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 980px;
    height: 100%;
    margin: 0 auto;
  }
`;

export const BannerLeft = styled.div`
  width: 730px;
  img {
    width: 100%;
    height: 285px;
  }
`;

export const BannerRight = styled.div`
  width: 250px;
  position: relative;
  a {
    display: block;
    height: 285px;
    background: url(${require('../../../../../../assets/images/download.png')
      .default});
    text-indent: -9999px;
  }
  p {
    position: absolute;
    left: 10px;
    bottom: 10px;
    color: #8d8d8d;
    text-align: center;
  }
`;

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('../../../../../../assets/images/banner_sprite.png')
      .default});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    &:nth-child(1) {
      left: -68px;
      background-position: 0 -360px;
    }
    &:nth-child(2) {
      right: -68px;
      background-position: 0 -508px;
    }
  }
`;

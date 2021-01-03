import styled from 'styled-components';

export const ThemeHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 33px;
  border-bottom: 2px solid #c10d0c;
  background: url(${require('../../assets/images/sprite_02.png').default})
    no-repeat -225px -156px;
  line-height: 33px;
`;

export const ThemeHeaderLeft = styled.div`
  display: flex;

  .title {
    color: #333;
    font-size: 20px;
    font-weight: normal;
    text-decoration: none;
    margin-left: 30px;
    line-height: 28px;
  }

  .keywords {
    display: flex;
    margin-left: 20px;

    a {
      color: #666;
    }

    .cat-item {
      &:last-child {
        border-right: none;
      }

      .line {
        margin: 0 10px;
      }

      &:last-child span {
        display: none;
      }
    }
  }
`;

export const ThemeHeaderRight = styled.div`
  display: flex;
  margin-right: 15px;

  .more-info {
    color: #666;
  }

  .more-info-logo {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 10px 0 0 4px;
    background: transparent
      url(${require('../../assets/images/sprite_02.png').default}) no-repeat
      center;
    background-position: 0 -240px;
  }
`;

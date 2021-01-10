import styled from 'styled-components';

export const TopListWrapper = styled.div`
  width: 230px;

  .rank-header {
    display: flex;
    height: 100px;
    padding: 20px 0 0 19px;

    .image {
      width: 80px;
      height: 80px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .tit {
      width: 116px;
      margin: 6px 0 0 10px;

      .btn {
        display: flex;
        margin-top: 8px;

        .play,
        .favourite {
          display: block;
          width: 22px;
          height: 22px;
        }
        .play {
          background-position: -267px -205px;
          margin-right: 8px;

          &:hover {
            cursor: pointer;
            background-position: -267px -235px;
          }
        }

        .favourite {
          background-position: -300px -205px;

          &:hover {
            cursor: pointer;
            background-position: -300px -235px;
          }
        }
      }
    }
  }

  .rank-list {
    height: 319px;
    line-height: 32px;
    margin: 20px 0 0 30px;

    .rank-item {
      display: flex;
      justify-content: left;

      .rank-index {
        width: 35px;
        height: 32px;
        font-size: 16px;
      }

      .rank-name {
        width: 170px;
        font-size: 12px;

        &:hover {
          width: 98px;
        }
      }

      .oper {
        display: flex;
        align-items: center;
        visibility: hidden;
        width: 0;
        text-indent: -9999px;

        .btn {
          width: 17px;
          height: 17px;
          margin-left: 8px;
          cursor: pointer;
        }

        .play {
          background-position: -267px -268px;
        }

        .addto {
          position: relative;
          top: 2px;
          background-position: 0 -700px;
        }

        .favourite {
          background-position: -297px -268px;
        }
      }
    }
  }

  .rank-footer {
    height: 33px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .show-all {
      margin-right: 15px;
    }
  }
`;

import styled from 'styled-components';

export const SongCoverWrapper = styled.a`
  width: 140px;
  margin: 20px 0 20px 0;
  display: inline-block;

  .cover-wrapper {
    position: relative;
    width: 140px;
    height: 140px;

    img {
      width: 100%;
    }

    .cover-mask {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 0;

      .bottom-bar {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 27px;
        top: 113px;
        color: #ccc;
        background: url(${require('../../assets/images/sprite_cover.png')
            .default})
          no-repeat 0 -537px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;

        .erji {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background: url(${require('../../assets/images/sprite_icon.png')
              .default})
            no-repeat;
          background-position: 0 -24px;
        }

        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background: url(${require('../../assets/images/sprite_icon.png')
              .default})
            no-repeat;
          background-position: 0 0px;
        }
      }
    }
  }

  .desc {
    margin: 8px 0 3px;
    font-size: 14px;
    color: #333;
  }
`;

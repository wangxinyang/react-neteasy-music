import React from 'react';
import { SongCoverWrapper } from './style';
import { getSizeImage, getCount } from '../../utils/format-utils';

export default function SongCover(props) {
  const { info } = props;
  // pic
  const picUrl = info && info.picUrl;
  // playCount 播放次数
  const playCount = info && info.playCount;
  // name
  const name = info && info.name;
  // id
  const songInfoId = info && info.id;

  return (
    <SongCoverWrapper href={`#/songlist?songlistId=${songInfoId}`}>
      <div className="cover-wrapper">
        <img src={getSizeImage(picUrl, 140)} alt="" />
        <div className="cover-mask">
          <div className="bottom-bar">
            <span>
              <i className="erji"></i>
              {getCount(playCount)}
            </span>
            <i className="play"></i>
          </div>
        </div>
      </div>
      <p className="desc">{name}</p>
    </SongCoverWrapper>
  );
}

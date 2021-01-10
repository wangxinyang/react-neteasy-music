/* eslint-disable jsx-a11y/anchor-has-content */
import React, { memo } from 'react';
import { TopListWrapper } from './style';
import { getSizeImage } from '../../utils/format-utils';

export default memo(function TopList(props) {
  const { info } = props;
  const { tracks = [] } = info;

  const playMusic = (e, item) => {};

  const addPlaylist = (e, id) => {};

  return (
    <TopListWrapper>
      <div className="rank-header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 100)} alt={info.name} />
          <a href="/discover/toplist?id=19723756" title={info.name}></a>
        </div>
        <div className="tit">
          <div>
            <h3>{info.name}</h3>
          </div>
          <div className="btn">
            <a
              href="/discover/recommended"
              className="sprite_02 text-indent play"
            >
              播放
            </a>
            <a
              href="/discover/recommended"
              className="sprite_02 text-indent favourite"
            >
              收藏
            </a>
          </div>
        </div>
      </div>
      <div className="rank-list">
        {tracks &&
          tracks.length > 0 &&
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={index} className="rank-item">
                <div className="rank-index">{index + 1}</div>
                <a
                  href="/discover/recommended"
                  className="rank-name text-nowrap"
                >
                  {item.name}
                </a>
                <div className="oper">
                  <a
                    href="/discover/recommended"
                    className="sprite_02 btn play"
                    onClick={(e) => playMusic(e, item)}
                  >
                    {item.name}
                  </a>
                  <a
                    href="/discover/recommended"
                    className="sprite_icon2 btn addto"
                    onClick={(e) => addPlaylist(e, item.id)}
                  >
                    {item.name}
                  </a>
                  <a href="/play" className="no-link sprite_02 btn favourite">
                    {item.name}
                  </a>
                </div>
              </div>
            );
          })}
      </div>
      <div className="rank-footer">
        <a href="/all" className="no-link show-all">
          查看全部&gt;
        </a>
      </div>
    </TopListWrapper>
  );
});

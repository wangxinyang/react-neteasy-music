import React, { memo } from 'react';
import { AlbumCoverWrapper } from './style';
import { getSizeImage } from '../../utils/format-utils';

export default memo(function AlbumCover(props) {
  // 对图片使用工具函数限制大小
  const {
    info,
    width = '118px',
    height = '150px',
    position = '-845px',
    size = 100,
  } = props;

  return (
    <AlbumCoverWrapper width={width} height={height} position={position}>
      <div className="album-cover">
        <div className="album-image">
          <img src={getSizeImage(info.picUrl, size)} alt={info.name} />
          <a
            href={`/album?id=${info.artist.id}`}
            className="no-link image_cover cover"
          >
            album
          </a>
        </div>
        <p>
          <a href={`/album?id=${info.artist.id}`} className="album-name">
            {info.name}
          </a>
        </p>
        <p>
          <a href={`/artist?id=${info.artist.id}`} className="artist">
            {info.artist.name}
          </a>
        </p>
      </div>
    </AlbumCoverWrapper>
  );
});

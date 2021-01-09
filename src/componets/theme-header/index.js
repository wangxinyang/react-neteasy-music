import React, { memo } from 'react';
import { ThemeHeaderWrapper, ThemeHeaderLeft, ThemeHeaderRight } from './style';

const ThemeHeader = function ThemeHeader(props) {
  const { title, keywords } = props;
  return (
    <ThemeHeaderWrapper>
      {/* 左侧标题图标 */}
      <ThemeHeaderLeft>
        <a href="/discover/playList" className="title">
          {title}
        </a>
        <ul className="keywords">
          {keywords &&
            keywords.map((item) => {
              return (
                <li key={item} className="cat-item">
                  <a href={`/discover/playList/?cat=${item}`}>{item}</a>
                  <span className="line">|</span>
                </li>
              );
            })}
        </ul>
      </ThemeHeaderLeft>
      {/* 右侧更多选项 */}
      <ThemeHeaderRight>
        <a href="/discover/playlist/" className="more-info">
          更多
        </a>
        <i className="more-info-logo"></i>
      </ThemeHeaderRight>
    </ThemeHeaderWrapper>
  );
};

export default memo(ThemeHeader);

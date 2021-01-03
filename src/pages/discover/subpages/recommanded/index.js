import React from 'react';
import TopBanner from './componets/topBanner';
import HotRecommanded from './componets/hotRecommanded';
import { ContentWrapper, ContentLeft, ContentRight } from './style';

export default function Recommanded() {
  return (
    <div>
      {/* 走马灯banner部分 */}
      <TopBanner />
      {/* 实际内容区域 */}
      <ContentWrapper className="w">
        {/* 内容区域左边部分 */}
        <ContentLeft>
          {/* 热门推荐 */}
          <HotRecommanded />
        </ContentLeft>
        {/* 内容区域右边部分 */}
        <ContentRight></ContentRight>
      </ContentWrapper>
    </div>
  );
}

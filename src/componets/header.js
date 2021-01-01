import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <>
      <div className="topbar">
        <div className="header_top">
          <div className="w">
            <h1 className="logo">
              <Link to="#">网易云音乐</Link>
            </h1>
            {/* nav start */}
            <div className="nav_items fl">
              <ul>
                <li>
                  <Link to="/discover" className="z-slt">
                    <em>发现音乐</em>
                    <sub className="cor">&nbsp;</sub>
                  </Link>
                </li>
                <li>
                  <Link to="/my">
                    <em>我的音乐</em>
                  </Link>
                </li>
                <li>
                  <Link to="/friend">
                    <em>朋友</em>
                  </Link>
                </li>
                <li>
                  <Link to="/product">
                    <em>商城</em>
                  </Link>
                </li>
                <li>
                  <Link to="/artist">
                    <em>音乐人</em>
                  </Link>
                </li>
                <li className="lst">
                  <Link to="/download">
                    <em>下载客户端</em>
                    <sub className="hot">&nbsp;</sub>
                  </Link>
                </li>
              </ul>
            </div>
            {/* nav end  */}
            {/* login start */}
            <div className="login">
              <Link to="#">登录</Link>
            </div>
            {/* login end */}
            {/* 创作者中心 start */}
            <Link to="#" className="creator-center">
              创作者中心
            </Link>
            {/* 创作者中心 end */}
            {/* 搜索框 start */}
            <div className="search">
              <span className="search_parent">
                <input type="text" className="search_text" />
              </span>
            </div>
            {/* 搜索框 end */}
          </div>
        </div>
      </div>
    </>
  );
}

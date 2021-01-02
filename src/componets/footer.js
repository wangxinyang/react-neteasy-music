/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <div className="copy-flex w">
        <div className="copy">
          <p className="services">
            <a
              href="https://st.music.163.com/official-terms/service"
              target="_blank"
              rel="noreferrer"
            >
              服务条款
            </a>
            <a
              href="https://st.music.163.com/official-terms/privacy"
              target="_blank"
              rel="noreferrer"
            >
              隐私政策
            </a>
            <a
              href="https://st.music.163.com/official-terms/children"
              target="_blank"
              rel="noreferrer"
            >
              儿童隐私政策
            </a>
            <a
              href="https://music.163.com/st/staticdeal/complaints.html"
              target="_blank"
              rel="noreferrer"
            >
              版权投诉指引
            </a>
            <a href="#">意见反馈</a>
          </p>
          <p>
            <span>网易公司版权所有©1997-2021</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a
              href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
              target="_blank"
              rel="noreferrer"
            >
              浙网文[2018]3506-263号
            </a>
          </p>
          <p>
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：</span>
            <a href="mailto:ncm5990@163.com" target="_blank" rel="noreferrer">
              ncm5990@163.com
            </a>
          </p>
          <p>
            <span>粤B2-20090191-18</span>
            <a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              target="_blank"
              rel="noreferrer"
            >
              工业和信息化部备案管理系统网站
            </a>
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
              target="_blank"
              rel="noreferrer"
            >
              <span className="police-logo"></span>
              <span>浙公网安备 33010902002564号</span>
            </a>
          </p>
        </div>
        {/* copy end */}
        <ul className="enter-if">
          <li className="item">
            <a
              href="https://music.163.com/#/download"
              target="_blank"
              rel="noreferrer"
            ></a>
            <span></span>
          </li>
          <li className="item">
            <a
              href="https://music.163.com/#/download"
              target="_blank"
              rel="noreferrer"
            ></a>
            <span></span>
          </li>
          <li className="item">
            <a
              href="https://music.163.com/#/download"
              target="_blank"
              rel="noreferrer"
            ></a>
            <span></span>
          </li>
          <li className="item">
            <a
              href="https://music.163.com/#/download"
              target="_blank"
              rel="noreferrer"
            ></a>
            <span></span>
          </li>
          <li className="item">
            <a
              href="https://music.163.com/#/download"
              target="_blank"
              rel="noreferrer"
            ></a>
            <span></span>
          </li>
        </ul>
      </div>
    </div>
  );
}

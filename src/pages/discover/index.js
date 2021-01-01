import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import { SubNavWrapper, SubNavList } from './style';
import { dicoverMenu } from '../../common/local-data';

// import http from '../../../service/http';

export default function Discover(props) {
  // 测试api接口是否成功
  // http
  //   .post('/cellphone/existence/check', { phone: '18725767885' })
  //   .then((res) => {
  //     console.log(res);
  //   });
  const { route } = props;
  return (
    <>
      <SubNavWrapper>
        <div className="w">
          <SubNavList>
            {dicoverMenu.map((item, index) => {
              return (
                <li key={index} className="item">
                  <NavLink to={item.link} activeClassName="item-active">
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </SubNavList>
        </div>
      </SubNavWrapper>
      {renderRoutes(route.children)}
    </>
  );
}

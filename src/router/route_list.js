import Discover from '../pages/discover';
import TopList from '../pages/discover/subpages/topList';
import PlayList from '../pages/discover/subpages/playList';
import DjRadio from '../pages/discover/subpages/djRadio';
import DArtist from '../pages/discover/subpages/artist';
import Album from '../pages/discover/subpages/album';
import Recommanded from '../pages/discover/subpages/recommanded';
import MyMusic from '../pages/myMusic';
import Friends from '../pages/friends';
import Product from '../pages/shop';
import Artist from '../pages/musicMan';
import Download from '../pages/download';
import { Redirect } from 'react-router-dom';

const routeList = [
  {
    name: '首页',
    path: '/',
    exact: true,
    render() {
      return <Redirect to="/discover" />;
    },
  },
  {
    path: '/discover',
    // 路由嵌套不能使用render返回
    // const { route } = props; 获取不到route
    // render() {
    //   return <Discover />;
    // },
    component: Discover,
    children: [
      {
        name: '推荐',
        path: '/discover',
        exact: true,
        render() {
          return <Redirect to="/discover/recommanded" />;
        },
      },
      {
        name: '推荐',
        path: '/discover/recommanded',
        render() {
          return <Recommanded />;
        },
      },
      {
        name: '排行榜',
        path: '/discover/toplist',
        render() {
          return <TopList />;
        },
      },
      {
        name: '歌单',
        path: '/discover/playList',
        render() {
          return <PlayList />;
        },
      },
      {
        name: '主播电台',
        path: '/discover/djRadio',
        render() {
          return <DjRadio />;
        },
      },
      {
        name: '歌手',
        path: '/discover/artist',
        render() {
          return <DArtist />;
        },
      },
      {
        name: '新碟上架',
        path: '/discover/album',
        render() {
          return <Album />;
        },
      },
    ],
  },
  {
    name: '我的音乐',
    path: '/my',
    render() {
      return <MyMusic />;
    },
  },
  {
    name: '朋友',
    path: '/friend',
    render() {
      return <Friends />;
    },
  },
  {
    name: '商城',
    path: '/product',
    render() {
      return <Product />;
    },
  },
  {
    name: '音乐人',
    path: '/artist',
    render() {
      return <Artist />;
    },
  },
  {
    name: '下载客户端',
    path: '/download',
    render() {
      return <Download />;
    },
  },
];

export default routeList;

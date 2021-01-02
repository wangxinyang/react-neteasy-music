import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import route from './router/route_list';
import Frame from './componets/frame';
import Footer from './componets/footer';

export default function App() {
  return (
    <BrowserRouter>
      <Frame />
      {renderRoutes(route)}
      <Footer />
    </BrowserRouter>
  );
}

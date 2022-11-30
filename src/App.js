import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ScrollToTop from './component/ScrollToTop';
import MainComponent from './page/Main';
import WorkComponent from './page/Work';
import ArtistComponent from './page/Artist';

const AppComponent = styled.div`
  font-family: 'Noto Sans CJK KR';
	font-size: 16px;
  font-weight: 400;
`

const App = () => {
  return (
    <AppComponent className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainComponent />}></Route>
          <Route path="/work" element={<WorkComponent />}></Route>
          <Route path="/shop" element={<MainComponent />}></Route>
          <Route path="/about" element={<MainComponent />}></Route>
          <Route path="/artist" element={<ArtistComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </AppComponent>
  );
}

export default App;

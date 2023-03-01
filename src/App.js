import React, { useState } from 'react';
import styled from 'styled-components';
import { HashRouter, Routes, Route } from 'react-router-dom';

import ScrollToTop from './component/ScrollToTop';
import MainComponent from './page/Main';
import WorkComponent from './page/Work';
import ArtistComponent from './page/Artist';
import IntroductionComponent from './page/Introduction';
import NavComponent from './component/Nav';

const AppComponent = styled.div`
  font-family: 'Noto Sans CJK KR';
	font-size: 16px;
  font-weight: 400;
`

const App = () => {
  const [isDarkNav, setDarkNav] = useState(true);

  return (
    <AppComponent className="App">
      <HashRouter basename="/">
        <ScrollToTop />
        <NavComponent dark={isDarkNav} />
        <Routes>
          <Route path="/" element={<MainComponent />}></Route>
          <Route path="/work" element={<WorkComponent />}></Route>
          <Route path="/shop" element={<MainComponent />}></Route>
          <Route path="/about" element={<MainComponent />}></Route>
          <Route path="/artist" element={<ArtistComponent />}></Route>
          <Route path="/artist/:name" element={<IntroductionComponent />}></Route>
        </Routes>
      </HashRouter>
    </AppComponent>
  );
}

export default App;

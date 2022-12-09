import React, { useState } from 'react';
import styled from 'styled-components';
import { HashRouter, Routes, Route } from 'react-router-dom';

import ScrollToTop from './component/ScrollToTop';
import MainComponent from './page/Main';
import WorkComponent from './page/Work';
import ArtistComponent from './page/Artist';
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
          <Route path="/" element={<MainComponent setDarkNav={setDarkNav} />}></Route>
          <Route path="/work" element={<WorkComponent setDarkNav={setDarkNav} />}></Route>
          <Route path="/shop" element={<MainComponent setDarkNav={setDarkNav} />}></Route>
          <Route path="/about" element={<MainComponent setDarkNav={setDarkNav} />}></Route>
          <Route path="/artist" element={<ArtistComponent setDarkNav={setDarkNav} />}></Route>
        </Routes>
      </HashRouter>
    </AppComponent>
  );
}

export default App;

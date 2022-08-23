import React from 'react';
import { Biography, Header, News } from './components';
import "./assets/sass/index.scss"
import { CreateNewsPage, MainPage, NewsPage } from './pages';
import { Footer } from './components/Footer/Footer';
import ProvidersAll from './helpers/ProvidersAll';
import { Route, Routes } from 'react-router-dom';
import { NewsItemPage } from './pages/NewsPage/[id]';

<Header />

const App: React.FC = () => {
  return (
    <ProvidersAll>
      <div className="wrapper">
        <Header />
        <main className='content'>
          <Routes>
              <Route element={<MainPage />} path="/" />
              <Route element={<NewsPage />} path="/news" />
              <Route element={<CreateNewsPage />} path="/create_news" />
              <Route element={<NewsItemPage />} path="/news/:id" />
              <Route element={<Biography />} path="/info" />
              <Route path="*" element={<NewsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ProvidersAll>
  );
}

export default App;

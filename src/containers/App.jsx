import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categoies from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState/';

const App = () => {
  const initialState = useInitialState(API);

  return (
    <div className='App'>
      <Header />
      <Search />
      {initialState.mylist.length > 0 && (
        <Categoies title='Mi lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categoies>
      )}
      <Categoies title='Trends'>
        <Carousel>
          {initialState.trends.length > 0 ?
            initialState.trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            )) :
            null}
        </Carousel>
      </Categoies>
      <Categoies title='Originals'>
        <Carousel>
          {initialState.originals.length > 0 ?
            initialState.originals.map((item) => (
              <CarouselItem key={item.id} {...item} />
            )) :
            null}
        </Carousel>
      </Categoies>
      <Footer />
    </div>
  );
};

export default App;

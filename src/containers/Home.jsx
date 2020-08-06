import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categoies from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const Home = ({ mylist, trends, originals }) => {
  console.log(mylist);
  return (
    <>
      <Header />
      <Search isHome />
      {mylist.length > 0 && (
        <Categoies title='Mi lista'>
          <Carousel>
            {mylist.length > 0 ?
              mylist.map((item) => (
                <CarouselItem key={item.id} {...item} isList />
              )) :
              null}
          </Carousel>
        </Categoies>
      )}
      <Categoies title='Trends'>
        <Carousel>
          {trends.length > 0 ?
            trends.map((item) => <CarouselItem key={item.id} {...item} />) :
            null}
        </Carousel>
      </Categoies>
      <Categoies title='Originals'>
        <Carousel>
          {originals.length > 0 ?
            originals.map((item) => <CarouselItem key={item.id} {...item} />) :
            null}
        </Carousel>
      </Categoies>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);

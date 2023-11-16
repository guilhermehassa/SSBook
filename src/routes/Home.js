
import React, { useState,clsx } from 'react';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import FavoriteBooks from '../components/FavoriteBooks';
import FavoriteAuthors from '../components/FavoriteAuthors';
import Library from '../components/Library';



function App() {

  return (
    <main>
      <section className="breadcrumb">
        <Container>
          <Link to='/' className='active' >
            Meus Livros
          </Link>
          <Link to='/'>
            Emprestados
          </Link>
        </Container>
      </section>
      <section className='sectionList favoriteBooks'>
        <Container>
          <div className='sectionList__title'>
            <h2>Livros favoritos</h2>
            <Link to='/' className='seeAll'>
              ver todos
            </Link>
          </div>

          <FavoriteBooks />
        </Container>
      </section>
      <section className='sectionList favoriteAuthors'>
        <Container>
          <div className='sectionList__title'>
            <h2>Autores favoritos</h2>
            <Link to='/' className='seeAll'>
              ver todos
            </Link>
          </div>

          <FavoriteAuthors />

        </Container>
      </section>

      <section className='sectionList library'>
        <Container>
          <div className='sectionList__title'>
            <h2>Biblioteca</h2>
          </div>

          <Swiper
            spaceBetween={8}
            slidesPerView={'auto'}
            className='sectionList__lib'
          >
            <SwiperSlide className='sectionList__lib___item active'>
              <Link to='/'>
                Todos
              </Link>
            </SwiperSlide>
            <SwiperSlide className='sectionList__lib___item'>
              <Link to='/'>
                Romance
              </Link>
            </SwiperSlide>
            <SwiperSlide className='sectionList__lib___item'>
              <Link to='/'>
                Aventuras
              </Link>
            </SwiperSlide>
            <SwiperSlide className='sectionList__lib___item'>
              <Link to='/'>
                Comédia
              </Link>
            </SwiperSlide>
          </Swiper>


          <Library />
        </Container>
      </section>
    </main>
  );
}

export default App;

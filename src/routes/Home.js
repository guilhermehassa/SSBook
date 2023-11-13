
import React, { useState,clsx } from 'react';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function App() {
  return (
    <div className="SSBook">
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

          <Swiper
            spaceBetween={20}
            slidesPerView={2.3}
          >
            <SwiperSlide className='favoriteBooks__item'>
              <Link to='/book/2'>
                <img
                  src='../assets/img/image_test.png'
                  alt='Test'
                />
                <h3>
                  O duque e eu (Os Bridgertons – Livro 1): O livro de Daphne
                </h3>
                <h4>
                  Julia Quinn
                </h4>
              </Link>
            </SwiperSlide>
          </Swiper>
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

          <Swiper
            spaceBetween={20}
            slidesPerView={'auto'}
            className='favoriteAuthors__swiper'
          >
            <SwiperSlide className='favoriteAuthors__item'>
              <img
                src='../assets/img/profile_picture.png'
                alt='Test'
              />
              <div className='favoriteAuthors__item___content'>
                <h3> Connie Brockway</h3>
                <p>6 Livros</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='favoriteAuthors__item'>
              <img
                src='../assets/img/profile_picture.png'
                alt='Test'
              />
              <div className='favoriteAuthors__item___content'>
                <h3> Connie Brockway</h3>
                <p>6 Livros</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='favoriteAuthors__item'>
              <img
                src='../assets/img/profile_picture.png'
                alt='Test'
              />
              <div className='favoriteAuthors__item___content'>
                <h3> Connie Brockway</h3>
                <p>6 Livros</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='favoriteAuthors__item'>
              <img
                src='../assets/img/profile_picture.png'
                alt='Test'
              />
              <div className='favoriteAuthors__item___content'>
                <h3> Connie Brockway</h3>
                <p>6 Livros</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='favoriteAuthors__item'>
              <img
                src='../assets/img/profile_picture.png'
                alt='Test'
              />
              <div className='favoriteAuthors__item___content'>
                <h3> Connie Brockway</h3>
                <p>6 Livros</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='favoriteAuthors__item'>
              <img
                src='../assets/img/profile_picture.png'
                alt='Test'
              />
              <div className='favoriteAuthors__item___content'>
                <h3> Connie Brockway</h3>
                <p>6 Livros</p>
              </div>
            </SwiperSlide>
          </Swiper>

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
                Todos
              </Link>
            </SwiperSlide>
            <SwiperSlide className='sectionList__lib___item'>
              <Link to='/'>
                Todos
              </Link>
            </SwiperSlide>
            <SwiperSlide className='sectionList__lib___item'>
              <Link to='/'>
                Todos
              </Link>
            </SwiperSlide>
            <SwiperSlide className='sectionList__lib___item'>
              <Link to='/'>
                Todos
              </Link>
            </SwiperSlide>
          </Swiper>

          <ul className='library__list'>
            <li className='library__list___item'>
              <Link>
                <img
                  src='../assets/img/image_test.png'
                  alt='Test'
                />

                <div className='library__list___item___content'>
                  <h3>
                    O duque e eu (Os Bridgertons Livro Novo 1)
                  </h3>
                  <p>
                    Julia Quinn
                  </p>
                </div>
              </Link>
            </li>
            <li className='library__list___item'>
              <Link>
                <img
                  src='../assets/img/image_test.png'
                  alt='Test'
                />

                <div className='library__list___item___content'>
                  <h3>
                    O duque e eu (Os Bridgertons Livro Novo 1)
                  </h3>
                  <p>
                    Julia Quinn
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </Container>
      </section>
    </div>
  );
}

export default App;

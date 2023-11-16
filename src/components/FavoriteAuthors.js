import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
const queryClient = new QueryClient();

const FavoriteAuthors = () => {
  const { data, isLoading, error } = useQuery('favoriteAuthors', async () => {
    const response = await axios.get('https://us-central1-ss-devops.cloudfunctions.net/GraphQL', {
      params: {
        query: `
          query favoriteAuthor {
            favoriteAuthors{
              id, name, picture, booksCount
            }
          }
        `,
      },
    });

    return response.data.data;
  });

  if (isLoading) {
    return (
      <div class="spinner-grow" role="status">
        <span class="sr-only"></span>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={'auto'}
      className='favoriteAuthors__swiper'
    >
      {data.favoriteAuthors.map(data => (
        <SwiperSlide className='favoriteAuthors__item'>
          <img
            src={data.picture}
            alt={data.name}
          />
          <div className='favoriteAuthors__item___content'>
            <h3>{data.name}</h3>
            <p>{data.booksCount} Livros</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <FavoriteAuthors />
  </QueryClientProvider>
);

export default App;
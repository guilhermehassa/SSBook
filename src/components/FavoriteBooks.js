import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
const queryClient = new QueryClient();

const FavoriteBooks = () => {
  const { data, isLoading, error } = useQuery('favoriteBooks', async () => {
    const response = await axios.get('https://us-central1-ss-devops.cloudfunctions.net/GraphQL', {
      params: {
        query: `
          query favoriteBooks {
            favoriteBooks {
              id, cover, name, author{name}
            }
          },
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
    slidesPerView={2.3}
    >
      {/* {console.log(data)} */}
      {data.favoriteBooks.map(book => (
        <SwiperSlide key={book.id} className='favoriteBooks__item'>
          <Link to={`/book/${book.id}`}>
            <img
              src={book.cover} // Use a propriedade cover do livro para a URL da imagem
              alt={book.name}
            />
            <h3>{book.name}</h3>
            <h4>{book.author.name}</h4>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <FavoriteBooks />
  </QueryClientProvider>
);

export default App;
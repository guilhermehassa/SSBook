import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
const queryClient = new QueryClient();

const Library = () => {
  const { data, isLoading, error } = useQuery('allBooks', async () => {
    const response = await axios.get('https://us-central1-ss-devops.cloudfunctions.net/GraphQL', {
      params: {
        query: `
          query allBooks {
            allBooks{
              id, name, cover, author{name}
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
    <div className='row library__list'>

      {data.allBooks.map(data => (
        <li className='col-4 library__list___item' key={data.id}>
          <Link>
            <img
              src={data.cover}
              alt={data.name}
            />

            <div className='library__list___item___content'>
              <h3>
               {data.name}
              </h3>
              <p>
                {data.author.name}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Library />
  </QueryClientProvider>
);

export default App;
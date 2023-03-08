import React, { useEffect, useState } from 'react'
import Row from './Row'
import axios from 'axios'
import {BiPlay} from 'react-icons/bi';
import { AiOutlinePlus} from 'react-icons/ai'


import '../Style/Home.scss'
import { Link } from 'react-router-dom';


const apiKey = '6d00997460f9123e6e23ebd6eedff858';
const url = 'https://api.themoviedb.org/3';
const imgUrl = 'https://image.tmdb.org/t/p/original';
const upcoming = 'upcoming';
const popular = 'popular';
const nowPlaying = 'now_playing';
const topRated = 'top_rated';


const Home = () => {

  // usestate ki madad sa hamne ek variable banaya jiski initial value hamne empty array kardi or hamne api fetch kar k us arr main assign kardi 
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {

    const fetchupcoming = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
    };

    const fetchpopular = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setPopularMovies(results);
    };

    const fetchnowPlaying = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setNowPlayingMovies(results);
    };

    const fetchtopRated = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopRatedMovies(results);
    };

    const getAllGenre = async () => {
      const { data: { genres } } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(genres);
    };

    fetchupcoming();
    fetchpopular();
    fetchnowPlaying();
    fetchtopRated();

    getAllGenre();

  }, [])



  return (
    <section className="home">
      <div className="banner" style={{
        backgroundImage: popularMovies[0] ? `url(${`${imgUrl}/${popularMovies[0].poster_path}`})` : 'none'
      }}>
        {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
        {popularMovies[0] && <p>{popularMovies[0].overview}</p>}

        <div>
        <button> <BiPlay />Play</button>
        <button>My List <AiOutlinePlus /></button>
        </div>

      </div>

      <Row title={'Upcoming'} arr={upcomingMovies} imgUrl={imgUrl} />
      <Row title={'Popular'} arr={popularMovies} imgUrl={imgUrl} />
      <Row title={'Now Playing'} arr={nowPlayingMovies} imgUrl={imgUrl} />
      <Row title={'Top Rated'} arr={topRatedMovies} imgUrl={imgUrl} />

      <div className="genreBox">
        {
          genre.map((item) => (
            <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
          ))
        }
      </div>



    </section>

  )
}

export default Home
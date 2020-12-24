import React from 'react';
import './App.css';
import Row from './Row'
import requests from './request'
import Banner from './banner'
import Nav from './nav'
function App() {
  return (
  

    <div className="App">
        <Nav/>
         <Banner />
    <Row title="NETFLIX ORIGINALS" fetchurl={requests.fetchNetflixOriginals} isLargeRow />
    <Row title="Trending Now" fetchurl={requests.fetchTrending} />
    <Row title="Top Rated" fetchurl={requests.fetchTopRated} />
    <Row title="Comedy Movie" fetchurl={requests.fetchComedyMovies} />
    <Row title="Action Movie" fetchurl={requests.fetchActionMovies}  />
    <Row title="Horror Movie" fetchurl={requests.fetchHorrorMovies} />
    <Row title="Romance Movie" fetchurl={requests.fetchRomanceMovies}  />
    <Row title="Documentries" fetchurl={requests.fetchDocumentaries}  />
   

    </div>
  );
}

export default App;

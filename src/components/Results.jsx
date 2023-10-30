import React from 'react';

export function Results({ results }) {
    
  return (
    <div>
      <h2>Résultats de recherche :</h2>
      <table class="table">
      <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Film</th>
            <th scope="col">language</th>
            <th scope="col">Genres</th>
            <th scope="col">Image</th>

          </tr>
        </thead>
      </table>
      {results.map((query, index) => (
        <table key={index} class="table table-bordered">
        
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{query.show.name}</td>
            <td>{query.show.language}</td>
            <td>{query.show.genres}</td>
            <img src={query.show.image?.medium} class="card-img-bottom ml-5" alt={query.show.name}></img>
          </tr>
         
        </tbody>
      </table>

      ))}
    </div>
  )
}



{/* <div>
      <h2>Résultats de recherche :</h2>
      <table class="table">
      <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Film</th>
            <th scope="col">language</th>
            <th scope="col">Genres</th>
            <th scope="col">Image</th>

          </tr>
        </thead>
      </table>
      {results.map((query, index) => (
        <table key={index} class="table table-bordered">
        
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{query.show.name}</td>
            <td>{query.show.language}</td>
            <td>{query.show.genres}</td>
            <img src={query.show.image?.medium} class="card-img-bottom ml-5" alt={query.show.name}></img>
          </tr>
         
        </tbody>
      </table>






       

      ))}
    </div> */}
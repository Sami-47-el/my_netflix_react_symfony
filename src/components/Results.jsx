import React from 'react';
import { Link } from 'react-router-dom';

export function Results({ results }) {
  return (
    <div>
      
      <h2 className="mt-4">Résultats de recherche :</h2>

      <div className="container">
        <div className="row">
          {results.map((query, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card text-black">
                <img src={query.show.image?.medium} className="card-img-top" alt={query.show.name} />
                <div className="card-body">
                  <h5 className="card-title"><strong> <u>Nom du film :</u></strong> {query.show.name}</h5>
                  <h5 className="card-title"><strong> <u>Langue :</u></strong> {query.show.language}</h5>
                  <h5 className="card-title"><strong> <u>Genres :</u></strong> {query.show.genres}</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                  <a className="btn btn-primary"> <Link to={"/show/" + query.show.id} className="nav-link">  Détails</Link></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


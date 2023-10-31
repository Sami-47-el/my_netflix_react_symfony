import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"

export function Show(){
    const [details, setDetails]=useState([])
    const params = useParams()

    useEffect(()=>{
        fetch(' https://api.tvmaze.com/shows/' + params.id +'?embed=cast')
        .then((res)=>res.json())
        .then(data=>setDetails(data))

    },[])
    
    return(

        <>
            <h1>film ou série : {details.name}</h1>
           
               
                <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                    <div class="col-auto d-none d-lg-block">
                        
                           
                    </div>

                    <div class="col-lg-6 px-0">
                        <h1 class="display-4 fst-italic text-black">{details.name}</h1>
                        <h3 class="display-6 fst-italic text-black">{details.genres}</h3>
                        
                    </div>
                </div>

                <div class="row featurette">
                        <div class="col-md-7">
                            <h2 class="featurette-heading fw-normal lh-1">{details.name} <div class="text-body-secondary">{details.genres}</div></h2>
                            <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                        </div>
                        <div class="col-md-5">
                            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
                        </div>
                        </div>
                

                            {/* <h5 className="card-title"><strong> <u>Nom du film :</u></strong> {query.show.name}</h5>
                            <h5 className="card-title"><strong> <u>Langue :</u></strong> {query.show.language}</h5>
                            <h5 className="card-title"><strong> <u>Genres :</u></strong> {query.show.genres}</h5> */}
          


                <h1>les acteurs : </h1>
                {details._embedded?.cast.map((actor, index)=>
                    <div key={index} class="col-md-6 mt-5" style={{background: "linear-gradient(to bottom, #9ab9bc, #2F70AF)",}}>
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-success-emphasis">Design</strong>
                            <h3 class="mb-0">Post title</h3>
                        <div class="mb-1 text-body-secondary">Nov 11</div>
                            <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                                Continue reading
                                <svg class="bi"><use xlink:href="#chevron-right"/></svg>
                            </a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                        <img src={actor.person?.image?.medium} className="card-img-top" alt={actor.person.name} />
                        </div>
                    </div>
                    </div>

                

                )}
           

                
        </>
    )
     
}
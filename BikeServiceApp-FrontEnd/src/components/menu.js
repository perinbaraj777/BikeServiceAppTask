import React from 'react';
import { Link } from 'react-router-dom';
export function Menu(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">10K BIKE SERVICE  CENTER</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
     <Link to='/'><a class="nav-item nav-link active" href="#">OWNER MODULE</a></Link> 
     <Link to='/user'> <a class="nav-item nav-link" href="#">CUSTOMER MODULE</a></Link> 
    
    </div>
  </div>
</nav>
        
        </>
    )
}
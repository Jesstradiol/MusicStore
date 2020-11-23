import React from 'react';
import data from './data';

function App() {
  return (
<div className="grid_conatainer">
        <header className="row">
            <div>
                <a classNameName="myBrand" href="index.html">Jessica's Music</a>
            </div>
            <div>
                <a href="cart.html">Cart of Sounds</a>
                <a href="signin.html">Sign In Bruh</a>
            </div>

        </header>

        <main>
            <div className="row center">
              {

                data.albums.map((album) => (
                  <div key={album.AlbumID} className="card">
                    <a href={`/album/${album.AlbumID}`}>
                        <img className="medium" src={album.image} alt={album.AlbumTitle} height ="330px" width="180px" />
                    </a>
                    <div className="card-body">
                    <a href={`/albums/${album.AlbumID}`}>
                <h2>{album.artists} - {album.AlbumTitle}</h2>
                        </a>
                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                        </div>
                        <div className="price">${album.AlbumCost}</div>
                    </div>
                </div>
                  
                ))
              }
                
            </div>
        </main>
        <footer className="row center">
            All rights reserved by Jessica Elsener 2020
        </footer>
    </div>
  );
}

export default App;

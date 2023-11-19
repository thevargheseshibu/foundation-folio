import logo from './logo.svg';
import 'foundation-sites/dist/css/foundation.min.css';

import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>

      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Marketing Site</li>
            <li><a href="#">One</a></li>
            <li><a href="#">Two</a></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><a href="#">Three</a></li>
            <li><a href="#">Four</a></li>
            <li><a href="#">Five</a></li>
            <li><a href="#">Six</a></li>
          </ul>
        </div>
      </div>



      <div className="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>
        <ul className="orbit-container">
          <button className="orbit-previous" aria-label="previous"><span className="show-for-sr">Previous Slide</span>&#9664;</button>
          <button className="orbit-next" aria-label="next"><span className="show-for-sr">Next Slide</span>&#9654;</button>
          <li className="orbit-slide is-active">
            <img src="" />
          </li>
          <li className="orbit-slide">
            <img src="https://picsum.photos/2000/750
" />
          </li>
          <li className="orbit-slide">
            <img src="https://picsum.photos/2000/750
" />
          </li>
          <li className="orbit-slide">
            <img src="https://picsum.photos/2000/750
" />
          </li>
        </ul>
      </div>

      <div className="row column text-center">
        <h2>Our Newest Products</h2>

      </div>

      <div className="row small-up-2 large-up-4">
        <div className="column">
          <img className="thumbnail" src="https://picsum.photos/300/400
" />
          <h5>Nulla At Nulla Justo, Eget</h5>
          <p>$400</p>
          <a href="#" className="button expanded">Buy</a>
        </div>
        <div className="column">
          <img className="thumbnail" src="https://picsum.photos/300/400
" />
          <h5>Nulla At Nulla Justo, Eget</h5>
          <p>$400</p>
          <a href="#" className="button expanded">Buy</a>
        </div>
        <div className="column">
          <img className="thumbnail" src="https://picsum.photos/300/400
" />
          <h5>Nulla At Nulla Justo, Eget</h5>
          <p>$400</p>
          <a href="#" className="button expanded">Buy</a>
        </div>
        <div className="column">
          <img className="thumbnail" src="https://picsum.photos/300/400
" />
          <h5>Nulla At Nulla Justo, Eget</h5>
          <p>$400</p>
          <a href="#" className="button expanded">Buy</a>
        </div>
      </div>



      <div className="row column">
        <div className="callout primary">
          <h3>Really big special this week on items.</h3>
        </div>
      </div>


      <div className="row column text-center">
        <h2>Some Other Neat Products</h2>

      </div>

      <div className="row small-up-2 medium-up-3 large-up-6">
        <div className="column">
          <img className="thumbnail" src="https://picsum.photos/300/400
" />
          <h5>Nulla At Nulla Justo, Eget</h5>
          <p>$400</p>
          <a href="#" className="button small expanded hollow">Buy</a>
        </div>
        <div className="column">
          <img className="thumbnail" src="https://picsum.photos/300/400
" />
          <h5>Nulla At Nulla Justo, Eget</h5>
          <p>$400</p>
          <a href="#" className="button small expanded hollow">Buy</a>
        </div>
        <div className="column">
          <img className="thumbnail" src="https://picsum.photos/300/400
" />
          <h5>Nulla At Nulla Justo, Eget</h5>
          <p>$400</p>
          <a href="#" className="button small expanded hollow">Buy</a>
        </div>
        <div className="column">
          <img className="thumbnail" src="https://picsum.photos/300/400
" />
          <h5>Nulla At Nulla Justo, Eget</h5>
          <p>$400</p>
          <a href="#" className="button small expanded hollow">Buy</a>
        </div>
        <div className="column">
          <img className="thumbnail" src="https://picsum.photos/300/400
" />
          <h5>Nulla At Nulla Justo, Eget</h5>
          <p>$400</p>
          <a href="#" className="button small expanded hollow">Buy</a>
        </div>
        <div className="column">
          <img className="thumbnail" src="https://picsum.photos/300/400
" />
          <h5>Nulla At Nulla Justo, Eget</h5>
          <p>$400</p>
          <a href="#" className="button small expanded hollow">Buy</a>
        </div>
      </div>


      <div className="row">
        <div className="medium-4 columns">
          <h4>Top Products</h4>
          <div className="media-object">
            <div className="media-object-section">
              <img className="thumbnail" src="https://placekitten.com/100/100
" />
            </div>
            <div className="media-object-section">
              <h5>Nunc Eu Ullamcorper Orci</h5>
              <p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque.</p>
            </div>
          </div>
          <div className="media-object">
            <div className="media-object-section">
              <img className="thumbnail" src="https://placekitten.com/100/100
" />
            </div>
            <div className="media-object-section">
              <h5>Nunc Eu Ullamcorper Orci</h5>
              <p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque.</p>
            </div>
          </div>
          <div className="media-object">
            <div className="media-object-section">
              <img className="thumbnail" src="https://placekitten.com/100/100
" />
            </div>
            <div className="media-object-section">
              <h5>Nunc Eu Ullamcorper Orci</h5>
              <p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque.</p>
            </div>
          </div>
        </div>
        <div className="medium-4 columns">
          <h4>Top Products</h4>
          <div className="media-object">
            <div className="media-object-section">
              <img className="thumbnail" src="https://placekitten.com/100/100
" />
            </div>
            <div className="media-object-section">
              <h5>Nunc Eu Ullamcorper Orci</h5>
              <p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque.</p>
            </div>
          </div>
          <div className="media-object">
            <div className="media-object-section">
              <img className="thumbnail" src="https://placekitten.com/100/100
" />
            </div>
            <div className="media-object-section">
              <h5>Nunc Eu Ullamcorper Orci</h5>
              <p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque.</p>
            </div>
          </div>
          <div className="media-object">
            <div className="media-object-section">
              <img className="thumbnail" src="https://placekitten.com/100/100
" />
            </div>
            <div className="media-object-section">
              <h5>Nunc Eu Ullamcorper Orci</h5>
              <p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque.</p>
            </div>
          </div>
        </div>
        <div className="medium-4 columns">
          <h4>Top Products</h4>
          <div className="media-object">
            <div className="media-object-section">
              <img className="thumbnail" src="https://placekitten.com/100/100
" />
            </div>
            <div className="media-object-section">
              <h5>Nunc Eu Ullamcorper Orci</h5>
              <p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque.</p>
            </div>
          </div>
          <div className="media-object">
            <div className="media-object-section">
              <img className="thumbnail" src="https://placekitten.com/100/100
" />
            </div>
            <div className="media-object-section">
              <h5>Nunc Eu Ullamcorper Orci</h5>
              <p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque.</p>
            </div>
          </div>
          <div className="media-object">
            <div className="media-object-section">
              <img className="thumbnail" src="https://placekitten.com/100/100
" />
            </div>
            <div className="media-object-section">
              <h5>Nunc Eu Ullamcorper Orci</h5>
              <p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="callout large secondary">
        <div className="row">
          <div className="large-4 columns">
            <h5>Vivamus Hendrerit Arcu Sed Erat Molestie</h5>
            <p>Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit.</p>
          </div>
          <div className="large-3 large-offset-2 columns">
            <ul className="menu vertical">
              <li><a href="#">One</a></li>
              <li><a href="#">Two</a></li>
              <li><a href="#">Three</a></li>
              <li><a href="#">Four</a></li>
            </ul>
          </div>
          <div className="large-3 columns">
            <ul className="menu vertical">
              <li><a href="#">One</a></li>
              <li><a href="#">Two</a></li>
              <li><a href="#">Three</a></li>
              <li><a href="#">Four</a></li>
            </ul>
          </div>
        </div>
      </div>

    </React.Fragment>


  );
}

export default App;

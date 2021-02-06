import React from'react';
import logo from './logo.svg';
import './App.css';
import './highcss.css';

class App extends React.Component{
  render()
  {
    return (
      <div className="App">
          <section className="cards-wrapper">
    <div className="card-grid-space">
      <a className="card"  href="" style={{backgroundImage: "url('./images/leaf1.jpg')"}}>
        <div>
          <h1>Exclusive tropical plants for your home!</h1>
          <div className="tags">
            <div className="tag"  href="#gg">Shop</div>                 
          </div>
        </div>
      </a>
    </div>

    <div className="card-grid-space">
      <a className="card" href="" style={{backgroundImage: "url('./images/leaf2.jpg')"}}>
        <div>
          <h1>Rich fragrant flower pots and more!</h1>
          <div className="tags">
            <div className="tag"  href="#gg">Shop</div>
          </div>
        </div>
      </a>
    </div>

    <div className="card-grid-space">
      <a className="card" href="" style={{backgroundImage: "url('./images/leaf3.jpg')"}}>
        <div>
          <h1>Exotic succulents for all indoor decor!</h1>
          <div className="tags">
            <div className="tag"  href="#gg">Shop</div>
          </div>
        </div>
      </a>
    </div>

  </section>
      </div>
    );
  }
}

export default App;

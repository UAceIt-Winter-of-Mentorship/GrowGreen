import React from 'react';
import './flipcard.css';
import './cardscript.js';


function flipcard() {
    return (
        <div className="App">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="container">
                            <img src="p.jpg" onmouseover="myFunction()" alt="Avatar" style="width:300px;height:500px;" />
                            <div class="centered" id="demo">initial text</div>

                        </div>
                    </div>
                    <div class="flip-card-back">
                        <div class="container">
                            <img src="b.jpg" alt="" style="width:300px;height:500px;" />
                            <div class="centered" id="demo1">
                                <p>text here</p>
                                <p>this is the backface</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
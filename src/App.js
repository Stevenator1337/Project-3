
import './css/App.css';
import './component/event.js'; 
 
function App() {
  return (
    <div className="App">
      <div class = "head">
        <h1>Wordle</h1>
      </div>
      <div class = "board">
        <div class= "container">
        <div class= "row">
        <div class = "word"></div>
        <div class = "word"></div>
        <div class = "word"></div>
        <div class = "word"></div>
        <div class = "word"></div>
         
        </div>

        <div class= "row">
        <div class = "word"></div>
        <div class = "word"></div>
        <div class = "word"></div>
        <div class = "word"></div>
        <div class = "word"></div>
        
        </div>
        <div class= "row">
        <div class = "word"></div>
        <div class = "word"></div>
        <div class = "word"></div>
        <div class = "word"></div>
        <div class = "word"></div>
        
        </div>
        <div class= "row">
        <div class = "word"></div>
        <div class = "word"></div>
        <div class = "word"></div>
        <div class = "word"></div>
        <div class = "word"></div>
        
        </div>
        <div class= "row">
        <div class = "word"></div>
        <div class = "word"></div>
        <div class = "word"></div>
        <div class = "word"></div>
        <div class = "word"></div>
        
        </div>
        <div class= "row">
        <div class = "word"></div>
        <div class = "word"></div>
        <div class = "word"></div>
        <div class = "word"></div>
        <div class = "word"></div>
        </div>
        </div>
      </div>
      <div class ="keyboard">
      <div class = "keys">
        <div>
          <button data-key= "Q">Q</button>
          <button data-key= "W">W</button>
          <button data-key= "E">E</button>
          <button data-key= "R">R</button>
          <button data-key= "T">T</button>
          <button data-key= "Y">Y</button>
          <button data-key= "U">U</button>
          <button data-key= "I">I</button>
          <button data-key= "O">O</button>
          <button data-key= "P">P</button>
        </div>
        
        <div>
        <button data-key= "A">A</button>
        <button data-key= "S">S</button>
        <button data-key= "D">D</button>
        <button data-key= "F">F</button>
        <button data-key= "G">G</button>
        <button data-key= "H">H</button>
        <button data-key= "J">J</button>
        <button data-key= "K">K</button>
        <button data-key= "L">L</button>
        </div>
        <div>
        <button data-key= "ENTER">Enter</button>
        <button data-key= "Z">Z</button>
        <button data-key= "X">X</button>
        <button data-key= "C">C</button>
        <button data-key= "V">V</button>
        <button data-key= "B">B</button>
        <button data-key= "N">N</button>
        <button data-key= "M">M</button>
        <button data-key= "DEL">DEL</button>
        </div>
      </div>
      </div>
    </div>
  );
} 

export default App;

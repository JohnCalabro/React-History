import React from "react";
import JokeList from "./JokeList";

// function App() {
//   return (
//     <div className="App">
//       <JokeList />
//     </div>
//   );
// }

//class component rather than function component:
class App extends Component {
  //render this app:
  render () {
      return (
    <div className="App">
      <JokeList />
    </div>
  );
    
  }
}

export default App;

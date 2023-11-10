import React from "react";
import "./Joke.css";

//consulting solution I am still confused on class based components, 
//will document my understanding. ALso typing it out is helping me
//understand this better. 

//class component

class Joke extends Component {
  constructor(props) {
    //we need props in the constructor
    super(props);
    //rather than functions like with functional based components

    //we are binding these class methods to this class
    this.upVote = this.upVote.bind(this); 
    this.downVote = this.downVote.bind(this);
    this.toggleLock = this.toggleLock.bind(this);
  }
  //defininfg the methods:
  upVote(){
    //incrementing up votes
    this.props.vote(this.props.id, +1);
  }
  downVote(){
    //decrementing to represent down votes
    this.props.vote(this.props.id, -1);
  }
  toggleLock(){
    this.props.toggleLock(this.props.id)
  }
  //render function. Renders JSX content to the page:
  render() {
    //returning jsx. We call class methods onClick
    return (
      <div className={`Joke ${this.props.locked ? "Joke-locked" : ""}`}>
        <div className="Joke-votearea">
          <button onClick={this.upVote}> 
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={this.downVote}>
            <i className="fas fa-thumbs-down" />
          </button>

          <button onClick={this.toggleLock}>
            <i
              className={`fas ${this.props.locked ? "fa-unlock" : "fa-lock"}`}
            />
          </button>

          {this.props.votes}
        </div>

        <div className="Joke-text">{this.props.text}</div>
      </div>
    );
  }

}




//functional component:

// function Joke({ vote, votes, text, id }) {
//   const upVote = () => vote(id, +1);
//   const downVote = () => vote(id, -1);

//   return (
//     <div className="Joke">
//       <div className="Joke-votearea">
//         <button onClick={upVote}>
//           <i className="fas fa-thumbs-up" />
//         </button>

//         <button onClick={downVote}>
//           <i className="fas fa-thumbs-down" />
//         </button>

//         {votes}
//       </div>

//       <div className="Joke-text">{text}</div>
//     </div>
//   );
// }

export default Joke;

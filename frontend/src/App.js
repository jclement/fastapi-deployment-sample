import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        day: ""
    };
  }

  componentDidMount() {
      fetch('/api/day')
          .then(response => response.json())
          .then(response => this.setState({'day': response.day}))
  }

  render() {
    return <h1>Hey!  It's {this.state.day}</h1>;
  }

}

export default App;

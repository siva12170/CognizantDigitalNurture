import React from 'react';

class CountPeople extends React.Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0,
    };
    this.updateEntry = this.updateEntry.bind(this);
    this.updateExit = this.updateExit.bind(this);
  }

  updateEntry() {
    this.setState(prevState => ({
      entrycount: prevState.entrycount + 1
    }));
  }

  updateExit() {
    this.setState(prevState => ({
      exitcount: prevState.exitcount + 1
    }));
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <button
          onClick={this.updateEntry}
          style={{
            backgroundColor: 'lightgreen',
            color: 'darkgreen',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '18px',
            marginRight: '20px'
          }}
        >
          Login
        </button>
        <span style={{ fontSize: '20px', color: 'darkgreen' }}>
          {this.state.entrycount} People Entered!!!
        </span>

        <br /><br /><br /> 

        <button
          onClick={this.updateExit}
          style={{
            backgroundColor: 'lightgreen',
            color: 'darkgreen',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '18px',
            marginRight: '20px'
          }}
        >
          Exit
        </button>
        <span style={{ fontSize: '20px', color: 'darkgreen' }}>
          {this.state.exitcount} People Left!!!
        </span>
      </div>
    );
  }
}

export default CountPeople;
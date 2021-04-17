import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  
  state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    constructor(){
      super();
      console.log('App Contructor');
    };

    // Perfect for Ajax Calls
    componentDidMount(){
      // Ajax Call
      console.log('App Mounted');
    }

    //#region Handlers
    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf( counter );
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState( { counters } );
    }

    handleReset = () => {
        const counters = this.state.counters.map( c => {
            c.value = 0;
            return c;
        } );
        this.setState( { counters } );
    }

    handleDelete = counterId => {
        const counters = this.state.counters.filter( c => c.id !== counterId );
        this.setState( { counters } );
    }
    //#endregion Handlers
  
    //#region Render
    render () {
     return (
       console.log('App Rendered'),
       <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
            <Counters 
              counters={this.state.counters}
              onReset={this.handleReset} 
              onIncrement={this.handleIncrement} 
              onDelete={this.handleDelete} />
        </main>
     </React.Fragment>
     );
  }
  //#endregion Render
}

export default App;

import React, { Component } from 'react';
import "./App.css";

class App extends Component{
    
    state = {

        humano: [
           {
             nome: "Helio Junior",
             idade: 34,
             comida: "Pão com Mortadela",
           },
           {
            musica1: "Mun Rá - Sabotage",
            musica2: "Treasure - Bruno Mars",
            musica3: "Guillotine - No Trigger",          }
        ]
       }
    
    render(){
      return(
        <section>
            <h1>{this.state.humano[0].nome}</h1>
            <h2>{this.state.humano[0].idade}</h2>
            <h3>{this.state.humano[0].comida}</h3>
                <ul className='lista'>
                    <li>this.state.humano[0].musica1</li>
                    <li>this.state.humano[0].musica2</li>
                    <li>this.state.humano[0].musica3</li>
                </ul>

                <ol className='lista'>
                    <li>this.state.humano[0].musica1</li>
                        <li>this.state.humano[0].musica2</li>
                        <li>this.state.humano[0].musica3</li>
                </ol>
        </section>
      )
    }
  
  }
  
  export default App;
import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
// import FaceRecognition from './components/FaceRecognition/FaceRecognition';
// import Signin from './components/Signin/Signin';
// import Register from './components/Register/Register';
import './App.css';

const app = new Clarifai.App({
       apiKey: 'be7fd62d45024a9f830c421aed281f2c'
      });

const particlesOptions = {
    particles: {
        number : {
            value:300,
            density : {
                enable: true,
                value_area: 800
            }
        }
        // },
        // interactivity: {
        //     detect_on: "canvas",
        //     events: {
        //       onhover: {
        //         enable: false,
        //         mode: "repulse"
        //       },
        //       onclick: {
        //         enable: true,
        //         mode: "push"
        //       },
        //       resize: true
        //     }
        // },
        // modes: {
        //     repulse: {
        //         distance: 400,
        //         duration: 0.4
        //     },
        //     push: {
        //         particles_nb: 4
        //     },
        //     remove: {
        //         particles_nb: 2
        //     }
        // }
    }
}
class App extends Component {
    constructor(){
        super();
        this.state = {
            input: '',
        }
    }
    onInputChange = (event) => {
        console.log(event.target.value);
    }
    onButtonSubmit = () => {
        console.log('click')
    }
    render(){
        return (
            <div className="App">
                <Particles className="particles" params={particlesOptions}
                style={{
                    backgroundImage: 'url(http://www.modafinilsale.com/data/out/738/231611008-hockey-rink-wallpaper.jpg)', 
                    backgroundRepeat:'no-repeat',
                    backgroundSize: 'cover'
                }}
                
                />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm 
                    onInputChange = {this.onInputChange} 
                    onButtonSubmit={this.onButtonSubmit} 
                />
                {/* <FaceRecognition />  */}

            </div>

        )
    }
}

export default App;
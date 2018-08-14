import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
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
            imageUrl: '',
            box: {},
        }
    }
    calculateFaceLocation = (data) => {
       const facedata = data.outputs[0].data.regions;
       const image = document.getElementById('inputimage');
       const width = Number(image.width);
       const height = Number(image.height);

        let faceBox = facedata.map((x) => {
           let clarifaiFace = x.region_info.bounding_box;
           console.log(clarifaiFace);
           return {
                leftCol: clarifaiFace.left_col * width,
                topRow: clarifaiFace.top_row * height,
                rightCol: width - (clarifaiFace.right_col * width),
                bottomRow: height - (clarifaiFace.bottom_row * height)
            }
            
        })
        console.log('faceBox', faceBox)

       
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        console.log('cla', clarifaiFace);
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        }
    }

    displayFaceBox = (box) => {
        console.log('box', box);
        this.setState({ box: box })
    }

    onInputChange = (event) => {
        this.setState({input:event.target.value});
    }
    onButtonSubmit = () => {
        this.setState({imageUrl: this.state.input});
        app.models
            .predict(
                Clarifai.FACE_DETECT_MODEL, 
                this.state.input)
            .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
            .catch(err => console.log(err))
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
                    onButtonSubmit= {this.onButtonSubmit} 
                />
                <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} /> 

            </div>

        )
    }
}

export default App;
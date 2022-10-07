import React from "react";
import ReactDOM from "react-dom";
import LocationDisplay from "./LocationDisplay";

class App extends React.Component {
  /*
  constructor(props) {
    super(props);
    this.state = { latitude: null, errorMessage: "" };

    // window.navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //         this.setState({latitude:position.coords.latitude})
    //     },
    //     (error) => {
    //         this.setState({errorMessage:error.message})
    //     }
    //   );
  }
*/
  constructor(props) {
    super(props);
    this.state = { latitude: null, errorMessage: "" };
  }

  
  //Bu method sadece bir defa çağrılır. Veri Yükleme ve api'a istek atmak için kullanılır.
  componentDidMount() {
    console.log("componentDidMount");
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  //State,props deiştiğinde data yükleme işlemlerini yapabiliriz.
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  //Silme işlemleri yapılır.
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    //Render içinde data çekme, api'ye istek atma işlemleri yapılamaz.
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>{this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.latitude) {
      
      return <div><LocationDisplay latitude={this.state.latitude}/></div>
    } else {
      return <div>Loading...</div>
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

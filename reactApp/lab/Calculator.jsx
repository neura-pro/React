import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class BoilingVerdict extends React.Component {
    render() {
        if (this.props.celsius >= 100) {
            return <p>The water would boil.</p>;
        }
        return <p>The water would not boil.</p>;
    }
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value, this.props.scale);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: '', scale: ''};
  }

  handleChange(temperature, scale) {
    this.setState({temperature, scale});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const temperatureC = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const temperatureF = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={temperatureC}
          onTemperatureChange={this.handleChange} />
        <TemperatureInput
          scale="f"
          temperature={temperatureF}
          onTemperatureChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(temperatureC)} />
      </div>
    );
  }
}


export default Calculator;
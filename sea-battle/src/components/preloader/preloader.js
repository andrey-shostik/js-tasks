import React, { Component } from 'react';
import './preloader.scss';

class Preloader extends Component {

  componentDidMount() {
    const hellopreloader = document.getElementById('hellopreloader_preload');
    function fadeOutnojquery(el) {
      el.style.opacity = 1;
      var interhellopreloader = setInterval(function() {
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <= 0.05) {
          clearInterval(interhellopreloader);
          hellopreloader.style.display = 'none';
        }
      }, 16);
    }
  }

  render() {
    return (
      <div>
        <div id="hellopreloader">
          <div id="hellopreloader_preload">
          </div>
        </div>
      </div>
    );
  }
}

export default Preloader;

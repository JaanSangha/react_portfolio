import { Component } from 'react';
import MouseImg from "./img/legomouse.png";
import HoverMouseImg1 from "./img/legomousehover.png";
import MouseImg2 from "./img/woodmouse.png";
import HoverMouseImg2 from "./img/woodmousehover.png";
import MouseImg3 from "./img/cheesemouse.png";
import HoverMouseImg3 from "./img/cheesemousehover.png";

class CustomCursor extends Component {
  constructor(props) {
    super(props);
    let randomNumber = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

    this.customCursor = new Image();
    this.hoverCursor1 = new Image();
    if(randomNumber === 0){
    this.customCursor.src = MouseImg;
    this.hoverCursor1.src = HoverMouseImg1;
    }
    else if (randomNumber ===1 ){
      this.customCursor.src = MouseImg2;
      this.hoverCursor1.src = HoverMouseImg2;
    }
    else if(randomNumber ===2)
    {
      this.customCursor.src = MouseImg3;
      this.hoverCursor1.src = HoverMouseImg3;
    }
    this.customCursor.style.position = 'fixed';
    this.customCursor.style.pointerEvents = 'none';
    this.customCursor.style.width = '32px'; // Set the width of the custom cursor
    this.customCursor.style.height = '32px'; // Set the height of the custom cursor
    this.customCursor.style.zIndex = '9999'; // Set z-index to ensure it appears above other elements
    this.hoverCursor1.style.position = 'fixed';
    this.hoverCursor1.style.pointerEvents = 'none';
    this.hoverCursor1.style.width = '32px'; // Set the width of the hover cursor
    this.hoverCursor1.style.height = '32px'; // Set the height of the hover cursor
    this.hoverCursor1.style.zIndex = '9999'; // Set z-index to ensure it appears above other elements
    this.hoverCursor1.style.display = 'none'; // Initially hide the hover cursor
  }

  componentDidMount() {
    document.body.appendChild(this.customCursor);
    document.body.appendChild(this.hoverCursor1);
    document.body.style.cursor = 'none'; // Hide default cursor
    document.addEventListener('mousemove', this.handleMouseMove);
    document.querySelectorAll('[data-custom-cursor]').forEach((element) => {
      element.addEventListener('mouseenter', this.handleMouseEnter);
      element.addEventListener('mouseleave', this.handleMouseLeave);
    });
  }

  componentWillUnmount() {
    document.body.removeChild(this.customCursor);
    document.body.removeChild(this.hoverCursor1);
    document.body.style.cursor = ''; // Restore default cursor
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.querySelectorAll('[data-custom-cursor]').forEach((element) => {
      element.removeEventListener('mouseenter', this.handleMouseEnter);
      element.removeEventListener('mouseleave', this.handleMouseLeave);
    });
  }

  handleMouseMove = (event) => {
    this.customCursor.style.left = `${event.clientX}px`;
    this.customCursor.style.top = `${event.clientY}px`;
    this.hoverCursor1.style.left = `${event.clientX}px`;
    this.hoverCursor1.style.top = `${event.clientY}px`;
  }

  // Event handler for mouse enter
  handleMouseEnter = () => {
    this.customCursor.style.display = 'none';
    this.hoverCursor1.style.display = 'block';
  }

  // Event handler for mouse leave
  handleMouseLeave = () => {
    this.customCursor.style.display = 'block';
    this.hoverCursor1.style.display = 'none';
  }

  render() {
    return null; // The component doesn't render any visible content
  }
}

export default CustomCursor;

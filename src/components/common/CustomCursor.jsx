import { Component } from 'react';
import MouseImg from "../img/legomouse.png";
import HoverMouseImg1 from "../img/legomousehover.png";
import MouseImg2 from "../img/woodmouse.png";
import HoverMouseImg2 from "../img/woodmousehover.png";
import MouseImg3 from "../img/cheesemouse.png";
import HoverMouseImg3 from "../img/cheesemousehover.png";
import MouseImg4 from "../img/yinyangmouse.png";
import HoverMouseImg4 from "../img/yinyangmousehover.png";
import MouseImg5 from "../img/cloudmouse.png";
import HoverMouseImg5 from "../img/cloudmousehover.png";
import MouseImg6 from "../img/chocolatemouse.png";
import HoverMouseImg6 from "../img/chocolatemousehover.png";

// Utility function to detect mobile devices
const isMobileDevice = () => {
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

class CustomCursor extends Component {
  constructor(props) {
    super(props);
    let randomNumber = Math.floor(Math.random() * 6);

    this.customCursor = new Image();
    this.hoverCursor1 = new Image();

    const cursorSets = [
      [MouseImg, HoverMouseImg1],
      [MouseImg2, HoverMouseImg2],
      [MouseImg3, HoverMouseImg3],
      [MouseImg4, HoverMouseImg4],
      [MouseImg5, HoverMouseImg5],
      [MouseImg6, HoverMouseImg6]
    ];

    this.customCursor.src = cursorSets[randomNumber][0];
    this.hoverCursor1.src = cursorSets[randomNumber][1];

    [this.customCursor, this.hoverCursor1].forEach(cursor => {
      cursor.style.position = 'fixed';
      cursor.style.pointerEvents = 'none';
      cursor.style.width = '28px';
      cursor.style.height = '28px';
      cursor.style.zIndex = '9999';
    });

    this.hoverCursor1.style.display = 'none';
  }

  createSparkle = (x, y) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle-trail';
    sparkle.style.left = `${x - 6}px`;
    sparkle.style.top = `${y - 6}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => {
      sparkle.style.opacity = '0';
      sparkle.style.transform = 'scale(0.5)';
    }, 10);
    setTimeout(() => {
      if (sparkle.parentNode) sparkle.parentNode.removeChild(sparkle);
    }, 500);
  }

  componentDidMount() {
    if (!isMobileDevice()) {
      document.body.appendChild(this.customCursor);
      document.body.appendChild(this.hoverCursor1);
      document.body.style.cursor = 'none';

      document.addEventListener('mousemove', this.handleMouseMove);
      this.updateHoverListeners();

      // MutationObserver to auto-detect new elements added/removed in DOM
      this.observer = new MutationObserver(() => {
        this.updateHoverListeners();
      });
      this.observer.observe(document.body, { childList: true, subtree: true });
    }
  }

  componentWillUnmount() {
    if (!isMobileDevice()) {
      if (document.body.contains(this.customCursor)) {
        document.body.removeChild(this.customCursor);
      }
      if (document.body.contains(this.hoverCursor1)) {
        document.body.removeChild(this.hoverCursor1);
      }
      document.body.style.cursor = '';

      document.removeEventListener('mousemove', this.handleMouseMove);

      if (this.observer) {
        this.observer.disconnect();
      }
    }
  }

  handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    this.customCursor.style.left = `${clientX}px`;
    this.customCursor.style.top = `${clientY}px`;
    this.hoverCursor1.style.left = `${clientX}px`;
    this.hoverCursor1.style.top = `${clientY}px`;
    this.createSparkle(clientX, clientY);
  };

  handleMouseEnter = () => {
    this.customCursor.style.display = 'none';
    this.hoverCursor1.style.display = 'block';
  };

  handleMouseLeave = () => {
    this.customCursor.style.display = 'block';
    this.hoverCursor1.style.display = 'none';
  };

  updateHoverListeners = () => {
    document.querySelectorAll('[data-custom-cursor]').forEach((element) => {
      element.removeEventListener('mouseenter', this.handleMouseEnter);
      element.removeEventListener('mouseleave', this.handleMouseLeave);
      element.addEventListener('mouseenter', this.handleMouseEnter);
      element.addEventListener('mouseleave', this.handleMouseLeave);
    });
  };

  render() {
    return null;
  }
}

export default CustomCursor;

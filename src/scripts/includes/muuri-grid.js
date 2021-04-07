import Muuri from 'muuri';
import gsap from 'gsap';

const createGrid = () => {
  window.grid = new Muuri('.grid', {
    layout: {
      fillGaps: true
    }})

  const gridElement = document.querySelector('.grid');
  window.grid.on('layoutEnd', () => gsap.to(gridElement, {opacity: 1, duration: .250}))
};

const destroyGrid = () => {
  window.grid.destroy();
  window.grid = null;
}

export {
  createGrid,
  destroyGrid,
}

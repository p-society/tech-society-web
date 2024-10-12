// @ts-expect-error
import g1 from "../assets/gallery/1.png";
import g2 from "../assets/gallery/2.png";
import g3 from "../assets/gallery/3.png";
import g4 from "../assets/gallery/4.png";
import g5 from "../assets/gallery/5.png";
import g6 from "../assets/gallery/6.png";
import g7 from "../assets/gallery/7.png";
import g8 from "../assets/gallery/8.png";
import g9 from "../assets/gallery/9.png";
import g10 from "../assets/gallery/10.png";
import g12 from "../assets/gallery/12.png";
export const photos = [
  {
    src: g1,
    width: 600,
    height: 400,
  },
  {
    src: g2,
    width: 600,
    height: 400,
  },
  {
    src: g3,
    width: 600,
    height: 400,
  },
  {
    src: g4,
    width: 600,
    height: 400,
  },
  {
    src: g5,
    width: 600,
    height: 400,
  },
  {
    src: g6,
    width: 600,
    height: 400,
  },
  {
    src: g7,
    width: 600,
    height: 400,
  },
  {
    src: g8,
    width: 600,
    height: 400,
  },
  {
    src: g9,
    width: 600,
    height: 400,
  },
  {
    src: g10,
    width: 600,
    height: 400,
  },
  {
    src: g12,
    width: 600,
    height: 400,
  },
];

// Function to generate a random width based on a maximum value
function getRandomWidth(maxWidth = 900) {
  return Math.floor(Math.random() * (maxWidth - 100 + 1)) + 100; // Random value between 100 and maxWidth
}

function getRandomHeight(aspectRatio) {
  const width = getRandomWidth();
  return Math.floor(width / aspectRatio);
}

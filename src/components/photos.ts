export const photos = [
  {
    src: 'https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fHww',
    width: getRandomWidth(),
    height: getRandomHeight(4 / 3)
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fHww',
    width: getRandomWidth(),
    height: getRandomHeight(4 / 3)
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fHww',
    width: getRandomWidth(),
    height: getRandomHeight(4 / 3)
  },  {
    src: 'https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fHww',
    width: getRandomWidth(),
    height: getRandomHeight(4 / 3)
  },  {
    src: 'https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fHww',
    width: getRandomWidth(),
    height: getRandomHeight(4 / 3)
  },  {
    src: 'https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fHww',
    width: getRandomWidth(),
    height: getRandomHeight(4 / 3)
  },  {
    src: 'https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fHww',
    width: getRandomWidth(),
    height: getRandomHeight(4 / 3)
  },  {
    src: 'https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fHww',
    width: getRandomWidth(),
    height: getRandomHeight(4 / 3)
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

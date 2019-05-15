import axios from 'axios';

const loadPinsForBoard = boardId => new Promise((resolve, reject) => {
  axios.get('../db/pins.json')
    .then((resp) => {
      const allPins = resp.data.pins;
      // filter the pins
      console.error(boardId, 'boardId inside pinsData');
      const matchingPins = allPins.filter(pin => pin.boardId === boardId);
      // resolve the filtered pins
      resolve(matchingPins);
    })
    .catch(err => reject(err));
});
// has two arguments - success/failure or passed as resolve/reject (part of the constructor)
export default { loadPinsForBoard };

import util from '../../helpers/util';
import boardsData from '../../helpers/data/boardsData';
import pins from '../pins/pins';
import './boards.scss';

let writeBoards = [];

const seePinDiv = (e) => {
  // e.preventDefault(e);
  const boardId = e.target.closest('.card').id;
  console.error('you clicked a btn', boardId);
  document.getElementById('boards-page').classList.add('hide');
  document.getElementById('pins-page').classList.remove('hide');
  pins.initPins(boardId);
};

const bindEvents = () => {
  const allBtns = document.getElementsByClassName('see-pins');
  for (let i = 0; i < allBtns.length; i += 1) {
    allBtns[i].addEventListener('click', seePinDiv);
  }
};

const boardDomBuilder = () => {
  let domString = '';
  writeBoards.forEach((board) => {
    domString += `
    <div class="col-3">
      <div id="${board.id}" class="mt-2 p-2 card border-danger justify-content-center" style="height: 100px;">
        <p class="row text-center m-auto">${board.name}</p>
        <button class="btn btn-success w-25 m-auto see-pins">Pins</button>
      </div>
    </div>`;
  });
  util.printToDom('user-boards', domString);
  bindEvents();
};

const initBoards = () => {
  boardsData.loadBoards()
    .then((resp) => {
      const dataResults = resp.data.boards;
      writeBoards = dataResults;
      boardDomBuilder();
    })
    .catch(err => console.error(err));
};

export default { initBoards, boardDomBuilder };

import util from '../../helpers/util';
import boardsData from '../../helpers/data/boardsData';
import './boards.scss';

let writeBoards = [];

const boardDomBuilder = () => {
  let domString = '';
  writeBoards.forEach((board) => {
    domString += `
    <div class="col-3">
      <div id="${board.id}" class="mt-2 p-2 card border-danger justify-content-center" style="height: 100px;">
        <p class="row text-center m-auto">${board.name}</p>
      </div>
    </div>`;
  });
  util.printToDom('user-boards', domString);
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

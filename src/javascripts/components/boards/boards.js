// import util from '../../helpers/util';
import boardsData from '../../helpers/data/boardsData';

// const boardsArr = [];

const initBoards = () => {
  console.error('hi from boards');
  boardsData.loadBoards()
    .then((resp) => {
      console.error(resp.data.boards);
    })
    .catch(err => console.error(err));
};

export default { initBoards };

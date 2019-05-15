import axios from 'axios';

const loadBoards = () => axios.get('../db/boards.json');
// this return is a call. what it actually returns is the promise itself
// this is setting the call up, but to acutally use it you need the .then and .catch to actually use
export default { loadBoards };

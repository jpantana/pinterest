import $ from '../../../node_modules/jquery';

const printToDom = (divId, textToPrint) => {
  const selectedDiv = $(divId)[0];
  selectedDiv.innerHTML = textToPrint;
};

export default { printToDom };

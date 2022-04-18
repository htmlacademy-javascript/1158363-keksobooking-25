const body = document.querySelector('body');
const successMessage = body.querySelector('#success').content.querySelector('.success');
const errorMessage = body.querySelector('#error').content.querySelector('.error');
const map = body.querySelector('.map');

const messageSuccess = () => {
  const messageNode = successMessage.cloneNode(true);
  body.appendChild(messageNode);
};

const messageError = () => {
  const messageNode = errorMessage.cloneNode(true);
  const button = messageNode.content.querySelector('.error__button');
  button.on('click', () => {
    messageNode.remove();
  });
  body.appendChild(messageNode);
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 1000;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  map.append(alertContainer);
};

export { messageSuccess, messageError, showAlert };

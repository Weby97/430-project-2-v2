const loadMessagesFromServer = () => {
  // sendAjax('GET', '/getMessages', null, (data) => {
  //     ReactDOM.render(
  //         <DomoList domos={data.domos} />, document.querySelector("#domos")
  //     );
  // });
};

const setup = function(csrf) {

  ReactDOM.render(<Nav csrf={csrf} />, document.getElementById('nav'));
  ReactDOM.render(<HomeWindow />, document.getElementById('message'));
  ReactDOM.render(<Music />, document.getElementById('music'));

  //loadMessagesFromServer();
};

const getToken = () => {
  sendAjax('GET', '/getToken', null, (result) => {
      setup(result.csrfToken);
  });
};

$(document).ready(function() {
  getToken();
});

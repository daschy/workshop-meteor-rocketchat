const RocketIS2017 = (function() {
  function RocketIS2017(message) {
    message.msg = 'redbabel was here '+message.msg;
    message.html = 'redbabel was here '+message.html;
    return message;
  }
  return RocketIS2017;
})();
// console.log(RocketChat.callbacks);
RocketChat.callbacks.add('renderMessage', RocketIS2017, RocketChat.callbacks.priority.HIGH - 2, 'RocketIS2017');

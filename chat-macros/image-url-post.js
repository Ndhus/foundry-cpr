let userImg = game.user.character.img;
let imageLink = '';
let imageText = '';

let dialogContent = `
<div style="height: 425px;">
  <img src="${userImg}" height="50" style="border-radius: 25px;">
  <p>
    <span style="font-family: ShareTech Mono;">
      <p>
        <label for='postText'>Text:</label>
        <textarea id="postText" style="width: 100%; height: 150px; padding: 12px 20px;
  box-sizing: border-box;
  border: 1px solid #000;
  border-radius: 2px;
  background-color: #222929;
  font-size: 16px; color: #fff;
  resize: none;"></textarea>
      </p>
      <p>
        <label for='postUrl'>URL:</label>
        <textarea id="postUrl" style="width: 100%; height: 150px; padding: 12px 20px;
  box-sizing: border-box;
  border: 1px solid #000;
  border-radius: 2px;
  background-color: #222929;
  font-size: 16px; color: #fff;
  resize: none; margin-bottom: 4px;"></textarea>
      </p>
    </span>
  </p>
  </p>
</div>
`;

function sendMessage(html) {
  imageLink = html.find('#postUrl').val();
  imageText = html.find('#postText').val();

  ChatMessage.create(
    {
      user: game.user._id,
      speaker: ChatMessage.getSpeaker(),
      content: `<i>${imageText}</i><img src="${imageLink}">`,
    },
    {},
  );
}

new Dialog({
  title: 'Create Image Text',
  content: dialogContent,
  buttons: {
    select: {
      label: 'Send Message',
      callback: (html) => sendMessage(html),
    },
  },
}).render(true);

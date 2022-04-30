import React from "react";


function ChatCard(props) {
  return (
    <div className="chat-card">
      <div className="Chat-dp">
        <img
          className="dp-img"
          alt="display-pic"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-fsPL-1Rlg-J2tg0Kj_UeSjqQxE9CN5Qyg&usqp=CAU"
        ></img>
      </div>
      <div className="chat-detail">
        <h3 className="chat-name">Balaji</h3>
        <p className="chat-message">Hi how are you</p>
      </div>
      <div className="chat-utility">
        <p className="chat-time">9:18pm</p>
        <p>
          M<span>ML</span>
        </p>
      </div>
    </div>
  );
}

function ChatList() {
  return (
    <div className="chat-list">
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
    </div>
  );
}

function SingleMessge(props) {
  return (
    <div className={props.location}>
      <div className="message">
        <p className="message-text">
          messages component ddddddddddddddddd dddddddddddddddddddddddd
          ddddddddddddddddddddddddd dddddddd dddddd ddddd
        </p>
        <div className="message-time">
          <p>11.32pm</p>
        </div>
      </div>
    </div>
  );
}

function Messages() {
  return (
    <div className="chat-msg">
      <SingleMessge location="left" />
      <SingleMessge location="right" />
      <SingleMessge location="right" />
      <SingleMessge location="left" />
      <SingleMessge location="left" />
      <SingleMessge location="right" />
      <SingleMessge location="right" />
    </div>
  );
}

function TypingBar() {
  return (
    <div className="typing-bar">
      <p className="tb-emoji">🙂</p>
      <input className="typing-area" type="text" placeholder="Message..." />
      <p className="tb-picture">🌆</p>
    </div>
  );
}

function MainChat(params) {
  return (
    <div className="chat">
      <div className="first-column">
        <div className="chat-list-header">
          <p className="chat-list-header-name">Chats</p>
        </div>
        <ChatList />
      </div>
      <div className="second-column">
        <div className="chat-msg-header">
          <p className="chat-msg-header-name">Balaji</p>
        </div>
        <Messages />
        <TypingBar />
      </div>
    </div>
  );
}

export default MainChat;

function Messages({ messages }) {
  return (
    <div>
      {messages.map(({ text, user, _id, timestamp, photo }) => (
        <div className="message" key={_id}>
          <img src={`${photo}`} className="profilephoto" alt="profilephoto" />
          <div className="messageInfo">
              <div className="interaction">
                  <span className="nickname">{`${user}`}</span>
                  <span className="time">{`${timestamp}`}</span>
              </div>
              <p className="messageText">{`${text}`}</p>
          </div>
        </div>
        
        // <li key={_id}>{`${user}: ${text}`}</li>
      ))}
    </div>
  );
}

export default Messages;
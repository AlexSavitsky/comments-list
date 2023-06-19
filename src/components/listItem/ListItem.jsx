import "./style.scss";

const ListItem = ({ item: { id, body, postId, user }, handleDelete }) => {
  return (
    <div className="list-item">
      <div className="list-item__header">
        <div className="header__title">
          <span className="title-initials">{user.username[0].toUpperCase()}</span>
          <span className="title-user-name">{user.username}</span>
        </div>
        <button className="delete-btn" onClick={() => {handleDelete(id)}}>X</button>
      </div>
      <div className="list-item__body">{body}</div>
    </div>
  );
};

export default ListItem;

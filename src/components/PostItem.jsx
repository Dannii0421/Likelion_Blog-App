const PostItem = ({title, body, username, email }) => {
    return (
    <div className="postItem">
        <h2> {title} </h2>
        <p>{body}</p>
        <div className="userInfo">
            <div className="avatar">{username[0]}</div>
            <div className="name">{username}</div>
            <div className="email">{email}</div>
        </div>
    </div>
    );        
};

export default PostItem;
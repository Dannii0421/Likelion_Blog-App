import {useState, useEffect} from 'react';
import Header from './components/Header';
import PostItem from './components/PostItem';
import './App.css';

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const USERS_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [posts, setPosts] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [isPostsError, setIsPostsError] = useState(false);

  const [users, setUsers] = useState([]);
  const [isUsersLoading, setIsUsersLoading] = useState(false);
  const [isUsersError, setIsUsersError] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
      setIsPostsLoading(true);
      const response = await fetch(POSTS_URL);
      const json = await response.json();
    setPosts(json);
    setIsPostsLoading(false);
    } catch {
      setIsPostsError(true);
      setIsPostsLoading(false);
    }
  }
    fetchPosts(); 
  }, []);

  useEffect(() => {
    async function fetchUsers() {
      try {
      setIsUsersLoading(true);
      const response = await fetch(USERS_URL);
      const json = await response.json();
      setUsers(json);
      setIsUsersLoading(false);
    } catch {
      setIsUsersError(true);
      setIsUsersLoading(false);
    }
  }
    fetchUsers();
  }, []);

  if (isPostsLoading || isUsersLoading ) {
    <div className="blogContainer">
    <Header />
    return <div>로딩중입니다...</div>
    <br />
    </div>
  }

  if (isPostsError || isUsersError) {
    return (
      <div className="blogContainer">
        <Header />
        <div>에러가 발생했습니다...</div>
        <br />
        <div>새로고침을 해주세요...</div>
      </div>
    )
  }

  return (
    <div className="blogContainer">
    <Header />
    {posts.map (({ id, title, body, userId }) => {
      console.log(userId);
      const user = users.find((user) => user.id === userId);
    
      console.log(user);
      return (
      <PostItem
        key={id} 
        title={title} 
        body={body} 
        username={user.username}
        email={user.email}
        />
      );
    })}
    </div>
  );
};

export default App;

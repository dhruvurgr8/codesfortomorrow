import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, removePost, setCurrentPage } from "./redux/testReducer";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { posts, loading, currentPage, postsPerPage } = useSelector(
    (state) => state.posts
  );
  console.log(posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleRemovePost = (id) => {
    dispatch(removePost(id));
  };

  const paginate = (pageNumber) => dispatch(setCurrentPage(pageNumber));

  return (
    <div className="App">
      <div className="card-container">
        {currentPosts.map((post) => (
          <Card key={post.id} post={post} removePost={handleRemovePost} />
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;

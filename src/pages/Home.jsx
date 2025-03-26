import React from "react";
import Post from "../components/Post";
import "./Home.css";

const Home = () => {
  const posts = [
    {
      id: 1,
      username: "yashvardhanchaudhri",
      profileImage: "pfp1.jpg",
      postImage: "post1.jpg",
      caption: "Hotter than the sun",
      likes: 120,
      comments: [{ username: "arshululululu", text: "sher" }],
      postedTime: "2h"
    },
    {
      id: 2,
      username: "khan.ayan598_",
      profileImage: "pfp2.jpg",
      postImage: "post2.jpg",
      caption: "If you are bad then I am your dad.",
      likes: 85,
      comments: [{ username: "yashvardhanchaudhri", text: "You are not my dad" }],
      postedTime: "3h"
    }
  ];

  return (
    <div className="home">
      <div className="feed">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
      <div className="suggested-sidebar">
        <div className="suggested-section">
          <h4>Suggested for you</h4>
          <div className="suggested-account">
            <img src="/profile/pfp9.jpg" alt="suggested" />
            <div>
              <strong>aadvika05_</strong>
              <span>Followed by others</span>
            </div>
            <button>Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

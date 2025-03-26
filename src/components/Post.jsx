import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaRegComment, FaPaperPlane, FaEllipsisH } from "react-icons/fa";
import "./Post.css";

const Post = ({ username, profileImage, postImage, caption, likes, comments, postedTime }) => {
  const [liked, setLiked] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likes);
  const [newComment, setNewComment] = useState("");
  const [postComments, setPostComments] = useState(comments);
  const [showHeartAnimation, setShowHeartAnimation] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 400);
    }
    setLiked(!liked);
    if (!liked) {
      setCurrentLikes(currentLikes + 1);
    } else {
      setCurrentLikes(currentLikes - 1);
    }
  };

  const handleDoubleClick = () => {
    if (!liked) {
      setLiked(true);
      setCurrentLikes(currentLikes + 1);
    }
    setShowHeartAnimation(true);
    setTimeout(() => {
      setShowHeartAnimation(false);
    }, 800);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setPostComments([...postComments, { username: "You", text: newComment }]);
      setNewComment("");
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={`/profile/${profileImage}`} alt="profile" className="post-profile-img" />
        <div className="post-user-info">
          <span className="username">{username}</span>
          <span className="posted-time">• {postedTime}</span>
        </div>
        <FaEllipsisH className="post-options" />
      </div>
      <div className="post-img-container" onDoubleClick={handleDoubleClick}>
        <img src={`/posts/${postImage}`} alt="post" className="post-img" />
        {showHeartAnimation && <FaHeart className="heart-animation" />}
      </div>
      <div className="post-actions">
        <div 
          className={`like-icon ${liked ? 'liked' : ''} ${animate ? 'heart-animation' : ''}`} 
          onClick={handleLike}
        >
          <FaHeart color={liked ? '#e1306c' : '#ccc'} size={24} />
        </div>
        <FaRegComment className="icon" />
        <FaPaperPlane className="icon" />
      </div>
      <div className="like-count">{currentLikes} likes</div>
      <div className="post-caption">
        <strong>{username}</strong> {caption}
      </div>
      <div className="post-comments">
        {postComments.map((comment, index) => (
          <div key={index}>
            <strong>{comment.username}</strong> {comment.text}
          </div>
        ))}
      </div>
      <div className="add-comment">
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Post</button>
      </div>
    </div>
  );
};

export default Post;

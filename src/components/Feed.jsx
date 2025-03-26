import React from "react";
import Post from "../components/Post";
import SuggestedAccounts from "../components/SuggestedAccounts";

const Feed = () => {
  return (
    <div className="flex justify-center gap-8 mt-6">
      <div>
        <Post
          username="yashvardhanchaudhri"
          profileImage="/pfp1.jpg"
          postImage="/post1.jpg"
          caption="Enjoy the view!"
          initialLikes={120}
          initialComments={["Amazing!", "Wow, beautiful!"]}
        />
        <Post
          username="ayankhan"
          profileImage="/pfp2.jpg"
          postImage="/post2.jpg"
          caption="Chilling with friends"
          initialLikes={200}
          initialComments={["So cool!", "Love it!"]}
        />
      </div>
      <div className="hidden md:block w-[300px]">
        <SuggestedAccounts />
      </div>
    </div>
  );
};

export default Feed;

import React, { useRef, useState } from "react";

const Stories = () => {
  const stories = [
    { id: 1, username: "arshululululu", profileImage: "/profile/pfp3.jpg" },
    { id: 2, username: "yashvardhanchaudhri", profileImage: "/profile/pfp1.jpg" },
    { id: 3, username: "khan.ayan598_", profileImage: "/profile/pfp2.jpg" },
    { id: 4, username: "jeenarshivam", profileImage: "/profile/pfp4.jpg" },
    { id: 5, username: "pranav__04", profileImage: "/profile/pfp5.jpg" },
    { id: 6, username: "_avik1211_", profileImage: "/profile/pfp6.jpg" },
    { id: 7, username: "aaradhita.dey", profileImage: "/profile/pfp7.jpg" },
    { id: 8, username: "vihaandixit8", profileImage: "/profile/pfp8.jpg" },
  ];

  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScrollRight = () => {
    containerRef.current.scrollBy({ left: 100, behavior: "smooth" });
  };

  const handleScrollLeft = () => {
    containerRef.current.scrollBy({ left: -100, behavior: "smooth" });
  };

  const handleScroll = () => {
    setShowLeftArrow(containerRef.current.scrollLeft > 0);
    setShowRightArrow(
      containerRef.current.scrollLeft + containerRef.current.offsetWidth <
      containerRef.current.scrollWidth
    );
  };

  return (
    <div
      className="stories-container"
      ref={containerRef}
      onScroll={handleScroll}
    >
      {stories.map((story) => (
        <div key={story.id} className="story">
          <img
            src={story.profileImage}
            alt={story.username}
            className="story-img"
          />
          <span className="story-name">{story.username}</span>
        </div>
      ))}
      {showLeftArrow && (
        <div
          className="stories-scroll-circle left"
          onClick={handleScrollLeft}
          style={{
            left: "calc(100% - 2 * 600px)",
            top: "62%",
            height: "40px",
            width: "40px",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            clipPath: "polygon(100% 50%, 0 0, 0 100%)"
          }}
        ></div>
      )}
      {showRightArrow && (
        <div
          className="stories-scroll-circle right"
          onClick={handleScrollRight}
          style={{
            right: "calc(100% - 1220px)",
            top: "62%",
            height: "40px",
            width: "40px",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            clipPath: "polygon(0 50%, 100% 0, 100% 100%)"
          }}
        ></div>
      )}
    </div>
  );
};

export default Stories;

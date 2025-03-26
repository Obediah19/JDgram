import React from "react";

const SuggestedAccounts = () => {
  const suggestions = [
    { username: "alex", profileImage: "/pfp1.jpg" },
    { username: "emma", profileImage: "/pfp2.jpg" },
    { username: "jason", profileImage: "/pfp1.jpg" },
    { username: "aadvika05_", profileImage: "profile/pfp9.jpg" },
  ];

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4">
      <h3 className="font-semibold mb-2">Suggested for you</h3>
      {suggestions.map((user, index) => (
        <div key={index} className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <img
              src={user.profileImage}
              alt={user.username}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="ml-2 font-semibold">{user.username}</span>
          </div>
          <button className="text-blue-500 font-semibold">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default SuggestedAccounts;

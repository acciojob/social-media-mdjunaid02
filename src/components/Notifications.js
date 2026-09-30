import React, { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  const refreshNotifications = () => {
    setNotifications([
      "New reaction on your post",
      "Someone created a new post",
      "You have a new notification"
    ]);
  };

  return (
    <main>
      <h2>Notifications</h2>

      <button
        className="button"
        onClick={refreshNotifications}
      >
        Refresh Notifications
      </button>

      <div className="notifications-list">
        {notifications.map((notification, index) => (
          <div className="notification" key={index}>
            {notification}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Notifications;
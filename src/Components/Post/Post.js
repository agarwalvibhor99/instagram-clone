import React from "react";
import styles from "./Post.module.css";
import Avatar from "@material-ui/core/Avatar";

const Post = ({ username, caption, imageUrl }) => {
  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <Avatar
          className={styles.postAvatar}
          alt="Abcd"
          src={"/static/images/avatar/1.jpg"}
        />

        <h3>{username}</h3>
      </div>
      <img className={styles.postImage} src={imageUrl} alt="Post" />
      <h4 className={styles.postCaption}>
        <strong>{username}:</strong> {caption}
      </h4>
    </div>
  );
};

export default Post;

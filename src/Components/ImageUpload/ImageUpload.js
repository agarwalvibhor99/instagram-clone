import React, { useState } from "react";
import styles from "./ImageUpload.module.css";
import { Button } from "@material-ui/core";
import { storage, db } from "../../firebase";
import firebase from "firebase";

const ImageUpload = ({ username }) => {
  const [caption, setCaption] = useState("");
  const [progess, setProgess] = useState(0);
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress bar
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgess(progress);
      },
      (error) => {
        console.log(error); //Not a user friendly message thats why console log
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("post").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username,
            });
            setProgess(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <div className={styles.imageUpload}>
      <progress value={progess} max="100" />
      <input
        type="text"
        placeholder="Enter a Caption.."
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
};

export default ImageUpload;

import React, { useState, useEffect } from "react";
import { firestore } from "../Firebase/index";
import queryString from "query-string";
import { Typography, Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import ReactHtmlParser from "react-html-parser";

const Blog = () => {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const { id } = queryString.parse(window.location.search);

    firestore
      .collection("Blogs")
      .where("id", "==", id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setBlog(doc.data());
          setLoading(false);
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  console.log(blog);

  if (loading)
    return (
      <div style={{ padding: "20px" }}>
        <h3>Loading...</h3>
      </div>
    );

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h1">{blog.title}</Typography>
      <Typography variant="h4">- {blog.author}</Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0",
        }}
      >
        <img
          src={blog.filePath}
          alt="blog-image"
          style={{ maxWidth: "100%" }}
        />
      </div>
      <Typography variant="body1">{ReactHtmlParser(blog.blog)}</Typography>
    </div>
  );
};

export default Blog;

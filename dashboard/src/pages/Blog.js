import React, { useState, useEffect } from "react";
import { firestore, storage } from "../Firebase/index";
import queryString from "query-string";
import { Typography, Button, TextField } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import { Editor } from "@tinymce/tinymce-react";
import Dropzone from "react-dropzone";
import { v4 as uuid4 } from "uuid";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogDetails, setBlogDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);

  const [blog, setBlog] = useState({});
  const [filePath, setFilePath] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [file, setFile] = useState([]);
  const [message, setMessage] = useState("");
  const [openSnack, setOpenSnack] = useState(false);

  const handleClick = () => {
    setOpenSnack(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  useEffect(() => {
    if (file.length > 0) {
      onSubmit();
    } else {
      console.log("N");
    }
  }, [file]);

  useEffect(() => {
    const { id } = queryString.parse(window.location.search);

    firestore
      .collection("Blogs")
      .where("id", "==", id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setBlogDetails(doc.data());
          setTitle(doc.data().title);
          setAuthor(doc.data().author);
          setFilePath(doc.data().filePath);
          setBlog(doc.data().blog);
          setLoading(false);
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const onSubmit = () => {
    if (file.length > 0) {
      file.forEach((file) => {
        const timeStamp = Date.now();
        var uniquetwoKey = uuid4();
        uniquetwoKey = uniquetwoKey + timeStamp;
        const uploadTask = storage
          .ref(`pictures/products/${uniquetwoKey}/${file.name}`)
          .put(file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            handleClick();
            setMessage(`Uploading ${progress} %`);
          },
          (error) => {
            setMessage(error);
            handleClick();
          },
          async () => {
            // When the Storage gets Completed
            const fp = await uploadTask.snapshot.ref.getDownloadURL();
            setFilePath(fp);
            handleClick();
            setMessage("File Uploaded");
          }
        );
      });
    } else {
      setMessage("No File Selected Yet");
    }
  };

  const deleteBlog = () => {
    const { id } = queryString.parse(window.location.search);
    firestore
      .collection("Blogs")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Blog successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const handleClickOpenWarning = () => {
    setOpen(true);
  };

  const handleCloseWarning = () => {
    setOpen(false);
  };

  const editBlog = () => {
    const { id } = queryString.parse(window.location.search);

    firestore
      .collection("Blogs")
      .doc(id)
      .set({
        id: id,
        filePath: filePath,
        title: title,
        author: author,
        blog: blog,
      })
      .then(() => {
        console.log("Document successfully written!");
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  const handleDrop = async (acceptedFiles) => {
    setFile(acceptedFiles.map((file) => file));
  };

  if (loading)
    return (
      <div style={{ padding: "20px" }}>
        <h3>Loading...</h3>
      </div>
    );

  if (isEditing)
    return (
      <div style={{ padding: "20px" }}>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={openSnack}
          autoHideDuration={2000}
          onClose={handleClose}
          message={message}
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
        <h3>Title</h3>
        <TextField
          style={{ margin: "1% 0" }}
          label="Blog Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h3>Author</h3>
        <TextField
          style={{ margin: "1% 0" }}
          label="Blog Author"
          fullWidth
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <h3>Blog</h3>
        <br></br>
        <div>
          <Editor
            apiKey="azhogyuiz16q8om0wns0u816tu8k6517f6oqgs5mfl36hptu"
            plugins="wordcount"
            value={blog}
            onEditorChange={(e) => setBlog(e)}
            init={{
              height: 600,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            //   onEditorChange={handleChangeEditor}
          />
        </div>
        <br></br>

        <div style={{ display: "flex", alignItems: "center" }}>
          <h3>Blog Image</h3>
          <br></br>
          {filePath !== "" ? (
            <Button
              style={{ marginLeft: "10px" }}
              variant="contained"
              color="primary"
              onClick={() => setFilePath("")}
            >
              Remove existing image
            </Button>
          ) : (
            <Dropzone onDrop={handleDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <Button
                    style={{ marginLeft: "10px" }}
                    size="large"
                    color="primary"
                    variant="outlined"
                  >
                    Upload Image
                  </Button>
                </div>
              )}
            </Dropzone>
          )}
        </div>

        <br></br>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={editBlog}
        >
          Submit
        </Button>
        <br></br>
      </div>
    );

  if (!isEditing)
    return (
      <div style={{ padding: "20px" }}>
        <div
          style={{
            margin: "10px auto",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            onClick={() => setIsEditing((prev) => !prev)}
          >
            Edit Blog
          </Button>
          <Button
            variant="contained"
            onClick={handleClickOpenWarning}
            style={{ marginLeft: "10px" }}
          >
            Delete Blog
          </Button>
          <Dialog
            open={open}
            onClose={handleCloseWarning}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Are you sure you want to delete this blog?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                This action <strong>cannot</strong> be undone.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseWarning} color="primary">
                Cancel
              </Button>
              <Button
                onClick={handleCloseWarning}
                color="primary"
                autoFocus
                onClick={deleteBlog}
                component={Link}
                to="/app/allblogs"
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <Typography variant="h1">{title}</Typography>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
        >
          <img
            src={blogDetails.authorPhoto}
            alt="image"
            style={{
              width: "28px",
              borderRadius: "50%",
              height: "28px",
              marginRight: "5px",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6">{author}</Typography>
            <Typography
              variant="body2"
              style={{ fontSize: "12px", marginTop: "-2px" }}
            >
              {blogDetails.authorEmail}
            </Typography>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px 0",
          }}
        >
          <img src={filePath} alt="blog-image" style={{ maxWidth: "100%" }} />
        </div>
        <Typography variant="body1">{ReactHtmlParser(blog)}</Typography>
      </div>
    );
};

export default Blog;

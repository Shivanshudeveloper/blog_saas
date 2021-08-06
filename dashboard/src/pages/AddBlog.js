import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { Editor } from "@tinymce/tinymce-react";
import { firestore, storage } from "../Firebase/index";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import { v4 as uuid4 } from "uuid";
import Dropzone from "react-dropzone";

export default function AddBlog() {
  const [blog, setBlog] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState([]);
  const [openSnack, setOpenSnack] = useState(false);
  const [filePath, setFilePath] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleClick = () => {
    setOpenSnack(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  React.useEffect(() => {
    if (file.length > 0) {
      onSubmit();
    } else {
      console.log("N");
    }
  }, [file]);

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

  const handleDrop = async (acceptedFiles) => {
    setFile(acceptedFiles.map((file) => file));
  };

  const addBlog = async () => {
    const timeStamp = Date.now();
    var uniquetwoKey = uuid4();
    uniquetwoKey = uniquetwoKey + timeStamp;
    firestore
      .collection("Blogs")
      .doc(uniquetwoKey)
      .set({
        id: uniquetwoKey,
        filePath: filePath,
        title: title,
        author: author,
        blog: blog,
      })
      .then(() => {
        console.log("Document successfully written!");
        handleClick();
        setMessage("Docuement Saved");
        setAuthor("");
        setFilePath("");
        setTitle("");
        setBlog("");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };
  return (
    <div>
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
      <div style={{ margin: "1%" }}>
        <h1>Add a blog</h1>
        <br></br>
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
        <h3>Description</h3>
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
        <center>
          <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <Button
                  style={{ marginTop: "10px" }}
                  size="large"
                  color="primary"
                  variant="outlined"
                  fullWidth
                >
                  Upload Image
                </Button>
              </div>
            )}
          </Dropzone>
        </center>
        <br></br>
        <Button variant="contained" color="primary" fullWidth onClick={addBlog}>
          Submit
        </Button>
        <br></br>
      </div>
    </div>
  );
}

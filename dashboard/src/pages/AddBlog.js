import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { Editor } from '@tinymce/tinymce-react';

export default function AddBlog() {
    const [blog, setBlog] = useState("")
    return (
        <div>
            <div style={{margin: '1%'}}>
                <h1>Add a blog</h1>
                <br></br>
                <h3>Title</h3>
                <TextField style={{margin: '1% 0'}}  label="Blog Title" fullWidth/>
                <h3>Author</h3>
                <TextField style={{margin: '1% 0'}}  label="Blog Author" fullWidth/>
                <h3>Description</h3>
                <br></br>
                <div>
                <Editor
                  apiKey="azhogyuiz16q8om0wns0u816tu8k6517f6oqgs5mfl36hptu"
                  plugins="wordcount"
                  value={blog}
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
                <Button variant="contained" color="primary" fullWidth>Submit</Button>
                <br></br>
            </div>
        </div>
    )
}

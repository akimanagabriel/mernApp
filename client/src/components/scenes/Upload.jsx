import React from "react";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Dropzone from "react-dropzone";
import { useState } from "react";
import UploadIcon from "@mui/icons-material/Upload";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoIcon from "@mui/icons-material/PhotoSizeSelectActual";

function Upload() {
  const [file, setFile] = useState(null);

  const handleDrop = (acceptedFiles) => {
    var formdata = new FormData();
    formdata.append("image", file);

    fetch("http://localhost:3001/upload", {
      method: "POST",
      body: formdata,
    })
      .then((response) => response.json())
      .then((result) => {
        setFile(null);
        alert(`Image ${result.filename} uploaded successfully`);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const isMobile = useMediaQuery("(max-width: 800px)");

  return (
    <>
      <Stack direction={isMobile ? "column" : "row"} gap="1em" p={"2em 3em"}>
        <Box>
          <Typography variant="h6" color={"primary"}>
            Upload your picture here
          </Typography>
          <Typography variant="body2" mt={"1em"}>
            Upload your file or drag and drop your file here
          </Typography>
        </Box>
        {/* ANOTHER SIDE */}
        <Stack gap={"1em"}>
          <Box>
            <Dropzone onDrop={(acceptedFiles) => setFile(acceptedFiles[0])}>
              {(props) => (
                <Box
                  {...props.getRootProps()}
                  sx={{
                    border: "2px dashed",
                    p: "2em 5em",
                    borderRadius: "1em",
                    cursor: "grab",
                  }}
                >
                  <input {...props.getInputProps()} />
                  <Stack
                    width={"100%"}
                    direction={"row-reverse"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    gap={".4em"}
                  >
                    <Typography>
                      {file ? file.name : "Drag and drop file here"}
                    </Typography>
                    <Box>
                      <IconButton>
                        <PhotoIcon color="primary" />
                      </IconButton>
                    </Box>
                  </Stack>
                </Box>
              )}
            </Dropzone>
          </Box>
          <Box>
            {file ? (
              <Box display={"flex"} gap="1em">
                <Button
                  variant="contained"
                  startIcon={<UploadIcon />}
                  onClick={handleDrop}
                >
                  upload
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => setFile(null)}
                >
                  clear
                </Button>
              </Box>
            ) : null}
          </Box>
        </Stack>
      </Stack>
    </>
  );
}

export default Upload;

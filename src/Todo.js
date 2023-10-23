import React, { useState } from "react";
import { IconButton, Box, Button } from "@material-ui/core";
import { DeleteOutline, Star, StarOutline } from "@material-ui/icons";
import "./App.css";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

function Todo(props) {
  const [item, setItem] = useState(props.item);
  const [readOnly, setReadOnly] = useState(true);

  const deleteEventHandler = () => {
    props.delete(item);
  };
  const offReadOnlyMode = () => {
    setReadOnly(false);
  };

  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
      props.update(item);
    }
  };

  const editEventHandler = (e) => {
    const thisItem = { ...item };
    thisItem.title = e.target.value;
    setItem(thisItem);
  };

  return (
    <Button className="todoBtn" href="/detail">
      <Box className="todoBox">
        {/* <ImageListItem key={item.img} */}
        <ImageListItem key={1} sx={{ width: 400 }}>
          <img src="img/room.jpg" alt="스터디룸 이미지" loading="lazy" />
          <IconButton
            aria-label="Delete"
            onClick={deleteEventHandler}
            className="deleteBtn"
          >
            <DeleteOutline />
          </IconButton>
          <ImageListItemBar
            className="imageListBar"
            title="봄봄 스터디 ★4.5"
            subtitle="경북 구미시 대학로 61"
            position="below"
            style={{ padding: 10 }}
          ></ImageListItemBar>
        </ImageListItem>
      </Box>
    </Button>
  );
}

export default Todo;

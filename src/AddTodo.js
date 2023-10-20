import { Button, Grid, Input, Paper, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import selectBox from "./SelectBox";

function AddTodo({ add }) {
  const [item, setItem] = useState({ title: "" });

  const onInputChange = (e) => {
    const thisItem = { ...item }; // 객체를 복제하여 불변성 유지
    thisItem.title = e.target.value;
    setItem(thisItem);
  };

  const onButtonClick = () => {
    add(item);
    setItem({ title: "" }); // text 값을 추가하고 입력 필드 초기화
  };

  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      onButtonClick();
    }
  };
  useEffect(() => {
    selectBox(); // 시/도/군/구 selectBOX 생성함수를 컴포넌트가 로드 되자마자 실행해준다.
  }, []);
  return (
    <Paper style={{ margin: 8, padding: 8 }}>
      <Grid container className="searchBar">
        <Grid item style={{ paddingRight: 8 }}>
          <select name="sido1" id="sido1"></select>
          <select name="gugun1" id="gugun1"></select>
        </Grid>
        <Grid item className="addBtnCover">
          <Button
            className="addBtn"
            color="primary"
            variant="outlined"
            onClick={onButtonClick}
          >
            공간 등록
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default AddTodo;

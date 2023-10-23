import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
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

  const onButtonClick1 = () => {
    var modalWrap = document.getElementById("modalWrap");
    modalWrap.style.display = "block";
  };
  const closeModal = () => {
    var modalWrap = document.getElementById("modalWrap");
    modalWrap.style.display = "none";
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
    <Paper style={{ padding: 4 }}>
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
            onClick={onButtonClick1}
          >
            공간 등록
          </Button>
        </Grid>
      </Grid>

      <Grid container id="modalWrap" maxWidth="xs" style={{ marginTop: "8%" }}>
        <div id="modalBack">
          <form noValidate>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={10}>
                <Typography component="h1" variant="h5">
                  새 공간 등록
                </Typography>
              </Grid>

              <Grid item xs={10}>
                <Typography variant="h6">공간이름</Typography>

                <TextField
                  autoComplete="placename"
                  name="placename"
                  variant="outlined"
                  required
                  fullWidth
                  id="placename"
                  label="공간명"
                />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h6">주소 입력 </Typography>

                <select name="sido1" id="sido1"></select>
                <select name="gugun1" id="gugun1"></select>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  autoComplete="address"
                  name="address"
                  variant="outlined"
                  required
                  fullWidth
                  id="address"
                  label="상세 주소"
                />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h6">공간 이미지 등록 </Typography>
                <input autoComplete="address" id="address" type="file"></input>
              </Grid>

              <Grid item xs={5}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={onButtonClick}
                >
                  등록
                </Button>
              </Grid>
              <Grid item xs={5}>
                <Button
                  type="reset"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={closeModal}
                >
                  취소
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Paper>
  );
}

export default AddTodo;

import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  Paper,
} from "@material-ui/core";
import React from "react";
import { mypage, signout } from "./service/ApiService";
import swal from "sweetalert";

function MyReserve() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const uid = data.get("uid");
    const username = data.get("username");
    const password = data.get("password");
    const phone = data.get("phone");

    // ApiService의 회원정보 수정 함수 호출
    mypage({
      uid: uid,
      username: username,
      password: password,
      phone: phone,
    }).then((response) => {
      // 재 로그인
      window.location.href = "/login";
    });
  };

  //navigationBar
  var navigationBar = (
    <AppBar position="static">
      <Toolbar>
        <Grid justifyContent="space-between" container>
          <Grid item>
            <Button href="/">
              <Typography variant="h6" style={{ color: "white" }}>
                공간예약 플랫폼
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button color="inherit" onClick={signout}>
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

  var modifyBar = (
    <AppBar position="static">
      <Toolbar className="modifyBar">
        <Grid justifyContent="flex-start" container>
          <Grid item>
            <Button href="/myreserve">
              <strong>진행중인 예약</strong>
            </Button>
          </Grid>
          <Grid item>
            <Button href="/mypage">회원정보수정</Button>
          </Grid>
          <Grid item>
            <Button href="/withdraw">회원탈퇴</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

  var number = document.createElement("input");
  number.type = "range";
  number.min = "0";
  number.max = "5";

  //진행중인 예약 없을경우
  var noReserve = (
    <Grid item md="12">
      <Typography variant="h3" align="center">
        진행중인 예약 정보가 없습니다
      </Typography>
    </Grid>
  );

  var beReserve = (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Container component="main" maxWidth="md" style={{ marginTop: "4%" }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item align="center">
            <Typography variant="h3" className="myReserveTitle">
              <strong>봄봄카페 세미나실</strong>
            </Typography>
            <Typography variant="h5" className="myReserveAddr">
              경북 구미시 대학로 61
            </Typography>
            <Typography variant="h6" className="myReserveAddr">
              관리자 : 홍길동
            </Typography>
            <hr></hr>
            <Typography variant="h6" className="myReserveStartTime">
              시작시간 : 2023-12-13 12:00
            </Typography>
            <Typography variant="h6" className="myReserveEndTime">
              종료시간 : 2023-12-13 14:00
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={3} className="rateBtn">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {
                swal({
                  content: number,
                });
              }}
            >
              평가
            </Button>
          </Grid>
          <Grid item xs={3} className="cancelBtn">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
            >
              예약취소
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
  return (
    <>
      <Grid justifyContent="center" container>
        {navigationBar}
      </Grid>
      <Grid justifyContent="center" container>
        {modifyBar}
      </Grid>
      <Container component="main" maxWidth="md" style={{ marginTop: "4%" }}>
        <Grid>{beReserve}</Grid>
      </Container>
    </>
  );
}

export default MyReserve;

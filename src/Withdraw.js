import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import { signout, withdraw } from "./service/ApiService";

function Withdraw() {
  const handleSubmit = (event) => {
    event.preventDefault();

    //ApiService의 회원탈퇴 함수 호출
    withdraw({
      uid: localStorage.getItem("uid"),
    }).then((response) => {
      // 재 로그인
      window.location.href = "/login";
    });
    console.log();
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
            <Button href="/myreserve">진행중인 예약</Button>
          </Grid>
          <Grid item>
            <Button href="/mypage">회원정보수정</Button>
          </Grid>
          <Grid item>
            <Button href="/withdraw">
              <strong>회원탈퇴</strong>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

  return (
    <>
      <Grid justifyContent="center" container>
        {navigationBar}
      </Grid>
      <Grid justifyContent="center" container>
        {modifyBar}
      </Grid>
      <Container component="main" maxWidth="xs" style={{ marginTop: "4%" }}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography component="h1" variant="h4" className="register_title">
              회원탈퇴
            </Typography>
          </Grid>
        </Grid>
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h2>이전 예약정보를 조회할 수 없습니다 정말 탈퇴하시겠습니까?</h2>
            </Grid>

            <Grid item xs={12} className="withdrawBtn">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
              >
                <strong>탈퇴하기</strong>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default Withdraw;

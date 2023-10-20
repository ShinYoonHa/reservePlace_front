import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  Link,
} from "@material-ui/core";
import React from "react";
import { mypage, signout } from "./service/ApiService";

function MyPage() {
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
            <Button href="/myreserve">진행중인 예약</Button>
          </Grid>
          <Grid item>
            <Button href="/mypage">
              <strong>회원정보수정</strong>
            </Button>
          </Grid>
          <Grid item>
            <Button href="/withdraw">회원탈퇴</Button>
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
              회원정보수정
            </Typography>
          </Grid>
        </Grid>
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="uid"
                name="uid"
                variant="outlined"
                defaultValue={localStorage.getItem("uid")}
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                id="uid"
                label="아이디"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="성명"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="phone"
                name="phone"
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="연락처"
              />
            </Grid>
            <Grid item xs={12} className="pw_box">
              <TextField
                autoComplete="current-password"
                name="password"
                variant="outlined"
                required
                fullWidth
                id="password"
                label="패스워드"
              />
            </Grid>
            <Grid item xs={12} className="modifyBtn">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                수정하기
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default MyPage;

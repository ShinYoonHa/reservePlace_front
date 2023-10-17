import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Link,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import React, { useState } from "react";
import { signout, signup } from "./service/ApiService";

function Modify() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const username = data.get("username");
    const uid = data.get("uid");
    const password = data.get("password");
    const phone = data.get("phone");
    signup({
      username: username,
      phone: phone,
      uid: uid,
      password: password,
    }).then((response) => {
      window.location.href = "/todo";
    });
  };

  //navigationBar
  var navigationBar = (
    <AppBar position="static">
      <Toolbar>
        <Grid justifyContent="space-between" container>
          <Grid item>
            <Typography variant="h6">공간예약 플랫폼</Typography>
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
            <Button>진행중인 예약</Button>
          </Grid>
          <Grid item>
            <Button>회원정보수정</Button>
          </Grid>
          <Grid item>
            <Button>회원탈퇴</Button>
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
                fullWidth
                disabled
                id="uid"
                label="로그인된 아이디"
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
                autoFocus
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
            <Grid item xs={12} className="signupBtn">
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

export default Modify;

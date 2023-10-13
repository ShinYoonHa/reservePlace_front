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
import { signup } from "./service/ApiService";

function SignUp() {
  const [showPassword, setShowPassword] = useState("password");

  const handleShowPassword = () => {
    setShowPassword(() => {
      if (showPassword == "password") {
        return "text";
      } else {
        return "password";
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const username = data.get("username");
    const phone = data.get("phone");
    const id = data.get("id");
    const password = data.get("password");
    signup({
      username: username,
      phone: phone,
      id: id,
      password: password,
    }).then((response) => {
      window.location.href = "/login";
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
        </Grid>
      </Toolbar>
    </AppBar>
  );

  return (
    <>
      <Grid justifyContent="center" container>
        {navigationBar}
      </Grid>
      <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                component="h1"
                variant="h4"
                className="register_title"
              >
                회원가입
              </Typography>
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
                autoFocus
              />
            </Grid>
            <Grid item xs={12} className="id_box">
              <TextField
                autoComplete="id"
                name="id"
                variant="outlined"
                required
                fullWidth
                id="id"
                label="아이디"
                autoFocus
              />
              <Button
                className="dupleCheckBtn"
                onClick={handleShowPassword}
                variant="contained"
                color="primary"
              >
                중복검사
              </Button>
            </Grid>
            <Grid item xs={12} className="pw_box">
              <TextField
                autoComplete="current-password"
                type={showPassword}
                name="password"
                variant="outlined"
                required
                fullWidth
                id="password"
                label="패스워드"
                autoFocus
              />
              <Button className="passwordBtn" onClick={handleShowPassword}>
                🔒
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                회원가입
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                이미 계정이 있습니까? 로그인 하세요.
              </Link>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default SignUp;

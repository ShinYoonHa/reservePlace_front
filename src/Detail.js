import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  Paper,
  Box,
} from "@material-ui/core";
import React from "react";
import { mypage, signout } from "./service/ApiService";
import swal from "sweetalert";
import Swal from "sweetalert2";

function Detail() {
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
            <Button color="inherit" href="/mypage">
              마이페이지
            </Button>
            <Button color="inherit" onClick={signout}>
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

  var details = (
    <Paper style={{ margin: 4, padding: 4, minWidth: 600 }}>
      <Container component="main">
        <Grid container spacing={2} className="detailContainer">
          <Grid item>
            <img width="550" src="./img/room.jpg"></img>
          </Grid>
          <Grid item>
            <Typography variant="h3">
              <strong>봄봄카페 세미나실</strong>
            </Typography>
            <Typography variant="h5">경북 구미시 대학로 61</Typography>
            <Typography variant="h6">관리자 : 홍길동</Typography>
            소개 :
            <div className="detailDesc">
              그룹 스터디 뿐만 아니라 독서 모임, 과외/멘토링 등 목적에 따라 학습
              커뮤니티 활동을 하며 시너지를 낼 수 있습니다
            </div>
          </Grid>
        </Grid>
        <hr></hr>
        <Grid container spacing={2}>
          <Grid item className="dateSelect">
            날짜선택&nbsp;
            <input type="date" className="datetime"></input>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h6" color="secondary">
              시간은 30분 단위로만 선택가능 합니다
            </Typography>
          </Grid>
          <Grid item xs={6} className="dateSelect">
            시작시간&nbsp;
            <input
              type="time"
              className="datetime startTime"
              min="09:00"
              max="22:00"
              step={1800}
            />
            <span className="validity"></span>
          </Grid>

          <Grid item xs={6} className="dateSelect">
            종료시간&nbsp;
            <input
              type="time"
              className="datetime endtTime"
              min="10:00"
              max="22:00"
              step={1800}
            />
            <span className="validity"></span>
          </Grid>
        </Grid>
        <Grid className="reservedTimeBar">
          <div className="reservedTime 09">09-10</div>
          <div className="reservedTime 10">10-11</div>
          <div className="reservedTime 11">11-12</div>
          <div className="reservedTime 12">12-14</div>
          <div className="reservedTime 13">13-14</div>
          <div className="reservedTime 14">14-15</div>
          <div className="reservedTime 15">15-16</div>
          <div className="reservedTime 16">16-17</div>
          <div className="reservedTime 17">17-18</div>
          <div className="reservedTime 18">18-19</div>
          <div className="reservedTime 19">19-20</div>
          <div className="reservedTime 20">20-21</div>
          <div className="reservedTime 21">21-22</div>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid item className="reserveBtn">
            <Button type="submit" variant="contained" color="primary">
              예약
            </Button>
          </Grid>
          <Grid item className="cancelBtn">
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              href="/"
            >
              취소
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
      <Container component="main" style={{ marginTop: "4%" }}>
        {details}
      </Container>
    </>
  );
}

export default Detail;

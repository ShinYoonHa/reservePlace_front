import React, { useEffect, useState } from "react";
import Reserve from "./Rserve";
import {
  AppBar,
  Button,
  Container,
  Grid,
  List,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AddReserve from "./AddReserve";
import { call, signout } from "./service/ApiService";
import DeleteChecked from "./DeleteChecked";
import "./App.css";
import "./SignUp.css";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // add 함수 추가
  const add = (item) => {
    call("/Reserve", "POST", item).then((response) => setItems(response.data));
  };

  //delete 함수 추가
  const deleteHandler = (item) => {
    call("/Reserve", "DELETE", item).then((response) =>
      setItems(response.data)
    );
  };

  const update = (item) => {
    call("/Reserve", "PUT", item).then((response) => setItems(response.data));
  };

  const deleteForCompleted = () => {
    const thisItems = items;
    thisItems.map((e) => {
      //ReserveList 목록을 돌면서 '수행완료' 된 리스트 삭제
      if (e.done === true) {
        call("/Reserve", "DELETE", e).then((response) => {
          setItems(response.data);
        });
      }
    });
  };

  useEffect(() => {
    call("/Reserve", "GET", null).then((response) => {
      setItems(response.data);
      setLoading(false);
    });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  var ReserveItems = currentItems.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {currentItems.map((item, idx) => (
          <Reserve
            item={item}
            key={item.id}
            delete={deleteHandler}
            update={update}
          />
        ))}
      </List>
    </Paper>
  );

  //navigationBar
  var navigationBar = (
    <AppBar position="static">
      <Toolbar>
        <Grid justifyContent="space-between" container>
          <Grid item>
            <Typography variant="h6">공간예약 플랫폼</Typography>
          </Grid>
          <Grid item>
            <Button color="inherit">회원정보수정</Button>
            <Button color="inherit" onClick={signout}>
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

  //loading 중이 아닐 때
  var ReserveListPage = (
    <>
      <Grid justifyContent="center" container>
        {navigationBar}
        <Container>
          <AddReserve add={add} />
          <div className="ReserveList">{ReserveItems}</div>
        </Container>
      </Grid>
      <Grid justifyContent="center" container>
        <Grid item className="Pagination">
          {Array.from(
            { length: Math.ceil(items.length / itemsPerPage) },
            (v, i) => (
              <Button
                className="pageBtn"
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Button>
            )
          )}
        </Grid>
      </Grid>
    </>
  );

  //loading 중일 때
  var loadingPage = <h1>로딩중..</h1>;
  var content = loadingPage;

  if (!loading) {
    content = ReserveListPage;
  }

  // 생성된 컴포넌트 JPX를 리턴한다.
  return <div className="App">{content}</div>;
}
export default App;

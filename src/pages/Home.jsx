import React from "react";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/actions";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div style={styles.home}>
      <div style={styles.upperSection}>
        <div style={styles.todoText}>Todos</div>
        <SearchBar />
      </div>
      <Table />
    </div>
  );
}

const styles = {
  home: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    flexDirection: "column",
    padding: 0,
  },
  todoText: {
    fontSize: 20,
  },
  upperSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "auto",
    flexWrap: "wrap",
    minWidth: 700,
    maxWidth: 720,
  },
};

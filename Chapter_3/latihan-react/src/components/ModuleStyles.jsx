import React from "react";
import style from "./ModuleStyles.module.css";
import { Container } from "react-bootstrap";

const ModuleStyles = () => {
  return (
    <Container>
      <div className="d-flex flex-row justify-content-center  ">
        <button className={style.btn}>Berubah</button>
        <button className={style["btn-success"]}>Tetap</button>
        <button className={style["btn-sm"]}>Tetap</button>
      </div>
    </Container>
  );
};

export default ModuleStyles;

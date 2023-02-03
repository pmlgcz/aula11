import React from "react";
import styles from "./tarefa.module.css";

function Tarefa({ titulo }) {
  return (
    <article className={styles.tarefa} role='task' aria-labelledby='title'>
      <label id='title' htmlFor='status'>
        {titulo}
      </label>
      <input id='status' type='checkbox' />
    </article>
  );
}

function Coluna({ conteudo }) {
  return (
    <article className={styles.coluna} role='task' aria-labelledby='title'>
      <label id='coluna' htmlFor='status'>
        {conteudo}
      </label>
      <div class="container">
      <div class="conteudo1">conteudo 1</div>
      <div class="conteudo2">conteudo 2</div>
      <div class="conteudo3">conteudo 3</div>
      <div class="conteudo4">conteudo 4</div>
    </div>
    </article>
  );
}
export default Coluna;

import React, { useState } from 'react';
import './App.css';

function App() {
  let [modal, changeModal] = useState(false);

  return (
    <div className="App">
      <div className="nav-bar">
        <a
          href="#" // https://github.com/ryan-kim-dev
          onClick={() => {
            changeModal(!modal);
          }}
        >
          개발 블로그
        </a>
      </div>
      {modal === true ? <Modal></Modal> : null}
      <Main></Main>
    </div>
  );
}

function Main() {
  return (
    <section>
      <Article></Article>
      <Article></Article>
      <Article></Article>
    </section>
  );
}

function Article() {
  return (
    <article className="post-item">
      <h3>글제목</h3>
      <p>내용</p>
    </article>
  );
}

function Modal() {
  return (
    <div>
      <p>깃허브 링크를 새 창으로 엽니다.</p>
    </div>
  );
}

export default App;

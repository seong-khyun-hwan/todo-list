import React, { useState } from 'react';
import Working from './Working';
import './App.css';

function Input() {
  const [update, setUpdate] = useState([]);

  const [title, setTItle] = useState('');

  const [desc, setDesc] = useState('');

  const outHandler = () => {
    const newTodo = {
      id: update.length + 1,
      title: title,
      desc: desc,
      isDone: true,
    };
    setUpdate([...update, newTodo]);
    setTItle('');
    setDesc('');
  };

  const deleteUserHandler = (id) => {
    const newList = update.filter((user) => user.id !== id);
    setUpdate(newList);
  };

  const change = (id) => {
    let copy = [...update];
    update[id - 1].isDone = false;
    console.log(update.isDone);
    setUpdate(copy);
  };

  const done = (id) => {
    let copy = [...update];
    copy.isDone = true;
    setUpdate(copy);
    console.log(update.isDone);
  };
  // const send = (e) => {
  //   let copy = [...update];
  //   let newCopy = copy.map((user) => {
  //     if (user.key === e.key) {
  //       if (user.isDone === false) {
  //         return { ...user, isDone: true };
  //       } else {
  //         return { ...user, isDone: false };
  //       }
  //     } else {
  //       return { ...user };
  //     }
  //   });
  //   setUpdate(newCopy);
  // };

  return (
    <>
      <div className='input-head'>
        <span className='span-title'>
          제목<input className='input-title' value={title} onChange={(e) => setTItle(e.target.value)}></input>
        </span>
        <span className='span-desc'>
          내용<input className='input-desc' value={desc} onChange={(e) => setDesc(e.target.value)}></input>
        </span>
        <span className='span-input' onClick={outHandler}>
          추가하기
        </span>
      </div>
      <div className='working-title'>Working</div>
      <div className='output'>
        {update.map((user) => {
          if (user.isDone === true) {
            return <Output handleDelete={deleteUserHandler} user={user} key={user.id} change={change} />;
          }
        })}
      </div>
      <div className='wordking-done'>Done</div>
      <div className='output'>
        {update.map((user) => {
          if (user.isDone === false) {
            return <Done handleDelete={deleteUserHandler} user={user} key={user.id} done={done} />;
          }
        })}
      </div>
    </>
  );
}

function Output(props) {
  return (
    <div className='output-list'>
      <h1 className='todo-title'>{props.user.title}</h1>
      <h3 className='todo-desc'>{props.user.desc}</h3>
      <div className='work-btn'>
        <button
          className='delete'
          onClick={() => {
            props.handleDelete(props.user.id);
          }}
        >
          삭제하기
        </button>
        <button
          className='clear'
          onClick={() => {
            props.change(props.user.isDone);
            console.log(`afwe:${props.user.isDone}`);
          }}
        >
          완료
        </button>
      </div>
    </div>
  );
}

function Done(props) {
  return (
    <div className='output-list'>
      <h1 className='todo-title'>{props.user.title}</h1>
      <h3 className='todo-desc'>{props.user.desc}</h3>
      <div className='work-btn'>
        <button
          className='delete'
          onClick={() => {
            props.handleDelete(props.user.id);
          }}
        >
          삭제하기
        </button>
        <button
          className='clear'
          onClick={() => {
            props.done(props.user.isDone);
          }}
        >
          취소
        </button>
      </div>
    </div>
  );
}

export { Input, Output };

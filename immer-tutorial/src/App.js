import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';

const App = () => {
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({ array: [], uselessValue: null });

  const nextId = useRef(1);

  //input 수정을 위한 함수
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm(
        // { ...form,
        // [name]: [value] }
        produce(form, (form) => {
          form[name] = value;
        })
      );
    },
    [form]
  );

  //form 등록을 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      // array에 새 항목 등록
      setData(
        //  { ...data, array: data.array.concat(info) }
        produce(data, (data) => {
          data.array.push(info);
        })
      );

      //form 초기화
      setForm({
        name: '',
        username: '',
      });
      nextId.current++;
    },
    [data, form.name, form.username]
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback(
    (id) => {
      setData(
        // {...data,
        // array: data.array.filter((info) => info.id !== id),    }

        produce(data, (data) => {
          data.array.splice(
            data.array.findIndex((info) => info.id === id),
            1
          );
        })
      );
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name='username'
          placeholder='아이디'
          value={form.username}
          onChange={onChange}
        />
        <input
          name='name'
          placeholder='이름'
          value={form.name}
          onChange={onChange}
        />
        <button type='submit'>등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username}({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

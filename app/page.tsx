"use client";
//声明这个组件是一个客户端组件，因为它使用了 useState（React Hook 只能在客户端组件中使用）。

import { useState, FormEvent } from "react";
// 从 React 中导入 useState，用于管理组件内部的状态（也就是存储输入框的内容）。
import { useRouter } from "next/navigation";

export default function Home() {
  // inputVal：存储输入框的值（初始值为空字符串 ""）。
  // setInputVal：用于更新 inputVal 的函数。
  // 每次用户输入内容，inputVal 都会被 setInputVal 更新，页面也会重新渲染，从而实时显示最新的输入。
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/Prediction/${inputVal}`);  
    // 这里要使用反引号
  };

  return (
    <div>
      <div>
        <h1>Enter your name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your name"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit">Predict data</button>
      </form>
    </div>
  );
}

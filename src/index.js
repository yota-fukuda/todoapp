// JXSを使うためには"react"をimportしないといけない
// エントリーポイント
import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// import './practice/main'

// 第一引数
// 表示するJSX
// 第二引数
// public/index.htmlの中で表示させたい要素
ReactDom.render(<App />, document.getElementById('root'));


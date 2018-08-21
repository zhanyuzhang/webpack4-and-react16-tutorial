import React, { Component } from 'react'

export default class App extends  Component {
  render() {
    return (
      <h1>
        Hello World
      </h1>
    )
  }
}

// 因为我们的例子是无状态的组件，所以，也可以使用纯函数（Airbnb）写法，如下：
/*
import React from 'react'
export default function App() {
  return <H1>Hello World</H1>
}
*/
/// <reference path="../node_modules/.pnpm/@micro-zoe+micro-app@1.0.0-beta.2/node_modules/@micro-zoe/micro-app/typings/global.d.ts" />
import './App.css'

function App() {
  return (
    <div className="App">
      main
      <micro-app
        iframe
        // disable-memory-router
        // inline
        // disableSandbox
        name="scc-child"
        url="http://localhost:5174"
      ></micro-app>
    </div>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'

/** COMPONENTS */
import Header from './components/header.component/header.component'
import HeaderRight from './components/header.right.component/header.right.component'

const App = () => {
  return (
    <div>
       <Header/>
       <HeaderRight/>
    </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))
import React from 'react'
import { render } from 'react-dom'

import localizer from 'react-calendar-example/lib/localizers/globalize'
import globalize from 'globalize'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import 'react-calendar-example/lib/sass/styles.scss'
import './styles.scss'
import SamplCalendar from './samplCalendar'
const globalizeLocalizer = localizer(globalize)

class App extends React.Component {
  constructor(...args) {
    super(...args)
  }

  render() {
    let Current = {
      basic: SamplCalendar
    }['basic']

    return (
      <div className="app">
        <h3 style={{textAlign: 'center', padding: 10}}>Sample event based calendar</h3>
        <div className="examples">
          <div className="example">
            <Current localizer={globalizeLocalizer} />
          </div>
        </div>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('app'))
})

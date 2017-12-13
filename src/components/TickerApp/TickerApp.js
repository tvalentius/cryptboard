import React, { Component } from 'react'
import PropTypes from 'prop-types'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { white, lightBlue500, lightBlue700} from 'material-ui/styles/colors'
import AppBar from 'material-ui/AppBar'

import 'roboto-fontface'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()


class TickerApp extends Component {
  render() {
    // lightBlue900
    const theme = getMuiTheme({
      ...lightBaseTheme,
      palette: {
        primary1Color: lightBlue500,
        pickerHeaderColor: lightBlue500,
        primary2Color:lightBlue700
      }
    })
    return (
      <MuiThemeProvider muiTheme={theme}>

      </MuiThemeProvider>
    )
  }
}

export default TickerApp;

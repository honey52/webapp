import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

require('dotenv').config();
const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: '"Noto Sans KR"'
    }
});

ReactDOM.render(<MuiThemeProvider theme={theme}><App/></MuiThemeProvider>, document.getElementById('app'));
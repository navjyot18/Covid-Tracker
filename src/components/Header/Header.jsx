import React from 'react';
//import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import CheckHealth from '../CheckHealth/CheckHealth';
import Map from '../Map/Map';
import App from '../../App';
//import Graph from '../Graph/Graph';
import Body from '../Body/Body';
import useStyles from './styles.js';
import logo from './logo.png';
import "./style.css";

const Header = ()=> {
	const classes = useStyles();
	return (
		<AppBar position="static" color="secondary">
		  <Toolbar>
		  	<img className="photo" src={logo}></img>
		  	<Link id="title" to="/">Covid Tracker</Link>
			<Link id="btn" to="/Covid-Analytics">Covid-Analytics</Link>
			{/*<Button id="btn" color="info" href="/Covid-Analytics" >Covid-Analytics</Button>*/}
		  </Toolbar>
		</AppBar>
	);
};

export default Header;
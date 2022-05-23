import React, { useEffect, useState } from "react";
//import GoogleMapReact from 'google-map-react';
//import { Paper, Typography, useMediaQuery } from '@material-ui/core';
//import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
//import {Rating} from '@material-ui/lab/Rating';
import useStyles from './styles.js';

const Map = ()=> {
	/*

  useEffect(() => 
  {
    getLocation();
  }, []);

  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  const [lat, setLat] = useState(20.5937);
  const [lng, setLng] = useState(80.1845);

	function getLocation() 
	{
	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(getCoords);
	  } else {
	    alert("Geolocation is not supported by this browser.");
	  }
	}

	function getCoords(position) 
	{
		// body...
		console.log(lat, lng);
		setLat(111);
		setLng(110);
		console.log(lat, lng);
	}

  const coordinates = {Lat:lat, Lng: lng};
	return (
		<div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBZU7_kZsS833WBWbSkw8AJQTk6929E6Tg' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      >
		</GoogleMapReact>
		</div>
	)
	*/
	return(
		<>
		</>
	);
}


export default Map;
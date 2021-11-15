import React, {useState, useEffect} from "react";

import {DataGrid, GridColDef} from "@material-ui/data-grid";

const WEATHER_API_KEY = "ebcbb378d5995d489f96ae39ca154495";
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/find?lat=51.89&lon=0.89&cnt=20&appid=${WEATHER_API_KEY}`

const columns = [
    {
        field: 'name',
        headerName: 'City',
        width:150,
    },
    {
        field: 'temp',
        headerName: 'Temperature',
        width: 170
    },
    {
        field: 'humidity',
        headerName: 'Humidity',
        width: '150'
    },
    {
        field: 'pressure',
        headerName: 'Pressurre',
        width: '150'
    }
];


const WeatherGrid = () => {

    return <div>
            <DataGrid
                rows={rows}
                column={columns}
                pageSize={20}
            />
        </div>

}

export default WeatherGrid;

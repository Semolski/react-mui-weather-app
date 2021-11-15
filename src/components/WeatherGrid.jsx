import React, {useState, useEffect} from "react";

import {DataGrid, GridColDef} from "@material-ui/data-grid";

const WEATHER_API_KEY = "ebcbb378d5995d489f96ae39ca154495";
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/find?lat=51.89&lon=0.89&cnt=20&&units=imperial&appid=${WEATHER_API_KEY}`;

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'City',
        width: 150,
    },
    {
        field: 'temp',
        headerName: 'Temperature',
        width: 170,
        valueGetter: (params) => {
            let result = [];
            if (params.row.main) {
                if (params.row.main.temp) {
                    result.push( params.row.main.temp );
                }
            } else {
                result = ["Unknown"];
            }
            return result;
        }
    },
    {
        field: 'humidity',
        headerName: 'Humidity',
        width: 150,
        valueGetter: (params) => {
            let result = [];
            if (params.row.main) {
                if (params.row.main.humidity) {
                    result.push( params.row.main.humidity );
                }
            } else {
                result = ["Unknown"];
            }
            return result;
        }
    },
    {
        field: 'pressure',
        headerName: 'Pressure',
        width: 150,
        valueGetter: (params) => {
            let result = [];
            if (params.row.main) {
                if (params.row.main.pressure) {
                    result.push( params.row.main.pressure );
                }
            } else {
                result = ["Unknown"];
            }
            return result;
        }
    },
];

const WeatherGrid = () => {

    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        fetch(WEATHER_API_URL)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.list)
                setWeatherData(data.list);
            });

    }, []);

    return <div>
        <div style= {{height: 700, width: '100%'}}>
            <DataGrid
                rows={weatherData}
                columns={columns}
                pageSize={20}
            />
        </div>
    </div>;

};

export default WeatherGrid;


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DateBuilder from './DateBuilder';
import temp from "../asserts/images/temp.svg";
import humidity from "../asserts/images/humidity.svg";
import wind from "../asserts/images/wind.svg";
import pressure from "../asserts/images/pressure.svg";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { display, typography } from '@mui/system';

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        flexDirection: 'column',

    }
});

const Showcase = ({ newCityList }) => {
    const classes = useStyles();

    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    return (
        <div className={classes.root}>
            {newCityList.map((city) => (
                <Card className={classes.card}  >
                    <CardActionArea style={{ backgroundColor: `${getRandomColor()}` }} >
                        <DateBuilder />
                        {new Date(city.dt * 1000).toLocaleTimeString(
                            "en-IN"
                        )}
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {city.name}, {city.sys.country}
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                {city.weather[0].description}|
                                {city.main.temp}°C
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions >
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <img src={temp} alt='temp' />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Sunrise" secondary={new Date(city.sys.sunset * 1000).toLocaleTimeString(
                                "en-IN"
                            )} />
                        </ListItem>
                        <ListItem >
                            <ListItemAvatar>
                                <Avatar>
                                    <img src={humidity} alt='humidity' />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={city.main.humidity} secondary="Humidity" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <img src={wind} alt='wind' />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={city.wind.speed} secondary="Wind" />
                        </ListItem>

                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <img src={pressure} alt='pressure' />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={city.main.pressure} secondary="Pressure" />
                        </ListItem>
                    </CardActions>
                </Card>
            ))}

        </div>
    );
}

export default Showcase;

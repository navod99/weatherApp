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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Updatedtime from './Updatedtime';

const useStyles = makeStyles((theme) =>({
    root: {
        flexGrow:1
    },
    paper: {
        padding: theme.spacing(5),
        marginLeft: 'auto',
      
      },
    paper2: {
        padding: theme.spacing(3),
        margin: 'auto',
      
    },

}));

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
            <Paper className={classes.paper}>
            <Grid container spacing={5}>
                {newCityList.map((city) => (
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}  >
                            <CardActionArea style={{ backgroundColor: `${getRandomColor()}` }} >
                                
                                <CardContent>
                                    <Typography  variant="h4" component="h2">
                                        {city.name}, {city.sys.country}
                                    </Typography>

                                    
                                    <Typography style={{fontStyle:"italic"}} gutterBottom color='textPrimary' variant="h6" component="h2">
                                        <DateBuilder />
                                        <Updatedtime city={city}/>
                                    </Typography>
                                    <Typography style={{color:"white",fontWeight:"bold"}} variant="h4"  component="p">
                                        {city.weather[0].description}|
                                        {city.main.temp}°C
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <Paper className={classes.paper2}>
                            <CardActions >
                                <Grid  container spacing={3}>
                                    <Grid item xs={12} sm={8} >
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
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <ListItem >
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <img src={humidity} alt='humidity' />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={city.main.humidity} secondary="Humidity" />
                                        </ListItem>
                                    </Grid>
                                
                                
                                    <Grid item xs={12} sm={8}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <img src={wind} alt='wind' />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={city.wind.speed} secondary="Wind" />
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <img src={pressure} alt='pressure' />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={city.main.pressure} secondary="Pressure" />
                                        </ListItem>
                                    </Grid>
                                </Grid>
                            </CardActions>
                            </Paper>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            </Paper>
        </div>
    );
}

export default Showcase;

import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useDispatch, useSelector } from "react-redux";
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { CardMedia, Grid } from '@material-ui/core';
import { RootState } from '../../../store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 300,
      marginBottom:20
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    countFont: {
      fontSize: "42px"
    },
    addCart: {
      width:'100%',
      "&:hover": {
        background: "#ba4a04",
        font: "#FFF"
      },
    }
  }));

export default function ItemCard(props: any) {

  const classes = useStyles();
  const { item } = props;
  const dispatch = useDispatch();

  const handleAdd = (item: any) => {

    let cartQuantity: number = 0;
    // cartQuantity = CommonUtils.getCartItemQty(items, itemCode);
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <span style={{ float: 'left', fontWeight:700 }}>{item.productName}</span>  <span style={{ float: 'right' }}><b>{item.price}</b></span>
        </Typography>
      </CardContent>
    </Card>
  );
}

import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { red } from '@material-ui/core/colors';
import { CardMedia, Typography, CardContent, Card } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 300,
      marginBottom: 20
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
      width: '100%',
      "&:hover": {
        background: "#ba4a04",
        font: "#FFF"
      },
    },
    sale :{
      backgroundColor: '#bd4006',
      color : '#FFF',
      maxWidth:'auto',
      textAlign:'left',
      padding:5,
    },
    exclusive : {
      backgroundColor: '#3e6e04',
      color : '#FFF',
      maxWidth:'auto',
      textAlign:'left',
      padding:5,

    },
    statusContainer : {
      textAlign:'left',
      marginBottom:10
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
        alt={item.productName}
        height="140"
        image={`/images/items/${item.productImage.jpg}`}
      />
      <CardContent>
      <div className={classes.statusContainer}> 
        {item.isExclusive && (<span className={classes.exclusive}>Exclusive</span>)}
        {item.isSale && (<span className={classes.sale}>Sale</span>)}
        {!item.isSale && !item.isExclusive && <br/>}
        </div>
        <Typography variant="body2" color="textSecondary" component="p">
          <span style={{ float: 'left', fontWeight: 700 }}>{item.productName}</span>  <span style={{ float: 'right' }}><b>{item.price}</b></span>
        </Typography>
      </CardContent>
    </Card>
  );
}

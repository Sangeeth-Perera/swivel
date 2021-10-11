import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {  FormControl, Grid,  MenuItem, Select } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginBottom: "100px",
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        title: {
            paddingLeft: '40px',
        },
        appBar: {
            backgroundColor: "#cbe9f5",
        }
    }),
);

function CategoriesHeader(props: any) {

    const { heading, itemSize, setItemSize, itemSizes = [] } = props;
    const classes = useStyles();
    
    return (
        <Grid container className={classes.appBar}>
            <Grid item xs={6}>
                <Typography variant="h6" align='left' className={classes.title}>
                    {heading}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl className={classes.formControl}>
                    <Select
                        labelId="item-type"
                        id="item-type"
                        value={itemSize}
                        onChange={(e: any) => setItemSize(e.target.value)}
                    >
                        <MenuItem value={'any'}>Select item size</MenuItem>))
                        {itemSizes.map((size:any)=>(
                        <MenuItem value={size}>{size}</MenuItem>))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default CategoriesHeader;
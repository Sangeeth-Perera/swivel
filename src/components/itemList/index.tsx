import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {  useSelector } from "react-redux";
import { Grid } from '@material-ui/core';
import { RootState } from '../../store';
import ItemCard from './itemCard';


export default function ItemList(props: any) {

    const filteredItems = useSelector((state: RootState) => state.items.filteredItems);

    return (
        <>
            {filteredItems.map((item: any) => (
                <Grid key={item.index} item sm={3}>
                    <ItemCard item={item} />
                </Grid>))}
        </>
    );
}

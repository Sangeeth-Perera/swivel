import { createStyles, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import { get } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import CategoriesHeader from "../components/categoryHeader";
import ItemList from "../components/itemList";
import { getAllItems } from "../services/ItemList";
import { setFilteredItems } from "../store/ItemsSlice";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: 20
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        }
    }),
);

const ItemsPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [itemSize, setItemSize] = React.useState('any');
    const itemSizes = ['XS', 'S', 'M', 'L', 'XL'];

    const loadItemList = async () => {
        try {
            setLoading(true);
            const response = await getAllItems();
            setItemList(response.data);
            dispatch(setFilteredItems(response.data));
            setLoading(false);
        } catch (error) {
            toast('Something went wrong');
            setLoading(false);
        }
    }

    useEffect(() => {
        loadItemList();
    }, []);

    useEffect(() => {
        if (itemSize != 'any') {
            const filteredItemList = itemList.filter((item: any) => get(item, 'size', []).includes(itemSize));
            dispatch(setFilteredItems(filteredItemList));
        }
        else {
            dispatch(setFilteredItems(itemList));
        }
    }, [itemSize]);

    return (
        <>
            <CategoriesHeader heading={'Womens Top'} itemSize={itemSize} setItemSize={setItemSize} itemSizes={itemSizes} />
            <Grid container className={classes.root}>
                {!loading ? (
                    <ItemList />
                ) : <Grid item lg={12} sm={12}><Typography> Loading...</Typography></Grid>}
            </Grid >
        </>
    );
}

export default ItemsPage;
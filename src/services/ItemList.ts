
import { get, post, put, delete_ } from "./xhr";


export function getAllItems() {
    return get(`${process.env.REACT_APP_CART_SERVER}5e9fc4a82940c704e1dc7893`);
}


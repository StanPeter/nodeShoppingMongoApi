import { Schema, model } from "mongoose";

export interface Product {
    id?: number;
    title: String;
    price: number;
    imageUrl?: String;
    description?: String;
    active?: Boolean; //whether its a deleted product or not (in orders we still want to see it even if its deleted!)
}

const schema = new Schema<Product>({
    // id: {
    //     type: String,
    //     required: true,
    // },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    active: {
        type: String,
        default: true,
    },
});

const ProductModel = model<Product>("Product", schema);

export default ProductModel;

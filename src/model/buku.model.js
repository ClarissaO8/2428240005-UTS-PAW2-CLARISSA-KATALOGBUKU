import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publication_year: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const BukuModel = mongoose.model("Buku", schema);

export default BukuModel;
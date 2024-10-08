import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model("Category", CategorySchema)
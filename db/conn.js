import mongoose from "mongoose";

const Connection = async () => {
    try {
        await mongoose.connect("mongodb+srv://farzanayussouf:billmughal911@cluster0.d9fs5kc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("database connected");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default Connection;
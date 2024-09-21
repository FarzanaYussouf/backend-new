import mongoose from "mongoose";
import bodyParser from 'body-parser';

const Connection = async () => {
    try {
        await mongoose.connect("mongodb+srv://farzanayussouf:billmughal911@cluster0.d9fs5kc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("database connected",);
        
    } catch (error) {
        console.log(error);
        
    }
}

export default Connection;



// mongodb+srv://backend-node:pakistan@cluster0.5yf37or.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



// mongodb+srv://farzanayussouf:billmughal911@cluster0.d9fs5kc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



// mongodb+srv://tvs80649:<password>@cluster0.94sof.mongodb.net/
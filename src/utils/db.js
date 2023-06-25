import mongoose from "mongoose"

const connect=async()=>{
    try{
        await mongoose.connect(procss.env.MONGO_URL)
    }
    catch(error){
console.log(error)
    }
}

export default connect
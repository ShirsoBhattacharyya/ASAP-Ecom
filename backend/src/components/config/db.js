const mongoose=require('mongoose');
const Connect=()=>{
    return mongoose.connect(`mongodb+srv://Shirso:shirso@clusterasap.5xqb3yt.mongodb.net/asap`)
}
module.exports=Connect;
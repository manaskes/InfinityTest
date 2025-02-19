const Model = require('../../models/mongo')



module.exports.PostData = async (req , res , next) =>{
    try {
        const {fName , Lname ,role , DOj , Department , mgId , seniority} = req?.body
        console.log("finally working" , fName ,Lname)

        if(!fName || !Lname || !DOj || !Department || !mgId || !seniority ) {
            return res.error(400 , "All Field are required")
        }
        let UserName =''
        let EmpCode =''
        if(Department === "Accounts"){
            UserName = "Acc" + generateRandom(4)
            EmpCode = "ACC" + generateRandom(4)
        }
        if(Department === "Development"){
            UserName = "Dev" + generateRandom(4)
            EmpCode = "DEV" + generateRandom(4)
        }
        if(Department === "Admin"){
            UserName = "ADM" + generateRandom(4)
            EmpCode = "ADM" + generateRandom(4)
        }
        const userId = generateRandom(3)
        const insertData = {
            firstName:fName,
            lastName:Lname,
            role:role,
            userId:userId,
            UserName:UserName,
            Department:Department,
            DOJ:DOj,
            EmpCode:EmpCode,
        }
        const inserting = await Model.Test.create(insertData)
        console.log({inserting})
        return res.success("data Inserted Successfully")
        
    } catch (error) {
        next(error)
    }
} 

const generateRandom = function (len) {
    var text = "";
    var possible = "1234567890";
    for (var i = 0; i < len; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};


module.exports.search = async (req , res , next) =>{
    try {
        const {UserName} = req?.query
        if(!UserName) return res.error(400 , "UserName")

        const GetData = await Model.Test.findOne({UserName:UserName})
        console.log({GetData})
        return res.success("data Get Sucessfully" , GetData)
        
    } catch (error) {
        next(error)
    }
} 
const mongoose = require('mongoose')


//create a mongo schema
const Schema = mongoose.Schema
const hireSchema = new Schema({
    First_Name : {
        type : String,
        // required :true
        required :[true,"First Name is mandatory"]
    },
    Last_Name : {
        type : String,
        // required :true
        required :[true,"last Name is mandatory"]
    },
    DOB : {
        type : String,
        // required :true
        required :[true,"email is mandatory"]
    },
    Blood_Group :{
        type : String,
        required :true
    },
    Maritial_Status :{
        type : String,
        required :true
    },
    Sex :{
        type : String,
        required :true
    },
    Nationality :{
        type : String,
        required :true
    },
    EmailID :{
        type : String,
        required :true
    },
    Residential_Address :{
        type : String,
        required :true
    },
    Permanent_Address :{
        type : String,
        required :true
    },
    Alternate_Number :{
        type : String,
        required :true
    },
    Emergency_Contact_Number :{
        type : String,
        required :true,
       
    },
    Father_Name :{
        type : String,
        required :true,
    },
    Mothers_Name :{
        type : String,
        required :true,
        required :true
    },
    Mothers_DOB :{
        type : String,
        required :true,
        required :true
    },
    created_At    : { 
        type: Date, 
        required: true, 
        default: Date.now 
    },
    updated_At    : { 
        type: Date, 
        required: true, 
        default: Date.now 
    },
    Process_Selected_for    : { 
        type: String,  
        required :true
    },
    IFSC_Code    : { 
        type: String,  
        required :true
    },
    Bank_Name : {
        type : String,
        required :true
    },
    UAN_Number : {
        type : String,
        required :true
    },
    Emergency_Contact_Relationship : {
        type : String,
        required :true
    },
    Mobile_Number : {
        type : String,
        required :true
    }
})

const Hire = mongoose.model('hire', hireSchema)


module.exports = Hire
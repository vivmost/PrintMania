const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const user = require("../models/userModel");

// Register a User
exports.registerUser = catchAsyncErrors(async(req, res, next) => {
    
})
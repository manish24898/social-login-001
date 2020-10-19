`use strict`;

const out = {};
module.exports = out;

// Fix
out.PROJECT_NAME = "Test";
out.JWT_EXPIRY = Math.floor(Date.now() / 1000) + (60 * 60);

// Static message
out.MESSAGE = {
    ROUTE_NOT_FOUND: "Route not found!",
    ACCESS_FORBIDEN: "Your access is forbidden!"
}

// Response code
out.RESPONSE_CODE = {
    SUCCESS: 200,
    NOT_FOUND: 404,
    FORBIDDEN: 403
}
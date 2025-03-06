"use strict";
// Middleware
app.use((res, req, next) => {
    console.log("Sign Up");
    next();
});
app.use((res, req, next) => {
    console.log("Hello World");
    next();
});

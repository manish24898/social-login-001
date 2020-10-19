module.exports = (app, passport) => {
    require("./user")(app, passport);

    // Always at the end
    require("./all")(app);
}

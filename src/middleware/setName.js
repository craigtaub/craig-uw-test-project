function setName(request, response, next) {
    response.locals.name = 'Craig';
    next();
}

module.exports = setName;

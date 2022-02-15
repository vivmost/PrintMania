module.exports = asyncErrFunc => (res, req, next) =>{
    Promise.resolve(asyncErrFunc(res, req, next)).catch(next);
}
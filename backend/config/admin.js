module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1ce5e8de3520e5fac2b06604be2f78b9')
  }
});

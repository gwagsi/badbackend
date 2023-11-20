// ./api/auth/controllers/ConfirmationError.js

module.exports = {
    error(ctx) {
      // Render your error page or send a response to the client
      ctx.send({
        message: 'Confirmation failed',
        // Add additional data if needed
      });
    },
  };
  
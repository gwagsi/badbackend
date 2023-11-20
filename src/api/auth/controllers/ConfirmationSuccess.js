// ./api/auth/controllers/ConfirmationSuccess.js

module.exports = {
    success(ctx) {
      // Render your success page or send a response to the client
      ctx.send({
        message: 'Confirmation successful',
        // Add additional data if needed
      });
    },
  };
  
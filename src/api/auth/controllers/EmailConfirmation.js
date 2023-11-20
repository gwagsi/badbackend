// ./api/auth/controllers/EmailConfirmation.js

module.exports = {
    async confirm(ctx) {
      try {
        const { confirmation } = ctx.query;
  
        if (!confirmation) {
          return ctx.redirect('/api/auth/confirmation-error');
        }
  
        // Find the user based on the confirmation token
        const user = await strapi
          .query('user', 'users-permissions')
          .findOne({ confirmation_token: confirmation });
  
        if (!user) {
          return ctx.redirect('/api/auth/confirmation-error');
        }
  
        // Update user status to 'confirmed' or perform any other necessary actions
        await strapi
          .query('user', 'users-permissions')
          .update({ id: user.id }, { confirmed: true, confirmation_token: null });
  
        // Redirect to the success page
        return ctx.redirect('/api/auth/confirmation-success');
      } catch (error) {
        // Redirect to the error page
        return ctx.redirect('/api/auth/confirmation-error');
      }
    },
  };
  
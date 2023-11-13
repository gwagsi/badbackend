module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
      jwtSecret: env('JWT_SECRET'),
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    
    email: {
      config: {
        provider: 'nodemailer', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
        providerOptions: {
          host: "smtp-relay.brevo.com", 
          port:   587 ,
          auth: {
            user:  'gwagsiglenn@gmail.com' ,
            pass:  'Vy1Gc4MNnwb83kdY' ,
        },
        settings: {
          defaultFrom: 'nachass@nchhass.com',
          defaultReplyTo: 'nachass@nchhass.com',
          testAddress: 'gwagsiglenn@gmail.com',
        },
      },
    },
  }}) 

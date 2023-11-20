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
          host: "smtp.gmail.com", 
          port:   587 ,
          debug: true,
          logger:true,
          auth: {
            user:  'vectorket@gmail.com' ,
            pass:  'bwzk tsut wbxm gvqs' ,
        },
        tls:{rejectedUnauthorized:false},
        settings: {
          defaultFrom: 'gwagsiglenn@gmail.com',
          defaultReplyTo: 'gwagsiglenn@gmail.com',
          testAddress: 'gwagsiglenn@gmail.com',
        },
      },
    },
  }}) 

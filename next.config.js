module.exports = {
    swcMinify: true,
    async redirects() {
        return [
          {
            source: '/blog',
            destination: '/',
            permanent: true,
          },
          {
            source: '/mikulas-pre-mariannku',
            destination: 'https://tickets.silnereci.sk/my-tickets/KZD18QL99J1EF611I6YV7JUJKU4LV4Q4921',
            permanent: true,
          }
        ]
      },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/magazine/doreen",
        destination: "/issue/5/article/doreen",
        permanent: true,
      },
      {
        source: "/magazine/hanif",
        destination: "/issue/5/article/hanif",
        permanent: true,
      },
      {
        source: "/magazine/kj",
        destination: "/issue/5/article/kj",
        permanent: true,
      },
      {
        source: "/magazine/tiana",
        destination: "/issue/5/article/tiana",
        permanent: true,
      },
      {
        source: "/magazine/yume",
        destination: "/issue/5/article/yume",
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  env: {
    POSTGRES_URL: process.env.POSTGRES_URL,
    POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
    POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
  },
}

module.exports = nextConfig

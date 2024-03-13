/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/magazine/akwaeke",
        destination: "/issue/1/article/akwaeke",
        permanent: true,
      },
      {
        source: "/magazine/diallo",
        destination: "/issue/1/article/diallo",
        permanent: true,
      },
      {
        source: "/magazine/jenna",
        destination: "/issue/1/article/jenna",
        permanent: true,
      },
      {
        source: "/magazine/joshua",
        destination: "/issue/1/article/joshua",
        permanent: true,
      },
      {
        source: "/magazine/rianna",
        destination: "/issue/1/article/rianna",
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

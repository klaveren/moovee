# **Moovee - Movie Discovery App**

Moovee is a dynamic web application built using Nuxt 3, TypeScript, Pinia, Tailwind CSS. This project is designed to seamlessly interact with the [themoviedb.org](https://themoviedb.org) API, providing users with the ability to search, sort, mark as favorites, and keep track of watched movies.

## **How to Use:**

* Clone the repository.

* Install dependencies using the package manager of your choice.

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

* Prior to launching and running the application, it is essential to set up two new files named `.env` and `.env.test`, each containing the required environment variables. Ensure that the content in both files is identical. [Get your credential here.](https://www.themoviedb.org/settings/api)

```bash
# TMDP API AUTHENTICATION
TMDP_API_KEY = ""
TMDB_ACCESS_TOKEN = "" 
TMDB_BASE_URL = "https://api.themoviedb.org/3
```

* Launch the application and start exploring movies effortlessly!

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

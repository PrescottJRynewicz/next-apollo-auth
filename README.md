# Next App Boiler Plate

This repo contains a slightly opinionated boiler plate, including...

1. Next
2. Typescript - with strict config
3. Next-Auth (Flexible authentication)
4. Apollo GraphQL (Server and Client)
5. GraphQL CodeGen (Server and Client)

## QuickStart

1. clone this repo
2. `npm i`
   1. Get a copy of the `.env.local` file from another team member (will be automated in the future)
3. `npm run dev`
4. Write some code!

In the basic skeleton for this app, we are able to 

1. Define new nodes in the GraphQL Graph
2. Define resolvers for our graph
3. Generate server and client types in the graph
4. Define, static, ssr and client rendered next pages using pre generated graphql query hooks.
5. Sign in and do basic authentication with next-auth email magic links
6. Build anything else you want!

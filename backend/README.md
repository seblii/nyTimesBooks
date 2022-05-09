# NY Times Bestsellers Browser Backen

# To generate NY Times API run...
`npm run generate-nyt-client`

Note! The code generator fails because of badly named security parameter 'api-key' in NYTimes openapi definitions. After the process you have to manually change every ".api-key" expressions to "['api-key']" expression in the generated code.

# To generate type-script client run... 
`generate-typescript-client`

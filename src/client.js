const sanityClient = require('@sanity/client')
const client = sanityClient({
    projectId: 'u6a93hye',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true,
})

export default client
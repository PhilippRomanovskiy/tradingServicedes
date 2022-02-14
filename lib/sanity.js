import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectID:'ab6qhren',
    dataset:'production',
    apiVersion: '2021-03-25',
    token: 'skBjqQlhQyb3U35AterAm6jqcWlhYMispEyFSfQxCX2O7687Yq7txtlk5VkpZWRQdDd5BhwQuwgHPZWiVHKryB4IP8egyDD6TtFmu2cBXCq4FI08BdHBLi62ahjKcm0sQDJoQmpWowDD6GwqIliYqdIa2GvmmqarJkJiOoD98Zlk7a2uQLmU',
    useCdn: false,
});
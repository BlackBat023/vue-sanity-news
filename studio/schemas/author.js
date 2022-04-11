export default {
    title: 'Author',
    name: 'author',
    type: 'document',
    fields: [
        {
            title: 'Full Name',
            name: 'full_name',
            type: 'string',
            Validation: Rule => Rule.required().error('Full name is required')
        },
        {
            title: 'Short Bio',
            name: 'short_bio',
            type: 'text'
        },
        {
            title: 'Avatar',
            name: 'avatar',
            type: 'image',
            Validation: Rule => Rule.required().error('Avatar is required')
        }
    ]
}
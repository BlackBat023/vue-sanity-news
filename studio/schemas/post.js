export default {
    title: 'Post',
    name: 'post',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => [
                Rule.required().min(10).error('Tltle must be at least 10 characters long'),
                Rule.required().max(50).warning("It's better to use short snappy titles")
            ]
        },
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{type: 'author'}],
            validation: Rule => Rule.required().error('Auhtor is required')
        },
        {
            title: 'Excerpt',
            name: 'excerpt',
            type: 'text',
            validation: Rule => Rule.max(120).error('Excerpt must be less then 120 characters long')
        },
        {
            title: 'Content',
            name: 'content',
            type: 'text',
            validation: Rule => Rule.required().error('Content is required'),

        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            validation: Rule => Rule.required().error('Image is required')
        }
    ]
}
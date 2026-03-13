export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: 'type',
            title: 'Experience Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Work Experience', value: 'work' },
                    { title: 'Organisational Experience', value: 'organization' }
                ],
                layout: 'radio'
            },
            validation: (Rule) => Rule.required(),
            initialValue: 'work'
        },
        {
            name: 'year',
            title: 'Year / Duration',
            type: 'string',
            description: 'E.g. Oct 2024 - Present',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'jobs',
            title: 'Job Title / Position',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'company',
            title: 'Company / Organization',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'E.g. Yogyakarta',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description Points',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Add your responsibilities or achievements as bullet points',
            validation: (Rule) => Rule.required().min(1)
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Use this to order the experiences. Lower number appears first (1 is top).'
        }
    ],
    preview: {
        select: {
            title: 'jobs',
            subtitle: 'company',
        }
    }
}

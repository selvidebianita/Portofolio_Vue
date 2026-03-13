export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'isFeatured',
            title: 'Is Featured Project',
            type: 'boolean',
            description: 'Set to true to feature this project with a special layout',
            initialValue: false,
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'secondaryImage',
            title: 'Secondary Image (For Featured)',
            type: 'image',
            description: 'Only used if this is a featured project (e.g., Admin Dashboard image)',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'techStack',
            title: 'Tech Stack',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'E.g. Next.js, React.js, Tailwind CSS',
        },
        {
            name: 'highlights',
            title: 'Highlights (For Featured)',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Key features of the project (e.g. Complete UI implementation from design)',
        },
        {
            name: 'link',
            title: 'Live Link',
            type: 'url',
        },
        {
            name: 'githubLink',
            title: 'GitHub Link',
            type: 'url',
        },
    ],
}

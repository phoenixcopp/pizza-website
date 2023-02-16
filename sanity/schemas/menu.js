export default {
    name: 'menu',
    title: 'Menu',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'theme',
            title: 'Theme',
            type: 'string'
        }, 
        {   
            name: 'theme2',
            title: 'Theme2',
            type: 'string'

        },
    ]
}
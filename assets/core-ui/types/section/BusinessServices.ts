export default
{
    name: 'Business Services',
    component_type: 'section',
    slug: 'business-services',
    uid: 'business_services',
    image: 'business-services-2.png',
    meta: {},
    seo: {},
    container: {},
    columns: 1,
    isWhite: true,
    components: [
        {
            uid: 'CxHx1',
            name: 'Heading',
            level: 'h1',
            as: 'h1',
            variant: 'primary',
            type: 'string',
            formFields: {
                label: 'My heading',
                name: 'heading_h1',
                value: 'My heading',
                type: 'text'
            }
        },
        {
            uid: 'CxSHx1',
            name: 'Sub Heading',
            level: 'h4',
            as: 'h4',
            variant: 'primary',
            type: 'string',
            formFields: {
                label: 'My subheading',
                name: 'subheading_h1',
                value: 'My subheading',
                type: 'text'
            }
        },
        {
            uid: 'CxDxBusinessServices',
            name: 'Business Services',
            collection: true,
            type: 'collection',
            meta: {
                collectionTitle: 'Business Services',
                collectionName: 'business_services',
            },
            formFields: [
                {
                    title: {
                        label: 'My heading',
                        name: 'heading_h1',
                        value: 'My heading',
                        type: 'text'
                    },
                    content: {
                        label: 'My content',
                        name: 'pContent',
                        value: 'Mon paragraphe',
                        type: 'textarea'
                    },
                    image: {
                        label: 'Icon or image',
                        name: 'iconOrImage',
                        type: 'file'
                    },
                }
            ],
        }
    ]
}

export type BusinessService = {
    title: string;
    content: string;
    features: Service[];
}

export type Service = {
    title: string;
    content: string;
    image: string;
}

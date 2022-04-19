export default
{
    name: 'Key Features',
    component_type: 'section',
    slug: 'key-features',
    uid: 'key_features',
    image: 'key-features-1.png',
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
            formField: {
                label: 'My heading',
                name: 'heading_h1',
                value: 'My heading',
                type: 'text'
            }
        },
        {
            uid: 'CxTxt',
            name: 'Paragraph',
            variant: '',
            formField: {
                label: 'My content',
                name: 'pContent',
                value: 'Mon paragraphe',
                type: 'textarea'
            }
        },
        {
            uid: 'CxDxKeyFeatures',
            name: 'Key Features',
            collection: true,
            type: 'KeyFeature',
            meta: {
                collectionTitle: 'Key features',
                collectionName: 'key_features_1',
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

export type KeyFeatures = {
    title: string;
    content: string;
    features: Feature[];
}

export type Feature = {
    title: string;
    content: string;
    image: string;
}

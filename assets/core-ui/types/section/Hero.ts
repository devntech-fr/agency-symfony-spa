export default
{
    name: 'Hero',
    slug: 'hero',
    uid: 'Sx0001',
    image: 'section-hero.png',
    component_type: 'section',
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
            uid: 'CxBtn',
            name: 'CTA',
            variant: 'variant',
            label: 'Mon bouton',
            type: 'button',
            formField: null
        },
        {
            uid: 'CxImage',
            name: 'Image',
            file: {
                src: '',
                alt: '',
                title: ''
            },
            formField: {
                label: 'Image',
                name: 'featuredImage',
                type: 'file'
            }
        }
    ]
}

type Hero = {
    title: string;
    content: string;
    button: CTA;
    image: string;
}

type CTA = {
    label: string;
    variant: string;
    url: string;
    target: string;
}

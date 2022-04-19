import HeroSchema from '../types/section/Hero';
import KeyFeaturesSchema from '../types/section/KeyFeatures';
import BusinessServicesSchema from '../types/section/BusinessServices';

export const schemas = {
    'hero': HeroSchema,
    'key_features': KeyFeaturesSchema,
    'business_services': BusinessServicesSchema
}

export type Schema = {
    name: string,
    component_type: string,
    slug: string,
    uid: string,
    image: string,
    meta: object,
    seo: object,
    container: object,
    columns: number,
    isWhite: boolean,
    components: [],
}

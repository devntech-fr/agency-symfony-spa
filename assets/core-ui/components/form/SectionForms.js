import HeroForm from "./section/HeroForm";
import KeyFeaturesForm from "./section/KeyFeaturesForm";
import BusinessServicesForm from "./section/BusinessServicesForm";
import QualityFeaturesForm from "./section/QualityFeaturesForm";
import CoreFeaturesForm from "./section/CoreFeaturesForm";
import WorkflowForm from "./section/WorkflowForm";
import PricingPlanForm from "./section/PricingPlanForm";
import TeamForm from "./section/TeamForm";
import TestimonialsForm from "./section/TestimonialsForm";
import BlogForm from "./section/BlogForm";
import SubscribeForm from "./section/SubscribeForm";
import SocialFeaturesForm from "./section/SocialFeaturesForm";

export const forms = {
    hero: HeroForm,
    key_features: KeyFeaturesForm,
    business_services: BusinessServicesForm,
    quality_features: QualityFeaturesForm,
    core_features: CoreFeaturesForm,
    workflow: WorkflowForm,
    pricing_plans: PricingPlanForm,
    team: TeamForm,
    testimonials: TestimonialsForm,
    blog: BlogForm,
    subscribe: SubscribeForm,
    social_features: SocialFeaturesForm,
}

export default function getForm(uid) {
    return forms[uid];
}

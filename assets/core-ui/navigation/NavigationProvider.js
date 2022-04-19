import _demo_navigation from './_demo';
import _navigation from './_default';

export default function getNavigation(navigation_name) {
    return true === navigation_name ? _demo_navigation : _navigation;
}
import demo from './demo';
import routes from './routes';

export default function getRoutes(route_collection_name) {
    return true === route_collection_name ? demo : routes;
}
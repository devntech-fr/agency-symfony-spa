import React from 'react'

const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('../views/theme/colors/Colors'))
const Typography = React.lazy(() => import('../views/theme/typography/Typography'))
const FormControl = React.lazy(() => import('../views/forms/form-control/FormControl'))
const PageEdit = React.lazy(() => import('../views/site/PageEdit'))
const PageList = React.lazy(() => import('../views/site/PageList'))
const PageSeo = React.lazy(() => import('../views/site/PageSeo'))
const Inventory = React.lazy(() => import('../views/ecommerce/Inventory'))
const Blog = React.lazy(() => import('../views/blog/Blog'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/', name: 'Tableau de bord', element: Dashboard },
  { path: '/theme/colors', name: 'Couleurs', element: Colors },
  { path: '/theme/typo', name: 'Typographie', element: Typography },
  { path: '/components/forms', name: 'Formulaires', element: FormControl },
  { path: '/site/pages', name: 'Liste des pages', element: PageList },
  { path: '/site/page/edit', name: 'Edition page', element: PageEdit },
  { path: '/site/seo', name: 'Edition SEO', element: PageSeo },
  { path: '/blog/articles', name: 'Articles de blog', element: Blog },
  { path: '/blog/tags', name: 'Tags', element: Blog },
  { path: '/ecommerce/inventory', name: 'Inventaire', element: Inventory },
]

export default routes

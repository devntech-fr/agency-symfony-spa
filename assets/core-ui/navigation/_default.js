import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _navigation = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Site',
  },
  {
    component: CNavGroup,
    name: 'Contenu',
    to: '/site',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Pages',
        to: '/site/pages',
      },
      {
        component: CNavItem,
        name: 'SEO',
        to: '/site/seo',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Blog',
    to: '/blog',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Articles',
        to: '/blog/articles',
      },
      {
        component: CNavItem,
        name: 'Tags',
        to: '/blog/tags',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'CPT',
    to: '/cpt',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Services',
        to: '/cpt/services',
      },
      {
        component: CNavItem,
        name: 'Réalisations',
        to: '/cpt/realisations',
      },
      {
        component: CNavItem,
        name: 'Staff',
        to: '/cpt/staff',
      },
      {
        component: CNavItem,
        name: 'Social Net.',
        to: '/cpt/social-network',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Médias',
    to: '/medias',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Images',
        to: '/medias/images',
      },
      {
        component: CNavItem,
        name: 'Vidéos',
        to: '/medias/videos',
      },
      {
        component: CNavItem,
        name: 'Fichiers',
        to: '/medias/files',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Theme',
  },
  {
    component: CNavGroup,
    name: 'Personnaliser',
    to: '/theme',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Colors',
        to: '/theme/colors',
        icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Typography',
        to: '/theme/typo',
        icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Composants dynamiques',
  },
  {
    component: CNavGroup,
    name: 'Formulaires',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Ajouter un formulaire',
        to: '/forms/add',
      },
      {
        component: CNavItem,
        name: 'Mes formulaires',
        to: '/components/forms/',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Outils',
  },
  {
    component: CNavGroup,
    name: 'Mises à jour',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'MAJ WordPress',
        to: '/maj/wordpress',
      },
      {
        component: CNavItem,
        name: 'MAJ Plugin',
        to: '/maj/plugin',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Sauvegardes',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Base de données',
        to: '/backup/database',
      },
      {
        component: CNavItem,
        name: 'Médias & fichiers',
        to: '/backup/files',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Boutique',
  },
  {
    component: CNavItem,
    name: 'Inventaire',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    to: '/ecommerce/inventory',
  },
  {
    component: CNavGroup,
    name: 'Commandes',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Paniers',
        to: '/orders/carts',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Paramètres',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Mon compte',
        to: '/mon-compte',
      },
      {
        component: CNavItem,
        name: 'Comptes utilisateurs',
        to: '/comptes-utilisateurs',
      },
      {
        component: CNavItem,
        name: 'Rôles & groupes',
        to: '/groupes-roles',
      },
      {
        component: CNavItem,
        name: 'Mes fonctionnalités',
        to: '/my-features',
      },
      {
        component: CNavItem,
        name: 'Mon abonnement',
        to: '/mon-abonnement',
      },
      {
        component: CNavItem,
        name: 'Mon mot de passe',
        to: '/mon-mot-de-passe',
      },
    ],
  },
]

export default _navigation

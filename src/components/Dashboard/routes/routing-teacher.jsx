
import Starter from '../views/starter/starter-teacher.jsx';
// ui components
import Cards from '../views/ui-components/cards.jsx';
import TooltipComponent from '../views/ui-components/tooltip.jsx';
import Questions from '../views/ui-components/questions.jsx';



var ThemeRoutes = [
  { 
    path: '/dashboard-teacher', 
    name: 'Dashboard', 
    icon: 'ti-loop', 
    component: Starter 
  },
  {
    path: '/payment',
    name: 'Payment',
    icon: 'mdi mdi-credit-card-multiple',
    component: Cards
  },
  {
    path: '/settings',
    name: 'Toltips',
    icon: 'mdi mdi-image-filter-vintage',
    component: TooltipComponent
  },
  {
    path: '/quiz',
    pathTo: '/quiz/:question',
    component: Questions
  },

  { path: '/', pathTo: '/dashboard-teacher', name: 'Dashboard', redirect: true },
  { path: '/classroom-teacher', pathTo: '/dashboard-teacher/classroom-teacher/:handle', name: 'Dashboard', redirect: true },
  { path: '/questions', pathTo: '/questions/:question', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;


import Starter from '../views/starter/starter.jsx';
// ui components
import Cards from '../views/ui-components/cards.jsx';
import TooltipComponent from '../views/ui-components/tooltip.jsx';
import QuizList from '../views/ui-components/quizlist.jsx';
import QuizStudent from '../views/ui-components/quizstudent.jsx';
import QuizCompleted from '../views/ui-components/quizCompleted.jsx';



var ThemeRoutes = [
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    icon: 'ti-loop', 
    component: Starter 
  },
  {
    path: '/material',
    name: 'Video/Documents',
    icon: 'mdi mdi-apps',
    component: Cards
  },

  {
    path: '/payment',
    name: 'Quizzes',
    icon: 'mdi mdi-credit-card-multiple',
    component: QuizList
  },
  {
    path: '/settings',
    name: 'Toltips',
    icon: 'mdi mdi-image-filter-vintage',
    component: TooltipComponent
  },
  {
    path: '/start/quiz/:question',
    component: QuizStudent
  },
  {
    path: '/quizcompleted',
    component: QuizCompleted
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true },

];
export default ThemeRoutes;

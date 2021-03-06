import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/account/Login.vue';
import Register from '../views/account/Register.vue';
import OnboardingForm from '../views/account/OnboardingForm.vue';
import StartingPoint from '../views/onboarding/StartingPoint.vue';
import StartingDashboard from '../views/onboarding/StartingDashboard.vue';
import ProcessRequest from '../views/onboarding/ProcessRequest.vue';
import ForgotPassword from '../views/account/ForgotPassword.vue';
import EmailSent from '../views/account/EmailSent.vue';
import ResetPassword from '../views/account/ResetPassword.vue';
import Nav from '../components/nav/MenuLinks.vue';
import Home from '../views/dashboard/Home.vue';
import ChurchDashboard from '../views/dashboard/ChurchDashboard.vue';
import People from '../views/people/People.vue';
import PeopleEmpty from '../views/people/PeopleEmpty.vue';
import ImportPeople from '../views/people/ImportPeople.vue';
import AddPerson from '../views/people/AddPerson.vue';
import List from '../views/people/PeopleList.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/nav',
    name: 'Nav',
    component: Nav,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    component: OnboardingForm
  },
  {
    path: '/onboarding/step2',
    name: 'StartingPoint',
    component: StartingPoint
  },
  {
    path: '/next',
    name: 'StartingDashboard',
    component: StartingDashboard
  },
  {
    path: '/processing',
    name: 'ProcessRequest',
    component: ProcessRequest
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/email-sent/:email',
    name: 'EmailSent',
    component: EmailSent
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: ChurchDashboard
      },
      {
        path: '/home/people',
        component: People,
        children: [
          {path: '', component: PeopleEmpty},
          {path: '/people/import', component: ImportPeople}
        ]
      },
      {
        path: '/home/add-person',
        component: AddPerson
      },
    ]
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("token")
//   if ((to.name !== "Login" && to.name !== "Register") && to.name !== "Onboarding" &&  to.name !== "StartingPoint" && !token) return next("/")
//   if ((to.name === "Login" || to.name === "Register") && token) return next("/next")
//   next(true)
// })

// router.beforeResolve((to, from, next) => {
//   // If this isn't an initial page load.
//   if (to.name) {
//     // Start the route progress bar.
//     NProgress.start()
//   }
//   next()
// })

// router.afterEach((to, from) => {
//   // Complete the animation of the route progress bar.
//   NProgress.done()
// })

export default router

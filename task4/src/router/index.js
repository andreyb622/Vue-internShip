import { createRouter, createWebHistory } from "vue-router";

import TeamsList from "../components/teams/TeamsList.vue";
import UsersList from "../components/users/UsersList.vue";
import TeamMembers from "../components/teams/TeamMembers.vue";
import NotFound from "../components/nav/NotFound.vue";
import Auth from "../components/auth/Auth.vue";


const routes = [
  {
    path: "/",
    redirect: "/auth"
  },
  {
    name: "teams",
    path: "/teams",
    meta: { needsAuth: true },
    component: TeamsList,
    children: [
      {
        name: "team-members",
        path: ":teamId",
        component: TeamMembers,
        props: true
      }
    ]
  },
  {
    path: "/users",
    component: UsersList
  },
  { path: "/auth", component: Auth },
  { path: "/:notFound(.*)", component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(function(to, _from, next) {
  if(to.path === '/teams') {
    if(!localStorage.getItem('auth')) {
      next('/auth')
    } else {
      next()
    }
  }
  if(to.path === '/auth') {
    if(localStorage.getItem('auth')) {
      next('/users')
    } else {
      next()
    }
  }
  next()
});

export default router;

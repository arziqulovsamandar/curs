export default {
  path: "/superadmin",
  name: "superadmin",
  component: () => {
    return import("../views/superadmin/Superadmin.vue");
  },
  children: [
    {
      path: "/users",
      name: "Users",
      component: () => {
        return import("../views/superadmin/Users.vue");
      },
    },
    {
      path: "/superadmin",
      name: "Superadmin",
      component: () => {
        return import("../views/superadmin/Countires1.vue");
      },
    },
  ],
};

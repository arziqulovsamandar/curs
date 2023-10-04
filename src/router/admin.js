export default {
  path: "/admin",
  name: "admin",
  component: () => {
    return import("../views/admin/Admin.vue");
  },
  children: [
    {
      path: "/products",
      name: "Products",
      component: () => {
        return import("../views/admin/Products.vue");
      },
    },
    {
      path: "/admin",
      name: "Admin",
      component: () => {
        return import("../views/admin/Countries.vue");
      },
    },
  ],
};

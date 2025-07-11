import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProductPage from '../views/ProductPage.vue';
import ShoppingCart from '../views/ShoppingCart.vue';
import UserProfile from '../views/UserProfile.vue';
import AboutPage from "@/views/AboutPage.vue";
import UavPage from "@/views/UavPage.vue";
import FactoryLogin from "@/components/FactoryLogin.vue";
import FactoryCabinet from '@/views/FactoryCabinet.vue';
import AddProduct from "@/components/AddProduct.vue";
import HelicoptersPage from "@/views/HelicoptersPage.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/product/:id', component: ProductPage, props: true },
    { path: '/cart', component: ShoppingCart },
    { path: '/profile', component: UserProfile },
    { path: '/about', component: AboutPage },
    { path: "/uav", component: UavPage },
    { path: '/for-manufacturers', component: FactoryLogin },
    { path: '/add-product', component: AddProduct },
    { path: '/factory-cabinet', component: FactoryCabinet },
    { path: '/helicopters', component: HelicoptersPage},
    {
        path: '/my-vue-marketplace',
        redirect: '/'
    },
    {
        path: '/',
        component: HomePage
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
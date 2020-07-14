import VueRouter from 'vue-router'
import SignUpForm from '../components/SignUpForm'
import SuccessfulSignUp from '../components/SuccessfulSignUp'
import Login from '../components/Login'
import Blog from '../components/Blog'

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/signup'
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUpForm,
        },
        {
            path: '/signup/success',
            name: 'signup_success',
            component: SuccessfulSignUp,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog,
        },
    ]
})
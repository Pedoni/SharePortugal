import Vue from 'vue'
import Router from 'vue-router'
import SharePortugal from '@/components/SharePortugal'
import Room from '@/components/Room'
import Login from '@/components/Login'
import RoomDefinitions from '@/components/RoomDefinitions'
import SignUp from '@/components/SignUp'
import teste from '@/components/teste'
import PhotosTest from '@/components/PhotosTest'
import PersonalInformation from '@/components/PersonalInformation'




Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'SharePortugal',
            component: SharePortugal
        },

        {
            path: '/locals/:_id',
            name: 'Room',
            component: Room
        },

        {
            path: '/login',
            name: 'Login',
            component: Login
        },

        {
            path: '/local/:_id',
            name: 'RoomDefinitions',
            component: RoomDefinitions
        },

        {
            path: '/signUp',
            name: 'SignUp',
            component: SignUp
        },

        {
            path: '/teste',
            name: 'teste',
            component: teste
        },
        {
            path: '/PhotosTest',
            name: 'PhotosTest',
            component: PhotosTest
        },
        {
            path: '/local/:_id/personalInformation',
            name: 'PersonalInformation',
            component: PersonalInformation
        }
    ]
})
import Home from "../pages/Home/index.js"
import Following from "../pages/Following/index.js"
import Upload from "../pages/Upload/index.js"
import Profile from "../pages/Profile/index.js"
import HeaderOnly from "../components/Layout/HeaderOnly/index.js"
import Search from "../components/Layout/components/Search/index.js"
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: "/@:nickname", component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null }
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
import React,{Component} from 'react'
import Loadable from 'react-loadable'
const MyLoadingComponent = () =>{
    return <div>loading....</div>
}
const Home = Loadable({
    loader:()=> import('../containers/Home'),
    loading:MyLoadingComponent
})
const Classify = Loadable({
    loader:()=> import('../containers/Classify'),
    loading:MyLoadingComponent
})
const Find = Loadable({
    loader:()=> import('../containers/Find'),
    loading:MyLoadingComponent
})
const Mine = Loadable({
    loader:()=> import('../containers/Mine'),
    loading:MyLoadingComponent
})
const Gw = Loadable({
    loader:()=> import('../containers/Gw'),
    loading:MyLoadingComponent
})

export default {
    Home,
    Gw,
    Classify,
    Mine,
    Find
}
import { Button } from 'antd'
import Link from 'next/link'
import Router from 'next/router'
import Comp from '../components/comp'

export default () => {
    function goTo() {
        Router.push({
            pathname: '/a',
            query: {
                id: 2
            }
        }, '/a/2')     
    }

    return (
        <>
           <button onClick={goTo}>编程式导航</button>
           <div className="aa">index</div> 
        </>
    )
}
import React from 'react'
import {Link,Switch} from 'react-router-dom'

class Routes extends React.Component{
    state={
        list:[
            {name:'tab1',path:'/'},
            {name:'tab2',path:'/'},
            {name:'tab3',path:'/'},
            {name:'tab4',path:'/'}
        ]
    }
    render(){
        return <div>
            {
                list.map((item,key)=>{
                    return <div>
                        <span to="item.path">{item.name}</span>
                    </div>
                })
            }
        </div>
    }
}
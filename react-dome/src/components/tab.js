import React from 'react'

class Tabs extends React(Component){
    state={
        list:[
            {title:'洗衣液',money:14.9},
            {title:'洗涤液',money:23.9},
            {title:'拖布',money:16},
            {title:'吸尘器',money:175},
        ]
    }
    render(){
        const {list} = this.state
        return <div>
            {
                list.map((item,key)=>{
                    return <span key={key}>
                        {item.title}{item.money}     
                    </span>
                })
            }
        </div>
    }
}
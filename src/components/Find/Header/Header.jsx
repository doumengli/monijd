import React, {Component} from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import './style.css'
export default class Header extends Component{
   render () {
    const tabs = [
        { title: 'First Tab' },
        { title: 'Second Tab' },
        { title: 'Third Tab' },
      ];
       return(
           <div>
           
           <WhiteSpace />
           <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
               Content of first tab
             </div>
             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
               Content of second tab
             </div>
             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
               Content of third tab
             </div>
           </Tabs>
           <WhiteSpace />
         </div>
   
       )
   }
}







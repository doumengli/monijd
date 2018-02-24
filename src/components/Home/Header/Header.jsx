import React, {Component} from 'react'
import { SearchBar} from 'antd-mobile';
import './style.css'
export default class Header extends Component{
   render () {
       return(
           <div className='heds'>
            <SearchBar
            placeholder="法国好物盛鼎，全球购买199减100"
            ref={ref => this.manualFocusInst = ref}
            className='heds'
        />
      </div>
       )
   }
}


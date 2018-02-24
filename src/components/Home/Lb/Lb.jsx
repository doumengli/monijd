import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { SearchBar} from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
@withRouter
export default class Lb extends Component{
    state = {
        data: ['', '', '','','',''],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['https://m.360buyimg.com/mobilecms/s1125x549_jfs/t14647/188/1431406181/193971/aefefae3/5a4f2b46N6e287aaf.jpg!q70.jpg', 'https://img1.360buyimg.com/da/jfs/t14551/333/1441555454/195288/c6fdab81/5a4f2ac1N323aac97.jpg', 'https://img1.360buyimg.com/da/jfs/t14278/49/1442196318/182418/b68680fa/5a4f2872N0869780a.jpg'],
          });
        }, 100);
      }
    render(){
        return (
            <div>
          <WingBlank className='lb'>
          <Carousel
            autoplay={true}
            infinite
            selectedIndex={1}
           
          >
            {this.state.data.map(ii => (
              <a
                key={ii}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={`${ii}`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              
              </a>
            ))}
          </Carousel>
        </WingBlank>
            </div>
        )
    }
}


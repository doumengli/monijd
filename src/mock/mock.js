import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter'; // adapter 适配器
import jdList from './datas/datas.json'
const mock = new AxiosMockAdapter(axios);
const bootstrap = () => {
    mock.onGet('/list').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200,jdList])
        })
    })
}
export default bootstrap
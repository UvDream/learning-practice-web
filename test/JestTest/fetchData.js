
import axios from 'axios'

export const fetchData = (fn)=>{
    axios.get('http://a.jspang.com/jestTest.json').then((response)=>{
        fn(response.data)
    })
}
export const fetchThreeData = ()=>{
    return axios.get('http://a.jspang.com/jestTest_error.json')
}
export const fetchFourData = ()=>{
    return axios.get('http://a.jspang.com/jestTest.json')
}
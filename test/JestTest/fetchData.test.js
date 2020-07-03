import { fetchData,fetchThreeData,fetchFourData } from './fetchData.js'

test('fetchData 测试',(done)=>{
   fetchData((data)=>{
       expect(data).toEqual({
           success: true
       })
       done()
   })
  })

test('FetchThreeData 测试', ()=>{
    expect.assertions(1)  // 断言，必须执行一次expect
    return fetchThreeData().catch((e)=>{
      expect(e.toString().indexOf('404')> -1).toBe(true)

    })
})
test('FetchFourData 测试', async()=>{
    const response  = await fetchFourData()
    expect(response.data).toEqual({
        success : true
    })
})
test('测试007号技师的匹配',()=>{
    expect('007号技师').toBe('007号技师')
}) 
// test("toBe",()=>{
//     // ===
//     const a={number:'007'}
//     expect(a).toBe({number:'007'})
// })
test("toEqual",()=>{
    const a={number:'007'}
    expect(a).toEqual({number:'007'})
})
test("toBeNull",()=>{
    const a=null
    expect(a).toBeNull()
})
test("toBeUndefined",()=>{
    const a=undefined
    expect(a).toBeUndefined()
})
test("toBeDefined",()=>{
    const a=1
    expect(a).toBeDefined()
})
// 判断真假
test("toBeTruthy",()=>{
    const a=true
    expect(a).toBeTruthy()
})
test("toBeFalsy",()=>{
    const a=false
    expect(a).toBeFalsy()
})
// 大于一个值
test("toBeGreaterThan",()=>{
    const count = 10
    expect(count).toBeGreaterThan(9)
})
// 小于某个值
test('toBeLessThan匹配器',()=>{
    const count = 10
    expect(count).toBeLessThan(11)
})
// 大于等于
test('toBeGreaterThan匹配器',()=>{
    const count = 10
    expect(count).toBeGreaterThanOrEqual(10)
})
// 小于等于
test('toBeGreaterThanOrEqual匹配器',()=>{
    const count = 10
    expect(count).toBeGreaterThanOrEqual(10)
})

// 消除浮点精度错误
test('toBeCloseTo匹配器',()=>{
    const one = 0.1
    const two = 0.2
    expect(one + two).toBeCloseTo(0.3)
})

// 字符串包含匹配器
test('toMatch匹配器',()=>{
    const str="谢大脚、刘英、小红"
    expect(str).toMatch('谢大脚')
})
//数组包含匹配器
test('toContain匹配器',()=>{
    const arr=['谢大脚','刘英','小红']
    expect(arr).toContain('谢大脚')
})

// 专门对异常进行处理的匹配器
const throwNewErrorFunc = ()=>{
    throw new Error('this is a new error')
}

test('toThrow匹配器',()=>{
    expect(throwNewErrorFunc).toThrow()
})
// not匹配器是Jest中比较特殊的匹配器，意思就是相反或者说取反
// test('toThrow匹配器',()=>{
//     expect(throwNewErrorFunc).not.toThrow()
// })
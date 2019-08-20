import React, { useState } from 'react';
function Example() {
    const [age] = useState(18)
    const [sex] = useState('男')
     
    const [work] = useState('前端')

    return (
            <div>
                <p>年纪:{age}</p>
                <p>性别:{sex}</p>
                <p>工作:{work}</p>
            </div>
    )
}
 
export default Example;
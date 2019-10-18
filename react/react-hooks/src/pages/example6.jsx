import React from 'react';
import Buttons from './example/Buttons';
import ShowArea from './example/showArea';
import { Color } from './example/color';
function Example6(){
    return(
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}
export default Example6;
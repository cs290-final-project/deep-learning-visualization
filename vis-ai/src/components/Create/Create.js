import '../../App.css';
import React from 'react';

import TestElement from './TestElement';

const Create = () => {
    return (
       <div class="row">
           <div class="col-2">
                <testElement></testElement>
               {/* <h1>Layer Selector</h1>
               <p>Drag and drop different layer types into your net</p> */}
           </div>
           <div class="col-6">
               <h1>Network Visualization</h1>
               <p>Visualize the layers of your neural network</p>
           </div>
           <div class="col-4">
               <h1>Layer Details</h1>
               <p>Click on one of your layers to view the details</p>
           </div>
       </div>
    );
}
 
export default Create;
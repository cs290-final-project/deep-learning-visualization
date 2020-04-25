import '../../App.css';
import './Create.css';
import React from 'react';
import Card from '../generic_components/Card';
 
const Create = () => {
    return (
       <div class="row">
           <div class="col-3">
               <h1>Layer Selector</h1>
               <p>Drag and drop different layer types into your net</p>
               <Card />
           </div>
           <div class="col-6">
               <h1>Network Visualization</h1>
               <p>Visualize the layers of your neural network</p>
           </div>
           <div class="col-3">
               <h1>Layer Details</h1>
               <p>Click on one of your layers to view the details</p>
           </div>
       </div>
    );
}
 
export default Create;
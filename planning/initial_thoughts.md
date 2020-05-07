# Purpose
This document is an early brain dumb of my thoughts regarding this project. These are some of the "basic" things I 
think this project will require to meet our ultimate goal. 

# Core Functionality
- Ability to visually generate neural network architectures that get translated into torch code or select pre-defined 
architectures
    - If user is selecting pre-defined architecure, show a small popup with some basic information about that architecture? 
        - Original publication where it was invented
        - pros / cons of the pre defined architecture??? 
- Select datasets from the torch.datasets api?
- Training loops
    - Visually select loss metrics
    - Visualize the loss of the network over time? (THINK TENSORBOARD!)
    - Define training loops
        - How long should this thing train for? etc
- Toggleables / hyper parameter selection
    - Dropout / no dropout etc
    - Which initialization scheme should the network use??
- Ability to select pretrained models on certain datasets and make predictions on new sampels? I.E an image net model that accepts novel images and makes predictions.

# Basic Architecture
No matter how we frame this its going to be a complex application. I think it is important that we separate the deep learning and web side of things very early on

## Node.js-React Front/Backend
### Front-End? (Put Diagrams Here When Done)
We will render visual elements using react (or vue, I'm honestly agnostic as to how we produce the final product.)

One of the most important front end elements is the training dashboard. Here users can view the results of model training in the form of sexy graphs.

### Backend (Architectural Diagrams maybe? Better descriptions / things I missed?)
Backend logic will be handled using node. The main things that have to be handled
are the collection of the various parameters the user defined / entered on the front end and passing those to the ***deep end***

## Deepend API
As mentioned above, it is important in my opinion that we separate out the Deep Learning side of this project from the web side. I am calling this separation the 
"Deepend."

Once various knobs and dials have been set by the user on the front end and
collected by the backend. We will need to "ship" these data to the Deepend.

Here dynamic python code will be generated and executed to create and train 
neural networks to the users specifications.

Data leaves this layer in the form of training / testing metrics along with 
trained model files. These are then shipped to the front end and visualized on the training dashboard.
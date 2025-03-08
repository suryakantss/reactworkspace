import React from 'react'
import { createRoot } from 'react-dom/client'


let hdr1 = React.createElement('h3',null,'Welcome to React');
let hdr2= React.createElement('h3',null,'Happy Learning!!');
let dv = React.createElement('div',null,hdr1,hdr2);


createRoot(document.getElementById('root'))
        .render(dv)        
          
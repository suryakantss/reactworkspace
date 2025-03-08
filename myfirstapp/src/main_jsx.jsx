import React from 'react'
import { createRoot } from 'react-dom/client'

let dv = 
<div>
  <h3>Welcome to React</h3>
  <h3>Happy Learning!!</h3>
</div>


createRoot(document.getElementById('root'))
  .render(dv);

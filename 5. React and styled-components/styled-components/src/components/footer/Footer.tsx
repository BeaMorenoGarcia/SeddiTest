import React from 'react';
import { Button } from '../../styles/button';

const Footer:React.FC = ()=> (
  <> 
  <div className = {'footer'}>
      <Button color = "grey">Cancel</Button>
      <Button color = "rgb(0,206,205)">Submit</Button>
  </div>
  </>
)

export default Footer;
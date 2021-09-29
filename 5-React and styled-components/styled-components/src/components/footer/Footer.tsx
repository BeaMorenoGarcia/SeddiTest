import React from 'react';
import { Button } from '../../styles/button';

const Footer:React.FC = ()=> (
  <> 
  <div style={{height: "10%",
    position: "absolute",
    bottom: "-4px",
    right: "10px",}}>
      <Button>Cancel</Button>
      <Button>Submit</Button>
  </div>

  </>
)

export default Footer;
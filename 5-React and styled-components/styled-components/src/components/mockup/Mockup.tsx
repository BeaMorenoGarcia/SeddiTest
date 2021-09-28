import React from 'react';
import Body from '../body/Body';
import Footer from '../footer/Footer';
import { Modal } from '../../styles/modal'

const Mockup:React.FC = ()=> (
  <>
  <Modal>
    <Body></Body>
    <Footer></Footer>
  </Modal>
  </>
)

export default Mockup;
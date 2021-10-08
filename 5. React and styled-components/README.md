# 6. React Components & UI Reusability

In the solution, there are 3 react components (Mockup, Body and Footer) and 7 styled-components (Button, Checkbox, Label, Modal-Header, Modal-Body, Modal an Title). The composition is something like this:
``` 
  <Modal>
    <ModalHeader>
      <Title>Copy to...</Title>
    </ModalHeader>
    <Body>
      <div className={'first-option'} key="0"><Label>New Collection</Label><Checkbox type="checkbox"></Checkbox></div>
      <ModalBody>
        {items}
      </ModalBody>
    </Body>
    <Footer>
      <div className = {'footer'}>
          <Button color = "grey">Cancel</Button>
          <Button color = "rgb(0,206,205)">Submit</Button>
      </div>
    </Footer>
  </Modal>
```

The Body component has ```{items}``` that it was a while loop to create n elements with the label and the input type checkbox.
The styled-component Button receives a color prop that is used in the border and color CSS properties. This component has a pseudo-class "hover" to change the style when the user position the pointer over it.

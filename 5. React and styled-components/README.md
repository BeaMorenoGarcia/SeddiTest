# 5. React and styled-components

In the solution, there are 3 react components (Mockup, Body and Footer) and 7 styled-components (Button, Checkbox, Label, Modal-Header, Modal-Body, Modal an Title). The composition is something like this:
``` 
<Mockup {...props}>
    <Modal>
      <ModalHeader>
        <Title>{this.title}</Title>
      </ModalHeader>
      <Body {...this.propsBody}>
        this.show ? 
        <>
        <div className={'first-option'} key="0"><Label>New Collection</Label><Checkbox type="checkbox"></Checkbox></div>
        <ModalBody>
          {items}
        </ModalBody>
        </>
        : <div></div>
      </Body>
      <Footer>
        <div className = {'footer'}>
            <Button color = "grey">Cancel</Button>
            <Button color = "rgb(0,206,205)">Submit</Button>
        </div>
      </Footer>
    </Modal>
</Mockup>
```

The Mockup component has as output properties:
- title: is passed to the Title styled-component.
- show: to control which components are shown in the Body component.

The Body component has ```{items}``` that it was a while loop to create n elements with the label and the input type checkbox. It has an input property ````{...this.propsBody}``` to control which components are showed.

The styled-component Button receives a color prop that is used in the border and color CSS properties. This component has a pseudo-class "hover" to change the style when the user position the pointer over it.

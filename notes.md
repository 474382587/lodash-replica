Enzyme + Jest

Enzyme
EnzymeAdaptor

Shallow => only parent component

```
const wrapper = shallow(<App />);

wrapper.debug() // => this is how you can debug => console.log(wrapper.debug())

expect(wrapper).toBeTruty() // => should be rendered correctly

```


Unit test    
 test one piece of code
 
Integration test    
 how multiple units work together
 
E2E test    
 how a user would interact with app
 
Test goals:  
1. Easy to be matained(no rewrite testing code after updating the implementation)
2. Easy diagnosis of failing tests



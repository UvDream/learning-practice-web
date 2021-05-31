let f = () => ({name: 'Alice'})
let g = () => ({name: 'Alice', location: 'Beijing'})
f = g
g = f
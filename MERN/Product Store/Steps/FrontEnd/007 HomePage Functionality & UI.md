# phase 7. impletmenting Toast in CreatePage UI       
----->`src`----->`pages`----->`HomePage.jsx`  
### 1. need to import simpleGrid:  
```jsx
import { SimpleGrid } from '@chakra-ui/react'
```  
### 2. snippet:  
```jsx
<SimpleGrid columns={2} spacing={5}>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
</SimpleGrid>
```  
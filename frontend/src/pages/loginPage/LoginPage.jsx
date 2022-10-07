import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
    Tab,
    Text
  } from '@chakra-ui/react'


const LoginPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  


  return (
    <>
    <Button variant="ghost" ref={btnRef} _hover="none" onClick={onOpen}>
     Login
    </Button>
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={btnRef}
      size="lg"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Sign in to access all the latest products</DrawerHeader>

        <DrawerBody>
        <Tabs size='md' variant='enclosed'>
          <TabList>
            <Tab fontWeight="bold">Login</Tab>
            <Tab fontWeight="bold">Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Input type="email" placeholder="Enter email" m="0.5rem"/>
              <Input type="password" placeholder="Enter password"  m="0.5rem"/>
              <Text m="0.5rem" textDecoration='underline' color="blue" cursor="pointer">Forgot Password?</Text>
              <Button colorScheme="blue" m="0.5rem">Login</Button>
            </TabPanel>
            <TabPanel>
              <Input type="text" placeholder="Enter username" m="0.5rem"/>
              <Input type="email" placeholder="Enter email" m="0.5rem"/>
              <Input type="password" placeholder="Enter password"  m="0.5rem"/>
              <Button variant="outline" m="0.5rem">Signup</Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
        </DrawerBody>

        <DrawerFooter>
          <Button variant='outline' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='blue'>Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </>
  )
}

export default LoginPage
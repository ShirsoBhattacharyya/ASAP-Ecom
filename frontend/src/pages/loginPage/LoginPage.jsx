import React,{ useState } from 'react';
import axios from 'axios';
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
    Box,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
    Tab,
    Text,
    Image,
    Flex
  } from '@chakra-ui/react';
  import { useDispatch, useSelector } from "react-redux";
  import {signup} from '../../store/login-signup/signup.actions.js';
  import {login,logout} from '../../store/login-signup/login.actions.js';
  import {CgProfile} from 'react-icons/cg';
import { useEffect } from 'react';

const LoginPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const [signupform,setSignupForm]=useState({username:"",email:"",password:""});
    const [loginForm,setLoginForm]=useState({email:"",password:""});
    const signuptoken = useSelector((store) => store.signup.token);
    let auth = useSelector(store => store.auth);
    let [id, email, password] = auth.token.split(":");
    const dispatch = useDispatch();
    const handleSignupChange=(e)=>{
      const {name,value}=e.target;
      setSignupForm({...signupform,[name]:value})
    }
    const handleSignup=(e)=>{
      e.preventDefault();    
      dispatch(signup(signupform));
      console.log(signuptoken);
    }

    const handleLoginChange=(e)=>{
      const {name,value}=e.target;
      setLoginForm({...loginForm,[name]:value})
    }
    const handleLogin=(e)=>{
      e.preventDefault()
      dispatch(login(loginForm));
      onClose();
    }
    const [userProducts,setUserProducts]=useState([]);
    const getProducts=(id)=>{
      axios.get(`https://asap-backend-server-deploy.herokuapp.com/carts/${id}`).then(res=>setUserProducts(res.data))
    }
    useEffect(()=>getProducts(id),[userProducts,id]);
  return (
  <>
    <Button variant="ghost" ref={btnRef} _hover="none" onClick={onOpen}>
     {email? <><CgProfile size={28}/><p style={{marginLeft:'0.5rem'}}>{email}</p></>:'Login/ Join ASAP'}
    </Button>
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={btnRef}
      size="lg"
    >
          {
            (email)?(
              <>
              <DrawerOverlay />
              <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Profile Information</DrawerHeader>
              <DrawerBody>
                <CgProfile size={100}/>
                <br />
                <Text fontSize={'22px'} fontWeight={'500'}>Email ID:</Text><p>{email}</p>
                <br />
                <Text fontSize={'22px'} fontWeight={'500'}>Products in Cart</Text>
                {
                  userProducts.map(el=>(
                    <>
                    <Flex alignItems='center' gap='1rem'>
                      <Image src={el.productsId.image} style={{height:'100px',width:'100px'}}/>
                      <Text fontSize={'22px'} fontWeight={'500'}>{el.productsId.title}</Text>
                    </Flex>
                    <p>{el.productsId.desc}</p>
                    </>
                  ))
                }
                <br />
                <Button colorScheme='red' p="1rem 2rem" onClick={()=>dispatch(logout())}>Logout</Button>
              </DrawerBody>
              </DrawerContent>
              </>
            ):(
       <>       
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
          <DrawerHeader>Join ASAP to access all the latest products</DrawerHeader>
            <DrawerBody>
              <Tabs size='md' variant='enclosed'>
                <TabList>
                  <Tab fontWeight="bold">Login</Tab>
                  <Tab fontWeight="bold">Signup</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Input onChange={handleLoginChange} value={loginForm.email} name='email' type="email" placeholder="Enter email" m="0.5rem"/>
                    <Input onChange={handleLoginChange} value={loginForm.password} name='password' type="password" placeholder="Enter password"  m="0.5rem"/>
                    <Text m="0.5rem" textDecoration='underline' color="blue" cursor="pointer">Forgot Password?</Text>
                    <Button onClick={handleLogin} colorScheme="blue" m="0.5rem">Login</Button>
                  </TabPanel>
                  <TabPanel>
                    <Input onChange={handleSignupChange} value={signupform.name} name="username" type="text" placeholder="Enter username" m="0.5rem"/>
                    <Input onChange={handleSignupChange} value={signupform.email} name="email" type="email" placeholder="Enter email" m="0.5rem"/>
                    <Input onChange={handleSignupChange} value={signupform.password} name="password" type="password" placeholder="Enter password"  m="0.5rem"/>
                    <Button onClick={handleSignup} variant="outline" m="0.5rem">Signup</Button>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </DrawerBody>
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
        </>
            )
          }

    </Drawer>
  </>
  )
}

export default LoginPage ;
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)

  const [form, setForm] = useState({
    nome:{
      hasChanged: false,
      value:""
    },
    email:{
      hasChanged: false,
      value:""
    },
    senha:{
      hasChanged: false,
      value:""
    },
    senha2:{
      hasChanged: false,
      value:""
    }
  })

  const isEmailValid = (email:string) => {
    return /\S+@\S+\.\S+?/.test(email);
  }

  

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            REGISTRO
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            É rápido e fácil.
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="firstName" isRequired>
              <FormLabel>Nome</FormLabel>
              <Input  placeholder="Digite o seu nome" type="text" value={form.nome.value} data-testid="nome-required" onChange={event => setForm({...form, nome:{ hasChanged: true ,value: event.target.value}})}/>
              {form.nome.hasChanged && !form.nome.value && <Text color={'red'} data-testid="nome-required">Nome e obrigatorio</Text> }
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Digite o seu email" type="email" value={form.email.value} data-testid="email-required" onChange={event => setForm({...form, email:{ hasChanged: true ,value: event.target.value}})}/>
              {form.email.hasChanged && !form.email.value && <Text color={'red'} data-testid="email-required">Email e obrigatorio</Text> }
              {form.email.hasChanged && !isEmailValid(form.email.value) && <Text color={'red'} data-testid="email-invalid">Email e invalido</Text> }
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Senha</FormLabel>
              <InputGroup>
                <Input placeholder="Digite sua senha " type={showPassword ? 'text' : 'password'} value={form.senha.value} data-testid="senha-required" onChange={event => setForm({...form, senha:{ hasChanged: true ,value: event.target.value}})} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
                      {form.senha.hasChanged && !form.senha.value && <Text color={'red'} data-testid="senha-required">Senha e obrigatorio</Text> }
            </FormControl>
            <FormControl id="password2" isRequired>
              <FormLabel>Confirme sua Senha</FormLabel>
              <InputGroup>
                <Input placeholder="Confirme sua senha " type={showPassword ? 'text' : 'password'} value={form.senha2.value} data-testid="senha2-required" onChange={event => setForm({...form, senha2:{ hasChanged: true ,value: event.target.value}})}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
                      {form.senha2.hasChanged && !form.senha2.value && <Text color={'red'} data-testid="senha2-required">Senha e obrigatorio</Text> }
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                colorScheme='blue'
                color={'white'}
                >
                Registar
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Ja possui conta? <Link color={'blue.400'} href={'Login'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
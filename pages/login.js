import { Box, Button, Flex, Stack, Icon, Link } from '@chakra-ui/react'
import { useAuth } from '@/lib/auth';
import Page from '@/components/Page';
import { GithubIcon, GoogleIcon, LogoIcon } from '@/styles/theme'
import React from 'react'

const Login = () => {
  const auth = useAuth();

  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
      backgroundColor={['white', 'gray.100']}
    >
      <Stack
        backgroundColor="white"
        borderRadius={[0, 8]}
        maxWidth="400px"
        px={8}
        py={12}
        shadow={[null, 'md']}
        spacing={4}
        w="100%"
      >
        <Flex justify="center">
          <Box as="a" href="/" aria-label="Back to homepage">
            <LogoIcon color="black" size="56px" mb={4} />
          </Box>
        </Flex>
        <Button
          onClick={() => auth.signinWithGitHub('/sites')}
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          leftIcon={<GithubIcon />}
          mt={2}
          h="50px"
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
        >
          Continue with GitHub
        </Button>
        <Button
          onClick={() => auth.signinWithGoogle('/sites')}
          backgroundColor="white"
          color="gray.900"
          variant="outline"
          fontWeight="medium"
          leftIcon={<GoogleIcon />}
          mt={2}
          h="50px"
          _hover={{ bg: 'gray.100' }}
          _active={{
            bg: 'gray.100',
            transform: 'scale(0.95)'
          }}
        >
          Continue with Google
        </Button>
      </Stack>
    </Flex>
  );
};

const LoginPage = () => (
  <Page name="Login" path="/login">
    <Login />
  </Page>
);

export default LoginPage;

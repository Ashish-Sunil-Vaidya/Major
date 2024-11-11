import {
    Box, Button, Heading, Image, Input,
    // Popover,
    // PopoverArrow,
    // PopoverBody,
    // PopoverCloseButton,
    // PopoverContent,
    // PopoverHeader,
    // PopoverTrigger,
    Stack, Text,
    // useDisclosure,
    VStack
} from "@chakra-ui/react";
import { useState } from "react";
import { Link as NLink } from "react-router-dom";
import { Field } from "@/components/ui/field";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            height="100svh"
            width="100%"
            alignItems="center"
            justifyContent="center"
            position="relative"
            overflowX="hidden"
        >
            <Box p={4} display={{ base: "block", md: "none" }} zIndex={3}>
                <Text fontWeight="bold">Hi! Welcome back to</Text>
                <Button as={NLink} to="/" variant="link" fontSize="3xl" >C. A. A. P.</Button>
                <Text textAlign="right">Sign Up to connect</Text>
            </Box>

            <VStack
                width={{ base: "100%", md: "60%" }}
                p={{ base: 4, md: 10 }}
                textAlign={{ base: "center", md: "left" }}
                align="baseline"
                justify={"center"}
                alignItems="center"
                zIndex={2}
                display={{ base: "none", md: "flex" }}
            >
                <Heading mb={4} size="xl"> Hi! Welcome to
                </Heading>
                <Button as={NLink} to="/" variant="link" fontSize={80} >
                    C. A. A. P.
                </Button>
            </VStack>

            <Image position="fixed" width="60%" objectFit="cover" opacity={0.1} zIndex={0} minW="500px" />

            <Box
                width={{ md: "30%" }}
                minWidth={{ base: "100%", md: "500px" }}
                p={{ base: 4, md: 10 }}
                borderRadius="md"
            >
                <Stack maxWidth="100%" minWidth="200px" spacing={4} p={3} rounded="md" >
                    <Field label="Email" errorText="Enter a valid email">
                        <Input
                            rounded="none"
                            border="2px solid"
                            width="full"
                            minW="150px"
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Field>
                    <Field label="Password" errorText="This field is required">
                        <Input
                            rounded="none"
                            border="2px solid"
                            width="full"
                            minW="150px"
                            type="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Field>

                    {/* <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} closeOnBlur={false}>
                        <PopoverTrigger>
                            <Button marginLeft="auto" variant="link" w="fit-content" h="fit-content">Forgot Password?</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>Reset Your Password!</PopoverHeader>
                            <PopoverBody>
                                <Field errorText="Enter a valid email">
                                    <Input
                                        rounded="none"
                                        border="2px solid" mt={3} type="email" placeholder="Enter Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                </Field>
                                <Button w="100%" colorScheme="blue" >Send OTP</Button>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover> */}

                    <Button colorScheme="blue" width="full" mt={4}  >
                        Sign In
                    </Button>

                    <Box mt={5}  textAlign="center">
                    Don&apos;t have an account? <Button fontSize="lg" variant="link" as={NLink} to="/register" colorScheme="blue">Register here!</Button>
                </Box>
                </Stack>


            </Box>
        </Box>
    );
};

export default Login;

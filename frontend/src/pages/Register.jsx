import {
    Box,
    Button,
    Heading,
    Image,
    Input,
    Stack,
    Text,
    VStack,
    HStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { createListCollection } from "@chakra-ui/react"
import { Link as NLink } from 'react-router-dom';
import { Field } from "@/components/ui/field";
import {
    SelectContent,
    SelectItem,
    SelectItemGroup,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@/components/ui/select";

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [otp, setOTP] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [ageError, setAgeError] = useState(false);

    const genderOptions = createListCollection({
        items: [
            { label: "Male", value: "male", group: "Gender" },
            { label: "Female", value: "female", group: "Gender" },
            { label: "Other", value: "other", group: "Gender" },
        ],
    });

    const genderCategories = genderOptions.items.reduce(
        (acc, item) => {
            const group = acc.find((group) => group.group === item.group);
            if (group) {
                group.items.push(item);
            } else {
                acc.push({ group: item.group, items: [item] });
            }
            return acc;
        },
        [],
    );

    return (
        <Box
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            height={{ "md": "100svh" }}
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
                            width="full"
                            minW="150px"
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                const regExp = /[A-Z]/;
                                regExp.test(e.target.value) ? setEmailError(true) : setEmailError(false);
                            }}
                            border="2px solid"
                            borderRadius="none"
                        />
                    </Field>
                    <Field label="Username" errorText="This field is required">
                        <Input
                            width="full"
                            minW="150px"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            border="2px solid"
                            borderRadius="none"
                        />
                    </Field>
                    <HStack>
                        <Field label="Age" errorText="Enter valid age (0-80)">
                            <Input
                                width="full"
                                minW="50px"
                                type="number"
                                placeholder="Enter Age"
                                value={age}
                                onChange={(e) => {
                                    setAge(e.target.value);
                                    const ageValue = parseInt(e.target.value, 10);
                                    ageValue < 18 && ageValue > 80 ? setAgeError(true) : setAgeError(false);
                                }}
                                border="2px solid"
                                borderRadius="none"
                            />
                        </Field>
                        <Field errorText="This field is required">
                            <SelectRoot variant="unstyled" collection={genderOptions} size="sm" width="full" onValueChange={setGender} >
                                <SelectLabel>Select Gender</SelectLabel>
                                <Box border="2px solid"><SelectTrigger>
                                    <SelectValueText placeholder="Select Gender" />
                                </SelectTrigger>
                                    <SelectContent >
                                        {genderCategories.map((category) => (
                                            <SelectItemGroup key={category.group} label={category.group}>
                                                {category.items.map((item) => (
                                                    <SelectItem item={item} key={item.value}>
                                                        {item.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectItemGroup>
                                        ))}
                                    </SelectContent></Box>
                            </SelectRoot>
                        </Field>
                    </HStack>
                    <Field label="Password" errorText="This field is required">
                        <Input
                            width="full"
                            minW="150px"
                            type="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            border="2px solid"
                            borderRadius="none"
                        />
                    </Field>
                    <Field label="Confirm Password" errorText="This field is required">
                        <Input
                            width="full"
                            minW="150px"
                            type="password"
                            placeholder="********"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            border="2px solid"
                            borderRadius="none"
                        />
                    </Field>
                    <Button width="full" mt={4} >
                        Verify Email
                    </Button>
                    <Box mt={5}  textAlign="center">
                    Already have an account?
                    <Button fontSize="lg" variant="ghost" as={NLink} to="/login"  >Login here!</Button>
                </Box>
                </Stack>

            </Box>

        </Box>
    );
}

export default Register;

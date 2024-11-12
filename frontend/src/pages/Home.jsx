import { Box, VStack, Image, Heading, Text, Button, HStack, Card, Stack, For,Input,Textarea, Flex } from "@chakra-ui/react";
import { FaClipboard, FaBook, FaWrench, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo-main.png";

const Hero = () => {
    return (
        <Box
            as="section"
            minH="100vh"
            backgroundImage="url('/path-to-background-image.jpg')" // Replace with your image path
            backgroundSize="cover"
            backgroundPosition="center"
            position="relative"
            // bg="gray.emphasized"
        >
            {/* Overlay */}
            <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
            // bg="rgba(0, 0, 0, 0.6)" // Dark overlay
            />

            {/* Content */}
            <VStack
                position="relative"
                zIndex="1"
                color="white"
                textAlign="center"
                justify="center"

                // gap={6}
            >
                <Image
                mt={10}
                    src={logo}
                    alt="University Logo"
                    w="400px"
                    objectFit="contain"

                />

                <Heading color="CaptionText" lineHeight="50px" w="80%" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
                    Welcome to Comprehensive Alumni Association Network Project
                </Heading>

                <Text fontSize="lg" fontWeight="medium" w="90%">
                    Connecting Computer Science Alumni Across The Globe
                </Text>

                {/* Buttons */}
                <HStack direction="row" zIndex={3}>
                    <Button
                        colorPalette="blue"
                        size="2xl"
                        rounded="none"

                    >
                        Find Out More
                    </Button>

                    <Button
                        colorPalette="teal"
                        size="2xl"
                        rounded="none"
                        as={Link}
                        to="/login"
                    >
                        Login
                    </Button>
                </HStack>
            </VStack>
        </Box>
    )
}

const AlumiBenifits = () => {

    const alumniBenefitsData = [
        {
            icon: FaClipboard,
            title: "Career Support",
            description: "Get assistance with your career goals."
        },
        {
            icon: FaBook,
            title: "Library",
            description: "Access to the alumni library."
        },
        {
            icon: FaWrench,
            title: "Sports Facilities",
            description: "Access to sports facilities."
        },
        {
            icon: FaUsers,
            title: "Alumni Directory",
            description: "Connect with fellow alumni."
        }
    ];

    return (
        <VStack as="section" gap={20} py={10}  w="full" minh="90svh" justify="center">
            <Heading textAlign="center" fontSize={{ base: "2xl", md: "4xl" }} >
                Alumni Benefits
            </Heading>

            <Text w="90%" color="GrayText" textAlign="center" fontSize={{ base: "xl", md: "2xl" }}>
                As a member of the global BZU alumni network, you have access to a variety of exclusive services and benefits.
            </Text>

            <Stack direction={{
                base: "column",
                md: "row"
            }} justify="center">
                <For each={alumniBenefitsData}>
                    {(benefit, index) => (
                        <Card.Root key={index} rounded="none" variant="outline">
                            <Card.Header><benefit.icon size={40} /></Card.Header>
                            <Card.Body>
                                <Heading size="md">
                                    {benefit.title}
                                </Heading>
                            </Card.Body>
                            <Card.Footer textAlign="center">
                                {benefit.description}
                            </Card.Footer>
                        </Card.Root>
                    )}
                </For>
            </Stack>
        </VStack>
    );
}

const UpcomingEvents = () => {
    const eventsData = [
        {
            title: "Alumni Meetup 2023",
            date: "December 15, 2023",
            description: "Join us for the annual alumni meetup."
        },
        {
            title: "Web Development Workshop",
            date: "January 10, 2024",
            description: "A workshop on modern web development practices."
        },
        {
            title: "Career Fair",
            date: "February 20, 2024",
            description: "Meet potential employers and explore career opportunities."
        },
        {
            title: "Tech Talk Series",
            date: "March 5, 2024",
            description: "A series of talks on the latest in technology."
        },
        {
            title: "Networking Night",
            date: "April 12, 2024",
            description: "An evening of networking with fellow alumni."
        },
        {
            title: "Alumni Sports Day",
            date: "May 18, 2024",
            description: "A day of sports and activities for alumni."
        }
    ];

    return (
        <VStack as="section"  py={10} w={{
            base: "90%",
            md: "full"
        }} minh="90svh" justify="center" mx={{
            base: "auto",
            md: "0"
        }} >
            <Heading textAlign="center" fontSize={{ base: "2xl", md: "4xl" }} >
                Upcoming Events
            </Heading>

            <Stack direction={{ base: "column", md: "row" }} justify="center" mt={10} spacing={8} wrap="wrap">
                <For each={eventsData}>
                    {(event, index) => (
                        <Card.Root key={index} rounded="none" variant="outline">
                            <Card.Header>
                                <Heading size="md">{event.title}</Heading>
                            </Card.Header>
                            <Card.Body>
                                <Text fontSize="lg">{event.date}</Text>
                                <Text mt={4}>{event.description}</Text>
                            </Card.Body>
                        </Card.Root>
                    )}
                </For>
            </Stack>
        </VStack>
    );
}


const Contacts = () => {
    return (
        <VStack as="section"  py={10} w="full" minh="90svh" gap={10} justify="center">
            <Heading textAlign="center" fontSize={{ base: "2xl", md: "4xl" }}>
                Contact Us
            </Heading>

            <Card.Root rounded="none" h="600px" variant="outline" p={{
                base: 0,
                md: 8
            }} w="90%">
                <Card.Body display="grid" gridTemplateColumns={{base:"",md:"repeat(2,1fr)"}}>
                    <Image
                        src="https://via.placeholder.com/600x400" // Replace with your image URL
                        alt="Contact Us"
                        objectFit="cover"
                        objectPosition="center"
                        w="50%"
                        h="100%"
                        rounded="none"
                        display={{ base: "none", md: "block" }}
                    />
                    <VStack spacing={4} h="full">
                        <Input placeholder="Name" size="lg" rounded="none" />
                        <Input placeholder="Email" size="lg" rounded="none" />
                        <Textarea placeholder="Message" size="lg" rounded="none" flex={1}/>
                        <Button colorScheme="blue" size="lg" w="full" rounded="none">
                            Submit
                        </Button>
                    </VStack>
                </Card.Body>
            </Card.Root>
        </VStack>
    );
}

const Home = () => {
    return (
        <Box>
            <Hero />
            <AlumiBenifits />
            <UpcomingEvents />
            <Contacts />
        </Box>
    );
}

export default Home;

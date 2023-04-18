import Head from "next/head";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { NodeNextRequest } from "next/dist/server/base-http/node";

export default function Home() {
  const ScrollAnimation = () => {
    useEffect(() => {
      if (typeof window === "undefined") {
        return;
      }

      const scrollAnimationElm = document.querySelectorAll(".sa");

      const scrollAnimationFunc = () => {
        for (let i = 0; i < scrollAnimationElm.length; i++) {
          const triggerMargin = 350;
          if (
            window.innerHeight >
            scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin
          ) {
            scrollAnimationElm[i].classList.add("show");
          }
        }
      };

      window.addEventListener("load", scrollAnimationFunc);
      window.addEventListener("scroll", scrollAnimationFunc);

      return () => {
        window.removeEventListener("load", scrollAnimationFunc);
        window.removeEventListener("scroll", scrollAnimationFunc);
      };
    }, []);

    return null;
  };

  return (
    <>
      <Head>
        <title>初めてのホームページ！</title>
        <meta name="description" content="HP作成会用のサンプルページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display={{ base: "none", xl: "block" }}>
        <Box
          position={"fixed"}
          w="100vw"
          className="text"
          h="10vh"
          bg="gray.200"
          zIndex={"100"}
          opacity={"0.8"}
        >
          <Flex
            pt="6px"
            pb="6px"
            bg=""
            justifyContent="center"
            alignItems="center"
            h="100%"
          >
            <Text
              letterSpacing="0.06rem"
              fontSize="28px"
              fontWeight="bold"
              mr="auto"
              ml="90px"
            >
              来てくれてありがと！
            </Text>
            <Flex mr="90px">
              <Text mr="40px" fontWeight={"bold"}>
                ABOUT
              </Text>
              <Text fontWeight={"bold"}>WORKS</Text>
            </Flex>
          </Flex>
        </Box>
        <Box h="100vh" w="100vw" className="bronze">
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            h="100%"
            flexDirection={"column"}
            className="fadeIn"
          >
            <Box
              h="100px"
              w="100px"
              borderRadius="50%"
              className="pat3"
              opacity={"0.8"}
              mb="20px"
            ></Box>
            <Text
              fontSize="35px"
              letterSpacing="0.08rem"
              fontWeight="bold"
              color="gray.800"
              className="text shadow"
            >
              来てくれた君最高！
            </Text>
          </Flex>
        </Box>
        <Box
          w="100vw"
          minH="830px"
          bg=""
          pt="140px"
          pb="320px"
          pr="120px"
          pl="120px"
          className="text"
        >
          <Box className="sa sa--up">
            <Text
              mb="120px"
              fontSize="80px"
              fontWeight={"bold"}
              letterSpacing={"0.2rem"}
            >
              俺！
            </Text>
            <Flex justifyContent={"center"} alignItems={"center"} h="100%">
              <Box mr="140px" w="520px">
                <Text
                  fontSize={"20px"}
                  letterSpacing={"0.06rem"}
                  lineHeight={"1.7em"}
                >
                ようこそ僕のウェブサイトへ！
                </Text>
              </Box>
              <Image
                src="https://images.unsplash.com/photo-1680300313504-5b316336c3e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                width={"600px"}
              />
            </Flex>
            <ScrollAnimation />
          </Box>
        </Box>
        <Box
          w="100vw"
          minH="830px"
          pt="140px"
          pb="320px"
          pr="120px"
          pl="120px"
          className="text"
          bg="gray.800"
          color="whiteAlpha.900"
        >
          <Box className="sa sa--up">
            <Text
              mb="120px"
              fontSize="80px"
              fontWeight={"bold"}
              letterSpacing={"0.2rem"}
            >
              SNS
            </Text>
            <Flex justifyContent={"center"} alignItems={"center"} h="100%">
              <Box mr="200px">
                <Flex
                  mb="55px"
                  justifyContent={""}
                  alignItems="center"
                  h="100%"
                >
                  <Image
                    alt=""
                    src="https://pics.prcm.jp/0a3e4ccca4b12/68217265/png/68217265.png"
                    w="90px"
                  />
                  <Text
                    ml="50px"
                    mb="12px"
                    letterSpacing={"0.03rem"}
                    fontSize={"26px"}
                    fontWeight={""}
                  >
                    your_user_name
                  </Text>
                </Flex>
                <Flex alignItems={"center"} h="100%">
                  <Image
                    alt=""
                    src="https://pics.prcm.jp/0a3e4ccca4b12/68217263/png/68217263.png"
                    w="86px"
                    borderRadius={"20%"}
                  />
                  <Text
                    letterSpacing={"0.03rem"}
                    ml="50px"
                    mb="12px"
                    fontSize={"26px"}
                    fontWeight={""}
                  >
                    @your_user_name
                  </Text>
                </Flex>
              </Box>
              <Image
                src="https://images.unsplash.com/photo-1680868354675-34192a9baae7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"
                alt=""
                w="600px"
              />
            </Flex>
          </Box>
        </Box>
        <Box h="200px">
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            h="100%"
            w="100vw"
            bg="blackAlpha.200"
          >
            <Text
              fontSize={"30px"}
              fontWeight={"bold"}
              className="text"
              letterSpacing={"0.05rem"}
              color="#333333"
            >
              以上俺でした！
            </Text>
          </Flex>
        </Box>
      </Box>

      {/** ここから下がスマホサイズの時に表示する要素たち */}
      {/** */}
      {/** */}
      <Box display={{ base: "block", xl: "none" }}>
        <Box w="100vw" maxW="100vw" h="100vh" className="blue">
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            h="100%"
            flexDirection={"column"}
            className="fadeIn"
          >
            <Box
              h="90px"
              w="90px"
              borderRadius="50%"
              className="pat1"
              opacity={"0.8"}
              mb="20px"
            ></Box>
            <Text
              fontSize="30px"
              letterSpacing="0.01rem"
              fontWeight=""
              color="gray.800"
              className="text shadow"
            >
              来てくれた君最高！
            </Text>
          </Flex>
        </Box>
        <Box maxW={"100vw"} w="100vw" minH="60vh" className="text" pb="40px">
          <Box
            justifyContent={"center"}
            alignItems={"center"}
            className="sa sa--up"
            pt="30px"
            pb="30px"
            pr="24px"
            pl="24px"
          >
            <Text
              fontSize="30px"
              mb="20px"
              fontWeight={"bold"}
              letterSpacing={"0.1rem"}
            >
              俺！
            </Text>
            <Box>
              <Text
                fontSize={"16px"}
                letterSpacing={"0.06rem"}
                lineHeight={"1.6em"}
                mb="40px"
              >
                ようこそ僕のwebsiteへ！
              </Text>
            </Box>
            <Image
              src="https://images.unsplash.com/photo-1680913526064-d49073fc58f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              width={"600px"}
              margin={"0 auto"}
            />
            <ScrollAnimation />
          </Box>
        </Box>
        <Box
          w="100vw"
          minH="60vh"
          maxW="100vw"
          className="text"
          bg="gray.800"
          color="whiteAlpha.900"
          pb="40px"
        >
          <Box className="sa sa--up" pt="30px" pb="30px" pr="24px" pl="24px">
            <Text
              ml="6px"
              fontSize="30px"
              mb="30px"
              fontWeight={"bold"}
              letterSpacing={"0.1rem"}
            >
              SNS
            </Text>
            <Box pl="12px" mb="60px">
              <Flex mb="25px" justifyContent={""} alignItems="center" h="100%">
                <Image
                  alt=""
                  src="https://pics.prcm.jp/0a3e4ccca4b12/68217265/png/68217265.png"
                  w="40px"
                />
                <Text
                  ml="18px"
                  mb="12px"
                  letterSpacing={"0.01rem"}
                  fontSize={"18px"}
                  fontWeight={""}
                >
                  your_user_name
                </Text>
              </Flex>
              <Flex alignItems={"center"} h="100%">
                <Image
                  alt=""
                  src="https://pics.prcm.jp/0a3e4ccca4b12/68217263/png/68217263.png"
                  w="40px"
                  borderRadius={"20%"}
                />
                <Text
                  ml="18px"
                  letterSpacing={"0.01rem"}
                  mb="12px"
                  fontSize={"18px"}
                  fontWeight={""}
                >
                  @your_user_name
                </Text>
              </Flex>
            </Box>
            <Image
              src="https://images.unsplash.com/photo-1680868354675-34192a9baae7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"
              width={"600px"}
              margin={"0 auto"}
            />
          </Box>
        </Box>
        <Box h="80px">
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            h="100%"
            w="100vw"
            bg="blackAlpha.200"
          >
            <Text
              fontSize={"14px"}
              fontWeight={"bold"}
              className="text"
              letterSpacing={"0.05rem"}
              color="#333333"
            >
              以上俺でした！
            </Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
       
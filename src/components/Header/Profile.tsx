import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Vinicius Henrique</Text>
          <Text color="gray.300" fontSize="small">
            vile.pb@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Vinicius Henrique"
        src="https://avatars.githubusercontent.com/u/36283335?v=4"
      />
    </Flex>
  );
}

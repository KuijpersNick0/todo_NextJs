import { Flex, Alert, AlertIcon } from '@chakra-ui/react'

const NoTask = () => {
  return (
    <Flex>
        <Alert status='warning'>
            <AlertIcon />
            No tasks for now
        </Alert>
    </Flex>
)
}

export default NoTask
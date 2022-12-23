import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useDisclosure,
  Box,
  CloseButton,
  Flex,
  Link,
} from "@chakra-ui/react";

function AlertPortfolio() {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });

  return isVisible ? (

      <Alert gap={'2'} alignItems={'center'} alignContent='center' justifyContent="center" status="info">
        🎉
        <Box>
     
          <AlertDescription>
          ¡Echa un vistazo a mis proyectos más recientes! Haz clic aquí para visitar mi portafolio en línea: <Link color={'cyan.500'} href="https://saragusti.ga/" isExternal >saragusti.ga <ExternalLinkIcon /></Link>
          </AlertDescription>
        </Box>
         
        <CloseButton
          alignSelf={'center'}
          position="relative"
          right={-1}
          top={-1}
          onClick={onClose}
        />
      </Alert>
   
  ) : (
    null
  );
}

export default AlertPortfolio;

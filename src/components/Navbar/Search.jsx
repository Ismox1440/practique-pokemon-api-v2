import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useLazyGetMoreDetailsQuery } from "../../store/api/pokeapi";
import { useNavigate } from "react-router";

function Search() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast()
  const [getPokemon, {data, isFetching}] = useLazyGetMoreDetailsQuery()
  const navigate = useNavigate()
  const id = 'test-toast'
  const [input, setInput] = useState('')
  const handleInputChange = (e) => setInput(e.target.value)
  const handleSubmit = async (e) => {
    e.preventDefault()
   
    toast({
        title: 'Looking for pokemon',
        status: 'loading',
        duration: null,
        isClosable: true,
        id: 'toast',
      })

    const pokemon = await getPokemon(`https://pokeapi.co/api/v2/pokemon/${input.toLocaleLowerCase()}`)

   

    if(pokemon.isSuccess) {
        navigate(`/pokemon/${input}`)
        onClose()
        toast.close("toast")
    } else {
        await toast.close("toast")
        toast({
            title: 'Pokemon not found',
            status: 'error',
            duration: 3000,
            isClosable: true,
            id: 'toastError',
          })
     
    }
  }

  
  

  return (
    <>
      <Button onClick={onOpen} variant="solid">
        <SearchIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            
            <form onSubmit={handleSubmit}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />

              <Input onChange={handleInputChange} focusBorderColor="white" border={"none"} placeholder="Search pokemon" />
            </InputGroup>
              </form>
          </ModalBody>

          
        </ModalContent>
      </Modal>
    </>
  );
}

export default Search;

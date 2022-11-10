import { Heading, Table, TableCaption, TableContainer, Tbody, Td, Text, Tr } from '@chakra-ui/react'
import React from 'react'

const Descriptionsec = () => {
  return (
      <div>
          <Heading fontSize={'xl'} fontWeight="medium" textAlign={'left'}><ul>Descriptions:</ul></Heading>
          <Text textAlign="left" >Neocutis LUMIÈRE FIRM RICHE Extra Moisturizing Illuminating & Tightening Eye Cream provides combination anti-aging action with growth factors + proprietary peptides in a single treatment. Growth factors + proprietary peptides smooth, refresh, and improve texture of the delicate eye area while addressing fine lines and wrinkles, under-eye puffiness, and darkness. RICHE formulation provides extra hydration.</Text>
          <hr></hr>
          <br/>
          <Heading fontSize={'xl'} fontWeight="medium" textAlign={'left'}><ul>Product Details:</ul></Heading>
          <TableContainer>
    <Table variant='striped' bg='#f8f8f8' color={'black'}  >
     
    
      <Tbody>
        <Tr>
          <Td>Ingredients:</Td>
          <Td>Water (Aqua), C12-20 Acid Peg-8 Ester, Petrolatum, Caprylic/Capric Triglyceride, Hydrogenated Polyisobutene, Glycerin, Butylene Glycol, Saccharide Isomerate, Hydroxethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Bisabolol, Caffeine, Tetrahexyldecyl Ascorbate, Beech Tree (Fagus Sylvatica) Bud Extract, Lecithin, Cutaneous Lysate, Tetrapeptide-21, Sodium Hyaluronate,  Glycyrrhetinic Acid, Citric Acid, Wild Yam (Dioscorea Villosa)  Root Extract, Tocotrienols, Palm (Elaeis Guineensis) Oil, Capryloyl Carnosine, Tocopherol, Benzoic Acid, Squalene, Palmitoyl Tripeptide-1 Acetate, Phytosterols, Sodium Citrate, Isohexadecane, Ethylhexylglycerin, Potassium Cetyl Phosphate, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Chlorphenesin, Polysorbate 60, Sodium Hydroxide, Disodium Edta, Sorbitan Isostearate, Phenoxyethanol, Benzyl Alcohol.</Td>
         
        </Tr>
        <Tr>
          <Td>Brand:</Td>
          <Td>Neocutis</Td>
         
        </Tr>
        <Tr>
          <Td>Volume:</Td>
          <Td>15ml</Td>
        
                      </Tr>
                      <Tr>
          <Td>Directions:</Td>
          <Td>Apply in the morning and evening to the eye area or as directed by your skincare professional.</Td>
        
        </Tr>
      </Tbody>
    
    </Table>
  </TableContainer></div>
  )
}

export default Descriptionsec
import { useState, useEffect, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react';
import CustomTextField from '../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/theme-elements/CustomFormLabel';
import CustomSelect from '../../components/forms/theme-elements/CustomSelect';
import {
  Grid,
  MenuItem,
  Button,
  Box,
  Typography,
  Avatar,
  Stack,
  ButtonGroup,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  FormControlLabel,
  Paper,
  TextField,
} from '@mui/material'
import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';
import { relative } from 'path';


const PriceBuy = () => {
  const [nameTemplate, setNameTemplate] = useState<any>(-1);
  const [nameStatus] = useState(['R$', 'Sem Vendedor', 'Sem Transportadora', 'Sem Status', 'Sem Estoque'])
  const [nameTitle, setNameTitle] = useState<any>('');
  const [namePedidos, setNamePedidos] = useState<any>(false);
  const [nameObj, setNameObj] = useState<any>(-1);
  const [obj, setObj] = useState<any>([]);
  const [itens, setItens] = useState<any>([]);

  useEffect(() => {
    setItens([{name: 'Produtos:', value: '154.10'},{name: 'Serviços:', value: ''},{name: 'Encargos:', value: ''},
    {name: 'I.P.I.:', value: ''},{name: 'I.C.M.S.:', value: ''},{name: 'I.C.M.S.ST:', value: ''},{name: 'Total:', value: ''},
    ])
  },[]);



  const handleChangePedidos = () => {
    setNamePedidos(!namePedidos)
 };

  const handleChangeTemplate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameTemplate(event.target.value);
  }

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameTitle(event.target.value);
  }

  const handleChangeObj = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameObj(event.target.value);
  }
    return (
        <>




        
         <Grid container spacing={1} style={{position: 'relative', top: '-20px'}}>
          

         <Grid item xs={12} sm={12}>
         <TableContainer component={Paper}>
      <Table>
        <TableHead>

             <TableRow>
             <TableCell style={{ width: '100px',  textAlign: 'center', fontWeight: 'bold', fontSize: '12pt'}}>Produtos</TableCell>
             <TableCell style={{ width: '100px',  textAlign: 'center', fontWeight: 'bold', fontSize: '12pt'}}>Serviços</TableCell>
             <TableCell style={{ width: '100px',  textAlign: 'center', fontWeight: 'bold', fontSize: '12pt'}}>Encargos</TableCell>
             <TableCell style={{ width: '100px',  textAlign: 'center', fontWeight: 'bold', fontSize: '12pt'}}>I.P.I.</TableCell>
             <TableCell style={{ width: '100px',  textAlign: 'center', fontWeight: 'bold', fontSize: '12pt'}}>I.C.M.S.</TableCell>
             <TableCell style={{ width: '100px',  textAlign: 'center', fontWeight: 'bold', fontSize: '12pt'}}>I.C.M.S.ST</TableCell>
             <TableCell style={{ width: '100px',  textAlign: 'center', fontWeight: 'bold', fontSize: '12pt'}}>Total</TableCell>
           </TableRow>
        </TableHead>
        <TableBody>
          <TableRow >
            <TableCell style={{textAlign: 'center'}}>1500,00</TableCell>
            <TableCell style={{textAlign: 'center'}}>78,10</TableCell>
            <TableCell style={{textAlign: 'center'}}>47,52</TableCell>
            <TableCell style={{textAlign: 'center'}}>981,20</TableCell>
            <TableCell style={{textAlign: 'center'}}>98,10</TableCell>
            <TableCell style={{textAlign: 'center'}}>45,52</TableCell>
            <TableCell style={{textAlign: 'center'}}>1500,20</TableCell>
          </TableRow>
        </TableBody>
   
      </Table>
    </TableContainer>
    </Grid>
    </Grid>

            {/* <Grid container spacing={1} style={{position: 'relative', top: '-50px'}}>
  <Grid item xs={12} sm={2}>
  <CustomFormLabel style={{positition: 'relative',}} htmlFor="standard-select-currency">Tipo de Cobrança</CustomFormLabel>

<CustomSelect
                     value={nameObj}
                     onChange={handleChangeObj}
                     fullWidth
                     variant="outlined"
                   >
                     <MenuItem value="-1">{nameStatus[3]}</MenuItem>
                     {obj.map((option:any) => (
                        <MenuItem key={option.index} value={option.index}>
                        {option.value}
                      </MenuItem>
                     ))}
                   </CustomSelect>
  </Grid>

  <Grid item xs={12} sm={2}>
  <CustomFormLabel style={{positition: 'relative',}} htmlFor="standard-select-currency">Local da Cobrança</CustomFormLabel>

<CustomSelect
                     value={nameObj}
                     onChange={handleChangeObj}
                     fullWidth
                     variant="outlined"
                   >
                     <MenuItem value="-1">{nameStatus[3]}</MenuItem>
                     {obj.map((option:any) => (
                        <MenuItem key={option.index} value={option.index}>
                        {option.value}
                      </MenuItem>
                     ))}
                   </CustomSelect>
  </Grid>

  <Grid item xs={12} sm={6}>
  <CustomFormLabel style={{position: 'relative', top: '0px', fontWeight: 'bold', fontSize: '12pt'}}>Parcelamento:</CustomFormLabel>
  <TableContainer component={Paper} style={{position: 'relative', top: '0px'}}>
      <Table>
      <TableHead>
      <TableRow>
             <TableCell style={{ width: '100px',  textAlign: 'left', fontWeight: 'bold', fontSize: '12pt'}}>Vencimento</TableCell>
             <TableCell style={{ width: '100px', textAlign: 'left', fontWeight: 'bold', fontSize: '12pt' }}>Dias DDL</TableCell>
             <TableCell style={{ width: '100px',  textAlign: 'left', fontWeight: 'bold', fontSize: '12pt'}}>%</TableCell>
             <TableCell style={{ width: '100px', textAlign: 'left', fontWeight: 'bold', fontSize: '12pt' }}>Valor</TableCell>
           </TableRow>
        </TableHead>
         <TableBody>
          <TableRow >
            <TableCell>Content 1</TableCell>
            <TableCell>Content 2</TableCell>
            <TableCell>Content 3</TableCell>
            <TableCell>Content 3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>

    <Grid item xs={12} sm={2} style={{position: 'relative', top: '0px'}}>
    <CustomFormLabel htmlFor="standard-select-currency">Cond. Pagamento:</CustomFormLabel>

<CustomSelect
                     value={nameObj}
                     onChange={handleChangeObj}
                     fullWidth
                     variant="outlined"
                   >
                     <MenuItem value="-1">{nameStatus[3]}</MenuItem>
                     {obj.map((option:any) => (
                        <MenuItem key={option.index} value={option.index}>
                        {option.value}
                      </MenuItem>
                     ))}
                   </CustomSelect>
<Button
variant="contained"
type="submit"
style={{position: 'relative', top: '5px', height: '43px', width: '100%', backgroundColor: 'green', fontWeight: 600}}

>
Adicionar
</Button>
<Button
variant="contained"
type="submit"
style={{position: 'relative', top: '10px', height: '43px', width: '100%', backgroundColor: 'blue', fontWeight: 600}}

>
Editar
</Button>
<Button
variant="contained"
type="submit"
style={{position: 'relative', top: '15px', height: '43px', width: '100%', backgroundColor: 'red', fontWeight: 600}}

>
Excluir
</Button>
</Grid>

  </Grid> */}
        


  <Grid container spacing={1} style={{position: 'relative', top: '-0px'}}>
  <Grid item xs={12} sm={8}>
  <CustomFormLabel style={{position: 'relative', top: '-20px', fontWeight: 'bold', fontSize: '12pt'}}>Parcelamento:</CustomFormLabel>
  <TableContainer component={Paper} style={{position: 'relative', top: '-20px'}}>
      <Table>
      <TableBody>
      <TableRow>
             <TableCell style={{ width: '100px',  textAlign: 'center', fontWeight: 'bold', fontSize: '12pt'}}>Vencimento</TableCell>
             <TableCell style={{ width: '100px', textAlign: 'center', fontWeight: 'bold', fontSize: '12pt' }}>Dias DDL</TableCell>
             <TableCell style={{ width: '100px',  textAlign: 'center', fontWeight: 'bold', fontSize: '12pt'}}>%</TableCell>
             <TableCell style={{ width: '100px', textAlign: 'center', fontWeight: 'bold', fontSize: '12pt' }}>Valor</TableCell>
           </TableRow>
        </TableBody>
         <TableBody>
          <TableRow >
            <TableCell style={{textAlign: 'center'}}>10/12/2024</TableCell>
            <TableCell style={{textAlign: 'center'}}>10</TableCell>
            <TableCell style={{textAlign: 'center'}}>5%</TableCell>
            <TableCell style={{textAlign: 'center'}}>130,45</TableCell>
          </TableRow>
          <TableRow >
            <TableCell style={{textAlign: 'center'}}>11/12/2024</TableCell>
            <TableCell style={{textAlign: 'center'}}>11</TableCell>
            <TableCell style={{textAlign: 'center'}}>1%</TableCell>
            <TableCell style={{textAlign: 'center'}}>89,90</TableCell>
          </TableRow>
          <TableRow >
            <TableCell style={{textAlign: 'center'}}>12/12/2024</TableCell>
            <TableCell style={{textAlign: 'center'}}>12</TableCell>
            <TableCell style={{textAlign: 'center'}}>8%</TableCell>
            <TableCell style={{textAlign: 'center'}}>12,50</TableCell>
          </TableRow>
        </TableBody>
        
      </Table>
    </TableContainer>
    </Grid>
    
    <Grid item xs={12} sm={2} style={{position: 'relative', top: '-15px'}}>
    <CustomFormLabel htmlFor="standard-select-currency">Cond. Pagamento:</CustomFormLabel>

<CustomSelect
                     value={nameObj}
                     onChange={handleChangeObj}
                     fullWidth
                     variant="outlined"
                   >
                     <MenuItem value="-1">{nameStatus[3]}</MenuItem>
                     {obj.map((option:any) => (
                        <MenuItem key={option.index} value={option.index}>
                        {option.value}
                      </MenuItem>
                     ))}
                   </CustomSelect>
<Button
variant="contained"
type="submit"
style={{position: 'relative', top: '5px', height: '43px', width: '120px', textAlign: 'center',backgroundColor: 'orange', fontWeight: 600}}

>
Adicionar
</Button>
<Button
variant="contained"
type="submit"
style={{position: 'relative', top: '10px', height: '43px', width: '120px', backgroundColor: 'blue', fontWeight: 600}}

>
Editar
</Button>
<Button
variant="contained"
type="submit"
style={{position: 'relative', top: '15px', height: '43px', width: '120px', backgroundColor: 'red', fontWeight: 600}}

>
Excluir
</Button>
</Grid>
<Grid item xs={12} sm={2} style={{position: 'relative'}}>
<Button
variant="contained"
type="submit"
style={{position: 'relative', top: '40px', height: '43px', width: '120px', backgroundColor: 'gray', fontWeight: 600}}

>
Selecionar
</Button>
  </Grid>
  <Button
variant="contained"
type="submit"
style={{position: 'relative', top: '0px', height: '43px', width: '120px', backgroundColor: 'green', fontWeight: 600}}

>
Salvar
</Button>
  </Grid> 




          </>
  );
};
export default PriceBuy;
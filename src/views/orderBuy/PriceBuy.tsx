import { useState, useEffect, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useContext } from 'react';
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
import {getCondPagamento, getTipoCobrança, getLocalCobrança} from "../../services/user.service"
import AppContext from './AppContext';

const PriceBuy = () => {
  const context = useContext(AppContext);
  const [nameTemplate, setNameTemplate] = useState<any>(-1);
  const [nameStatus] = useState(['R$', 'Sem Vendedor', 'Sem Transportadora', 'Sem Status', 'Sem Estoque', 'Sem Tipo de Cobrança', 'Sem Local de Cobrança'])
  const [nameTitle, setNameTitle] = useState<any>('');
  const [namePedidos, setNamePedidos] = useState<any>(false);
  const [nameObj, setNameObj] = useState<any>(-1);
  const [obj, setObj] = useState<any>([]);
  const [codPagamento, setCodPagamento] = useState<any>([]);
  const [tipoCobranca, setTipoCobranca] = useState<any>([]);
  const [localCobranca, setLocalCobranca] = useState<any>([]);
  const [itens, setItens] = useState<any>([]);
  

  const {valorTotal, 
    totalIcms, totalIcmsSt, totalIpi, totalServicos,totalProdutos, valorOutrasDespesas


  } = context;

  

  useEffect(() => {
    setItens([{name: 'Produtos:', value: '154.10'},{name: 'Serviços:', value: ''},{name: 'Encargos:', value: ''},
    {name: 'I.P.I.:', value: ''},{name: 'I.C.M.S.:', value: ''},{name: 'I.C.M.S.ST:', value: ''},{name: 'Total:', value: ''},
    ])

    getCondPagamento().then((response:any)=>{
      setCodPagamento(response.data)
      getTipoCobrança().then((response:any)=>{
        setTipoCobranca(response.data)
        getLocalCobrança().then((response:any)=>{
          setLocalCobranca(response.data)
        })
      })
    })

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
            <TableCell style={{textAlign: 'center'}}>{totalProdutos}</TableCell>
            <TableCell style={{textAlign: 'center'}}>{totalServicos}</TableCell>
            <TableCell style={{textAlign: 'center'}}>{valorOutrasDespesas}</TableCell>
            <TableCell style={{textAlign: 'center'}}>{totalIpi}</TableCell>
            <TableCell style={{textAlign: 'center'}}>{totalIcms}</TableCell>
            <TableCell style={{textAlign: 'center'}}>{totalIcmsSt}</TableCell>
            <TableCell style={{textAlign: 'center'}}>{valorTotal}</TableCell>
          </TableRow>
        </TableBody>
   
      </Table>
    </TableContainer>
    </Grid>
    </Grid>


  <Grid container spacing={1} style={{position: 'relative', top: '-0px'}}>
    <Grid item xs={12} sm={3}>
    <CustomFormLabel style={{position: 'relative', top: '-20px'}} htmlFor="standard-select-currency">Tipo de Cobrança:</CustomFormLabel>

<CustomSelect
style={{position: 'relative', top: '-20px'}}
                     value={nameObj}
                     onChange={handleChangeObj}
                     fullWidth
                     variant="outlined"
                   >
                     <MenuItem value="-1">{nameStatus[5]}</MenuItem>
                     {tipoCobranca.map((option:any) => (
                        <MenuItem key={option.codigoTipoCobranca} value={option.codigoTipoCobranca}>
                        {option.nomeTipoCobranca}
                      </MenuItem>
                     ))}
                   </CustomSelect>

                   <CustomFormLabel style={{position: 'relative', top: '-35px'}} htmlFor="standard-select-currency">Local da Cobrança:</CustomFormLabel>

<CustomSelect
style={{position: 'relative', top: '-35px'}}
                     value={nameObj}
                     onChange={handleChangeObj}
                     fullWidth
                     variant="outlined"
                   >
                     <MenuItem value="-1">{nameStatus[6]}</MenuItem>
                     {localCobranca.map((option:any) => (
                        <MenuItem key={option.codigoTerceiro} value={option.codigoTerceiro}>
                        {option.nomeTerceiro}
                      </MenuItem>
                     ))}
                   </CustomSelect>
    </Grid>
  <Grid item xs={12} sm={5}>
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
                     {codPagamento.map((option:any) => (
                        <MenuItem key={option.codigoCondicao} value={option.codigoCondicao}>
                        {option.nomeCondicao}
                      </MenuItem>
                     ))}
                   </CustomSelect>

                   

</Grid>
<Grid item xs={12} sm={2} style={{position: 'relative'}}>
<Button
variant="contained"
type="submit"
style={{position: 'relative', top: '40px', height: '43px', width: '120px', backgroundColor: 'gray', fontWeight: 600}}

>
Selecionar
</Button>

<Button
variant="contained"
type="submit"
style={{position: 'relative', top: '50px', height: '43px', width: '120px', textAlign: 'center',backgroundColor: 'orange', fontWeight: 600}}

>
Adicionar
</Button>
<Button
variant="contained"
type="submit"
style={{position: 'relative', top: '60px', height: '43px', width: '120px', backgroundColor: 'blue', fontWeight: 600}}

>
Editar
</Button>
<Button
variant="contained"
type="submit"
style={{position: 'relative', top: '70px', height: '43px', width: '120px', backgroundColor: 'red', fontWeight: 600}}

>
Excluir
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
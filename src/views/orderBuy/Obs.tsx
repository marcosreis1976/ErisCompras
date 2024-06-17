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


const Obs = () => {
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
          

    <Grid item xs={12} sm={12} >
 <CustomFormLabel htmlFor="standard-select-currency">Observação</CustomFormLabel>

<TextField multiline id="password" rows={3} value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>


  <Grid item xs={12} sm={12}>
 <CustomFormLabel htmlFor="standard-select-currency">Oservação Financeiro</CustomFormLabel>

<TextField id="password"  rows={3} multiline value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>

  <Button
variant="contained"
type="submit"
style={{position: 'relative', top: '45px', height: '43px', width: '120px', backgroundColor: 'green', fontWeight: 600}}

>
Salvar
</Button>
    

       
  </Grid> 



          </>
  );
};
export default Obs;
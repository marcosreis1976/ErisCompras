import { useState } from 'react';
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
} from '@mui/material'
import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';


const DetailsBuy = () => {
  const [nameTemplate, setNameTemplate] = useState<any>(-1);
  const [nameStatus] = useState(['R$', 'Sem Vendedor', 'Sem Transportadora', 'Sem Status', 'Sem Estoque'])
  const [nameTitle, setNameTitle] = useState<any>('');
  const [namePedidos, setNamePedidos] = useState<any>(false);

  const handleChangePedidos = () => {
    setNamePedidos(!namePedidos)
 };

  const handleChangeTemplate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameTemplate(event.target.value);
  }

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameTitle(event.target.value);
  }
    return (
      <>
        
<Grid container spacing={1} style={{position: 'relative', top: '-40px'}}>
<Grid item xs={12} sm={4}>
<CustomFormLabel htmlFor="standard-select-currency">Num. Páginas</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
</Grid>
<Grid item xs={12} sm={4}>
<CustomFormLabel htmlFor="standard-select-currency">Ano Edição</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
</Grid>
<Grid item xs={12} sm={4}>
<CustomFormLabel htmlFor="standard-select-currency">Mês Edição</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
</Grid>
</Grid>

<Grid container spacing={1} style={{position: 'relative', top: '-60px'}}>
<Grid item xs={12} sm={4}>
<CustomFormLabel htmlFor="standard-select-currency">Encardenação</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
</Grid>
<Grid item xs={12} sm={4}>
<CustomFormLabel htmlFor="standard-select-currency">Lançamento</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
</Grid>
<Grid item xs={12} sm={4}>
<CustomFormLabel htmlFor="standard-select-currency">Situação</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
</Grid>
</Grid>

<Grid container spacing={1} style={{position: 'relative', top: '-80px'}}>
<Grid item xs={12} sm={4}>
<CustomFormLabel htmlFor="standard-select-currency">Coleção</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
</Grid>
</Grid>



<Grid container spacing={1} style={{position: 'relative', top: '-40px', marginBottom: '-40px'}}>
<Button
                 variant="contained"
                 color="inherit"
                 style={{height: '40px', width: '100px', fontWeight: 600}}
                 sx={{ mr: 1 }}
                 type="submit"
              
               >
                 Salvar
               </Button> 
               <Button
                 variant="contained"
                 color="primary"
                 style={{height: '40px', width: '100px', fontWeight: 600}}
                 sx={{ mr: 1 }}
                 type="submit"
              
               >
                 Excluir
               </Button>
               <Button
                 variant="contained"
                 color="secondary"
                 style={{height: '40px', width: '100px', fontWeight: 600}}
                 sx={{ mr: 1 }}
                 type="submit"
              
               >
                 Limpar
               </Button>
               <Button
                 variant="contained"
                 color="error"
                 style={{height: '40px', width: '100px',fontWeight: 600}}
                 sx={{ mr: 1 }}
                 type="submit"
              
               >
                 Copiar
               </Button>
               <Button
                 variant="contained"
                 style={{backgroundColor: 'black', height: '40px', width: '100px', fontWeight: 600}}
                 sx={{ mr: 1 }}
                 type="submit"
              
               >
                 Log
               </Button>
</Grid> 
       </>
  );
};
export default DetailsBuy;
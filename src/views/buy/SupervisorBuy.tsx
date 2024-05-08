import { useState } from 'react';
import CustomTextField from '../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/theme-elements/CustomFormLabel';
import CustomSelect from '../../components/forms/theme-elements/CustomSelect';
import {
  Grid,
  MenuItem,
  Button
} from '@mui/material'
 

const SupervisorBuy = () => {
    const [nameTemplate, setNameTemplate] = useState<any>(-1);
    const [nameStatus] = useState(['Sem Filial', 'Sem Vendedor', 'Sem Transportadora', 'Sem Status', 'Sem Estoque'])
    const [nameTitle, setNameTitle] = useState<any>('');

    const handleChangeTemplate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameTemplate(event.target.value);
      }
    
      const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameTitle(event.target.value);
      }
    return (
        < >
        <Grid container spacing={1} style={{position: 'relative', top: '-40px'}}>
<Grid item xs={12} sm={6}>
<CustomFormLabel htmlFor="standard-select-currency">CST ICMS Entrada:</CustomFormLabel>
    <CustomSelect
          value={nameTemplate}
          onChange={handleChangeTemplate}
          fullWidth
          variant="outlined"
        >
          <MenuItem value="-1">{nameStatus[0]}</MenuItem>
          {/* {affiliated.map((option:any) => (
            <MenuItem key={option.codigoTerceiro} value={option.codigoTerceiro}>
              {option.nomeTerceiro}
            </MenuItem>
          ))} */}
        </CustomSelect>

 </Grid>
 <Grid item xs={12} sm={3}>
<CustomFormLabel htmlFor="standard-select-currency">Enquadramento IPI:</CustomFormLabel>
    <CustomSelect
          value={nameTemplate}
          onChange={handleChangeTemplate}
          fullWidth
          variant="outlined"
        >
          <MenuItem value="-1">{nameStatus[0]}</MenuItem>
          {/* {affiliated.map((option:any) => (
            <MenuItem key={option.codigoTerceiro} value={option.codigoTerceiro}>
              {option.nomeTerceiro}
            </MenuItem>
          ))} */}
        </CustomSelect>

 </Grid>
 <Grid item xs={12} sm={1}>
 <CustomFormLabel htmlFor="standard-select-currency">Hab. IPI:</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
 </Grid>
 <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">IPI (%):</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
</Grid>
</Grid>
<Grid container spacing={1} style={{position: 'relative', top: '-60px'}}>
<Grid item xs={12} sm={6}>
<CustomFormLabel htmlFor="standard-select-currency">CST ICMS Saída:</CustomFormLabel>
    <CustomSelect
          value={nameTemplate}
          onChange={handleChangeTemplate}
          fullWidth
          variant="outlined"
        >
          <MenuItem value="-1">{nameStatus[0]}</MenuItem>
          {/* {affiliated.map((option:any) => (
            <MenuItem key={option.codigoTerceiro} value={option.codigoTerceiro}>
              {option.nomeTerceiro}
            </MenuItem>
          ))} */}
        </CustomSelect>

 </Grid>

 <Grid item xs={12} sm={3}>
 <CustomFormLabel htmlFor="standard-select-currency">Peso Liq (KG):</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
 </Grid>
 <Grid item xs={12} sm={3}>
 <CustomFormLabel htmlFor="standard-select-currency">Largura (cm):</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
</Grid>
</Grid>
<Grid container spacing={1} style={{position: 'relative', top: '-80px'}}>
<Grid item xs={12} sm={6}>
<CustomFormLabel htmlFor="standard-select-currency">NCM</CustomFormLabel>
    <CustomSelect
          value={nameTemplate}
          onChange={handleChangeTemplate}
          fullWidth
          variant="outlined"
        >
          <MenuItem value="-1">{nameStatus[0]}</MenuItem>
          {/* {affiliated.map((option:any) => (
            <MenuItem key={option.codigoTerceiro} value={option.codigoTerceiro}>
              {option.nomeTerceiro}
            </MenuItem>
          ))} */}
        </CustomSelect>

 </Grid>

 <Grid item xs={12} sm={3}>
 <CustomFormLabel htmlFor="standard-select-currency">Altura (cm)</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
 </Grid>
 <Grid item xs={12} sm={3}>
 <CustomFormLabel htmlFor="standard-select-currency">Cumprimento(cm)</CustomFormLabel>

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
export default SupervisorBuy;
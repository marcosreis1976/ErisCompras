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


const PriceBuy = () => {
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
          
<Grid item xs={6} sm={2}>
<CustomFormLabel htmlFor="standard-select-currency">Moeda</CustomFormLabel>
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

 <Grid item xs={6} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Desconto Máximo</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
 </Grid>
 <Grid item xs={6} sm={2}>
 <FormControlLabel
                style={{position: 'relative', width: '100%', top: '50px'}}
      control={
        <CustomCheckbox
          onChange={handleChangePedidos}
          defaultChecked={namePedidos}
          color="primary"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
      }
      label="Sem Desconto"
    />
</Grid>
<Grid item xs={6} sm={6}>

<Box>
            <TableContainer>
              <span style={{display: 'flex', justifyContent: 'space-between'}}>
              <p style={{fontWeight: 600, fontSize: '14pt',}}>Tabela de Preço</p>
              <Button
                    variant="contained"
                    style={{backgroundColor: 'black', height: '40px', width: '100px', fontWeight: 600}}
                    sx={{ mr: 1 }}
                    type="submit"
                 
                  >
                    Log
                  </Button>
              </span>

            <Table
          aria-label="custom pagination table"
          sx={{
            whiteSpace: 'nowrap',
          }}
        >
                <TableHead>
                  <TableRow>
                    <TableCell>Data Tabela</TableCell>
                    <TableCell>Descrição</TableCell>
                    <TableCell>Preço Tabela</TableCell>
                    <TableCell>Valor Total</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                 
                    <TableRow key={1}>
                      {/* ------------------------------------------- */}
                      {/* Product Image & Title */}
                      {/* ------------------------------------------- */}
                      <TableCell>
                        <Stack direction="row" alignItems="center" gap={2}>
                            <p style={{fontWeight: 600, fontSize: '10pt'}}>12/02/2024 12:08:52</p>{' '}
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack direction="row" alignItems="center" gap={2}>
                            <p style={{fontWeight: 600, fontSize: '10pt'}}>PADRÃO</p>{' '}
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack direction="row" alignItems="center" gap={2}>
                            <p style={{fontWeight: 600, fontSize: '10pt'}}>58,10</p>{' '}
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack direction="row" alignItems="center" gap={2}>
                            <p style={{fontWeight: 600, fontSize: '10pt'}}>89,41</p>{' '}
                        </Stack>
                      </TableCell>

                    </TableRow>
              
                </TableBody>
              </Table>
            </TableContainer>
          </Box>


  </Grid>
</Grid>
 <Grid container spacing={1} style={{position: 'relative', top: '-150px'}}>
<Grid item xs={12} sm={3}>
 <CustomFormLabel htmlFor="standard-select-currency">Preço por site</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
</Grid>
<Grid item xs={12} sm={3}>
 <CustomFormLabel htmlFor="standard-select-currency">Perc. Site (%)</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
</Grid>
</Grid>
<Grid container spacing={1} style={{position: 'relative', top: '-110px', marginBottom: '-110px'}}>
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
export default PriceBuy;
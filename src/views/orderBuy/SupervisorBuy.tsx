import { useState, useEffect } from 'react';
import CustomTextField from '../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/theme-elements/CustomFormLabel';
import CustomSelect from '../../components/forms/theme-elements/CustomSelect';

import {
  Grid,
  MenuItem,
  Button,
  FormControlLabel,
  Radio,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  Typography
} from '@mui/material'
 
import {getAffiliated, getListSellers, getListTransporters, itensRequest, itensStock, getOrderPanel, getListSummary} from "../../services/user.service"
import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';
import PageContainer from 'src/components/container/PageContainer';
const SupervisorBuy = () => {
  const [nameTemplate, setNameTemplate] = useState<any>(-1);
    const [nameStatus] = useState(['Sem Plano Conta', 'Sem Centro Custo', 'Sem NCM', 'Sem CST', 'Sem Status', 'Sem Objetivo Transferência'])
    const [nameTitle, setNameTitle] = useState<any>('');
    const [nameFilial, setNameFilial] = useState<any>(-1);
    const [nameStatuss, setNameStatuss] = useState<any>(-1);
    const [nameOper, setNameOper] = useState<any>(-1);
    const [nameObj, setNameObj] = useState<any>(-1);
    const [nameProd, setNameProd] = useState<any>(-1);
    const [affiliated, setAffiliated] = useState([]);
    const [status, setStatus] = useState<any>([]);
    const [oper, setOper] = useState<any>([]);
    const [obj, setObj] = useState<any>([]);
    const [prod, setProd] = useState<any>([]);
    const [requests, setRequest] = useState([]);
    const [stocks, setStocks] = useState([]);

    const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameStatuss(event.target.value);
      }

      const handleChangeOper = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameOper(event.target.value);
      }
      const handleChangeObj = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameObj(event.target.value);
      }
      const handleChangeProd = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameProd(event.target.value);
      }
    
      const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameTitle(event.target.value);
      }

      const handleChangeFilial = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameFilial(event.target.value);
      };

      useEffect(() => {
        const status = [{id: 0, value: 'Bloqueado'}, {id:1, value: 'Em Compra'}, {id:3, value: 'liberado'},
          {id:4, value:'Faturado'}, {id:5, value: 'Cancelado'}] 
      
        setNameStatuss([status])

        
      }, []);

    return (
        < >

     <Grid container spacing={1} style={{position: 'relative', top: '-40px', marginBottom: '-10px'}}>
     <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Item</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Código</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">EAN</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Descrição</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Qtde</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">Unid</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">Preço Tab</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">% Desc</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">Preço Liq</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">Total</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">Status</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
 
        </Table>
      </TableContainer>
      
    </Grid> 
    <Grid container spacing={1} style={{position: 'relative', top: '-50px'}}>
    <Grid item xs={12} sm={1.5}>
 <CustomFormLabel htmlFor="standard-select-currency">Código</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={1.5}>
 <CustomFormLabel htmlFor="standard-select-currency">Ean</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={4}>
 <CustomFormLabel htmlFor="standard-select-currency">Descrição</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={1}>
 <CustomFormLabel htmlFor="standard-select-currency">Unid Méd</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Pl. Contas</CustomFormLabel>

 <CustomSelect
                      value={nameFilial}
                      onChange={handleChangeFilial}
                      fullWidth
                      variant="outlined"
                    >
                      <MenuItem value="-1">{nameStatus[0]}</MenuItem>
                      {affiliated.map((option:any) => (
                        <MenuItem key={option.codigoTerceiro} value={option.codigoTerceiro}>
                          {option.nomeTerceiro}
                        </MenuItem>
                      ))}
                    </CustomSelect>

  </Grid>
  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Centro Custo</CustomFormLabel>

 <CustomSelect
                      value={nameFilial}
                      onChange={handleChangeFilial}
                      fullWidth
                      variant="outlined"
                    > 
                      <MenuItem value="-1">{nameStatus[1]}</MenuItem>
                      {affiliated.map((option:any) => (
                        <MenuItem key={option.codigoTerceiro} value={option.codigoTerceiro}>
                          {option.nomeTerceiro}
                        </MenuItem>
                      ))}
                    </CustomSelect>

  </Grid>
  
    </Grid>
     <Grid container spacing={1} style={{position: 'relative', top: '-50px'}}>
     <Grid item xs={12} sm={1}>
 <CustomFormLabel htmlFor="standard-select-currency">Qtde</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={1.5}>
 <CustomFormLabel htmlFor="standard-select-currency">Preço Tabela</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={1.5}>
 <CustomFormLabel htmlFor="standard-select-currency">% Desconto</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={1.5}>
 <CustomFormLabel htmlFor="standard-select-currency">Preço Líquido</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>

  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">NCM</CustomFormLabel>

 <CustomSelect
                      value={nameFilial}
                      onChange={handleChangeFilial}
                      fullWidth
                      variant="outlined"
                    >
                      <MenuItem value="-1">{nameStatus[2]}</MenuItem>
                      {affiliated.map((option:any) => (
                        <MenuItem key={option.codigoTerceiro} value={option.codigoTerceiro}>
                          {option.nomeTerceiro}
                        </MenuItem>
                      ))}
                    </CustomSelect>

  </Grid>
  <Grid item xs={12} sm={2.5}>
 <CustomFormLabel htmlFor="standard-select-currency">CST</CustomFormLabel>

 <CustomSelect
                      value={nameFilial}
                      onChange={handleChangeFilial}
                      fullWidth
                      variant="outlined"
                    >
                      <MenuItem value="-1">{nameStatus[3]}</MenuItem>
                      {affiliated.map((option:any) => (
                        <MenuItem key={option.codigoTerceiro} value={option.codigoTerceiro}>
                          {option.nomeTerceiro}
                        </MenuItem>
                      ))}
                    </CustomSelect>

  </Grid>
  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Status</CustomFormLabel>

 <CustomSelect
                      value={nameFilial}
                      onChange={handleChangeFilial}
                      fullWidth
                      variant="outlined"
                    >
                      <MenuItem value="-1">{nameStatus[4]}</MenuItem>
                      {status.map((option:any) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </CustomSelect>

  </Grid>

  
      </Grid>

      <Grid container spacing={1} style={{position: 'relative', top: '-50px'}}>
          

          <Grid item xs={12} sm={2} >
         <CustomFormLabel  htmlFor="standard-select-currency">% Ipi</CustomFormLabel>
        
         <CustomTextField disabled={true} id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={2} >
         <CustomFormLabel htmlFor="standard-select-currency">Base Ipi</CustomFormLabel>
        
         <CustomTextField disabled={true} id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={2} >
         <CustomFormLabel htmlFor="standard-select-currency">Valor Ipi</CustomFormLabel>
        
         <CustomTextField disabled={true} id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={2} >
         <CustomFormLabel htmlFor="standard-select-currency">% Icms</CustomFormLabel>
        
         <CustomTextField disabled={true} id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={2} >
         <CustomFormLabel htmlFor="standard-select-currency">Base Icms</CustomFormLabel>
        
         <CustomTextField disabled={true} id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={2} >
         <CustomFormLabel htmlFor="standard-select-currency">Valor Icms</CustomFormLabel>
        
         <CustomTextField disabled={true} id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
          </Grid>
                    </Grid>
        
                    <Grid container spacing={1} style={{position: 'relative', top: '-50px'}}>
                  
        
                  <Grid item xs={12} sm={2} >
                 <CustomFormLabel htmlFor="standard-select-currency">% Iva</CustomFormLabel>
                
                 <CustomTextField disabled={true} id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={2} >
                 <CustomFormLabel htmlFor="standard-select-currency">% Icms St</CustomFormLabel>
                
                 <CustomTextField disabled={true} id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={2} >
                 <CustomFormLabel htmlFor="standard-select-currency">Base Icms St</CustomFormLabel>
                
                 <CustomTextField disabled={true} id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={2} >
                 <CustomFormLabel htmlFor="standard-select-currency">Valor Icms St</CustomFormLabel>
                
                 <CustomTextField disabled={true} id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
                  </Grid>
                            </Grid>

      
      <Grid container spacing={1} style={{position: 'relative',  top: '-20px'}}>
     
      <Grid item xs={12} sm={12} >
  <Button
                 variant="contained"
                 color="inherit"
                 style={{height: '40px', width: '100px', fontWeight: 600, backgroundColor: 'green'}}
                 sx={{ mr: 1 }}
                 type="submit"
              
               >
                 Salvar
               </Button> 
               <Button
                 variant="contained"
                 style={{height: '40px', width: '100px', fontWeight: 600, backgroundColor: 'red'}}
                 sx={{ mr: 1 }}
                 type="submit"
              
               >
                 Excluir
               </Button>
               <Button
                 variant="contained"
                 color="secondary"
                 style={{height: '40px', width: '100px', fontWeight: 600, backgroundColor: 'gray'}}
                 sx={{ mr: 1 }}
                 type="submit"
              
               >
                 Limpar
               </Button>
               <Button
                 variant="contained"
                 style={{height: '40px', width: '100px', fontWeight: 600, backgroundColor: 'orange'}}
                 sx={{ mr: 1 }}
                 type="submit"
              
               >
                 Estoque
               </Button>
               <Button
                 variant="contained"
                 style={{height: '40px', width: '100px', fontWeight: 600, backgroundColor: 'black'}}
                 sx={{ mr: 1 }}
                 type="submit"
              
               >
                 Importar
               </Button>
    </Grid>
      </Grid>
    
        
          </>
  );
};
export default SupervisorBuy;
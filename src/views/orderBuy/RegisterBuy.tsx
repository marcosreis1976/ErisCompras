import { useState, useEffect } from 'react';
import CustomTextField from '../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/theme-elements/CustomFormLabel';
import CustomSelect from '../../components/forms/theme-elements/CustomSelect';
import {
  Grid,
  MenuItem,
  Button,
  Radio,
  FormControlLabel
} from '@mui/material'
import {getAffiliated, getListSellers, getListTransporters, itensRequest, itensStock, getOrderPanel, getListSummary} from "../../services/user.service"
import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';

const RegisterBuy = () => {
    const [nameTemplate, setNameTemplate] = useState<any>(-1);
    const [nameStatus] = useState(['Sem Filial', 'Sem Status', 'Sem CFOP', 'Sem Contato', 'Sem Transportadora', 'Sem Objetivo Transferência'])
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
  
      
    
      const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameTitle(event.target.value);
      }



      const handleChangeFilial = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameFilial(event.target.value);
      };

      useEffect(() => {
        getAffiliated().then(
          (response) => {
            
            setRequest(itensRequest)
            setStocks(itensStock)
            
            response.data.length > 0 ? setAffiliated(response.data): null
            let status = [{
              index: 0,
              value: 'Em Análise'
            },{
              index: 1,
              value: "Pendente"
            },{
              index: 2,
              value: "Recebida"
            },{
              index: 3,
              value: "Cancelada"
            }]
            setStatus(status)

            let oper = [{
              index: 0,
              value: 'Compra'
            },{
              index: 1,
              value: "Consignação"
            },{
              index: 2,
              value: "Transferência"
            },{
              index: 3,
              value: "Devolução"
            }]
            setOper(oper)

            let obj = [{
              index: 0,
              value: 'Compra Centralizada'
            },{
              index: 1,
              value: "Encomenda"
            },{
              index: 2,
              value: "Compras"
            },{
              index: 3,
              value: "Estoque"
            }]
            setObj(obj)
            let prod = [{
              index: 0,
              value: 'Descrição'
            },{
              index: 1,
              value: "EAN"
            },{
              index: 2,
              value: "Código"
            }]
            setProd(prod)
          },
          );

        
      }, []);


return (
<>
<Grid container spacing={1} style={{position: 'relative', top: '-40px', marginBottom: '-60px'}}>
<Grid item xs={12} sm={3.5}>
 <CustomFormLabel htmlFor="standard-select-currency">Filial</CustomFormLabel>

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
<Grid item xs={12} sm={1.5}>
 <CustomFormLabel htmlFor="standard-select-currency">OC</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>

  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Data OC</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>

  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Data Entrega</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={3}>
 <CustomFormLabel htmlFor="standard-select-currency">CFOP</CustomFormLabel>

 <CustomSelect
                      value={nameOper}
                      onChange={handleChangeOper}
                      fullWidth
                      variant="outlined"
                    >
                      <MenuItem value="-1">{nameStatus[2]}</MenuItem>
                      {oper.map((option:any) => (
                        <MenuItem key={option.index} value={option.index}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </CustomSelect>

  </Grid>



 
 </Grid>
  <Grid container spacing={1} style={{position: 'relative', marginBottom: '-20px'}}>
  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Status</CustomFormLabel>

 <CustomSelect
                      value={nameStatuss}
                      onChange={handleChangeStatus}
                      fullWidth
                      variant="outlined"
                    >
                      <MenuItem value="-1">{nameStatus[1]}</MenuItem>
                      {status.map((option:any) => (
                        <MenuItem key={option.index} value={option.index}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </CustomSelect>

  </Grid>

  <Grid item xs={12} sm={1.5}>
 <CustomFormLabel htmlFor="standard-select-currency">Código</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>

  <Grid item xs={12} sm={3} >
 <CustomFormLabel htmlFor="standard-select-currency">Fornecedor</CustomFormLabel>

 <CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
  </Grid>
  <Grid item xs={12} sm={2.5}>
 <CustomFormLabel htmlFor="standard-select-currency">CNPJ/CPF</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>

  <Grid item xs={12} sm={3} style={{position: 'relative', textAlign: 'center', display: 'flex', justifyContent: 'space-around'}}>
<Button
variant="contained"
color="primary"
type="submit"
style={{position: 'relative', top: '55px', height: '43px', width: '100px'}}

>
Buscar
</Button>
<Button
variant="contained"
color="secondary"
type="submit"
style={{position: 'relative', top: '55px', height: '43px', width: '100px'}}

>
Cadastrar
</Button>
</Grid>

</Grid> 


 <Grid container spacing={1} style={{position: 'relative', marginBottom: '-10px'}}>
 <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Contato</CustomFormLabel>

 <CustomSelect
                      value={nameOper}
                      onChange={handleChangeOper}
                      fullWidth
                      variant="outlined"
                    >
                      <MenuItem value="-1">{nameStatus[3]}</MenuItem>
                      {oper.map((option:any) => (
                        <MenuItem key={option.index} value={option.index}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </CustomSelect>
  </Grid>
  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Pedido Cliente</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={4}>
 <CustomFormLabel htmlFor="standard-select-currency">Transportadora</CustomFormLabel>

 <CustomSelect
                      value={nameOper}
                      onChange={handleChangeOper}
                      fullWidth
                      variant="outlined"
                    >
                      <MenuItem value="-1">{nameStatus[4]}</MenuItem>
                      {oper.map((option:any) => (
                        <MenuItem key={option.index} value={option.index}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </CustomSelect>
  </Grid>
  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Valor Frete</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={2} style={{position: 'relative', marginTop: '50px'}}>
  <FormControlLabel control={<CustomCheckbox defaultChecked />} label="Valor Embutido" />
  </Grid>
 </Grid> 

 <Grid container spacing={1} style={{position: 'relative', marginBottom: '30px'}}>
 <Grid item xs={12} sm={4} style={{position: 'relative', marginTop: '0px', border: '1px solid lightgray', height: '77px', top: '30px', borderRadius: '10px'}}>
 <CustomFormLabel style={{position: 'relative', textAlign: 'center', top: '-25px'}} htmlFor="standard-select-currency">Resp. Frete</CustomFormLabel>
<span style={{position: 'relative', width: '100%', left: '10%'}}>
 <Radio
                    value={'teste'}
                    style={{position: 'relative',top: '-30px'}}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'tete' }}
                  />
<label  style={{position: 'relative',top: '-30px'}}>Emitente</label>
<Radio
                    value={'teste'}
                    style={{position: 'relative',top: '-30px', textAlign: 'right'}}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'tete' }}
                  />
<label  style={{position: 'relative',top: '-30px'}}>Destinatário</label> 
</span>
  </Grid>
  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Valor Seguro</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={3}>
 <CustomFormLabel htmlFor="standard-select-currency">Valor Outras Despesas</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={3}>
 <CustomFormLabel htmlFor="standard-select-currency">Objetivo Transferência</CustomFormLabel>

 <CustomSelect
                      value={nameOper}
                      onChange={handleChangeOper}
                      fullWidth
                      variant="outlined"
                    >
                      <MenuItem value="-1">{nameStatus[5]}</MenuItem>
                      {oper.map((option:any) => (
                        <MenuItem key={option.index} value={option.index}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </CustomSelect>
  </Grid>
  </Grid>
  
  <Grid container spacing={1} style={{position: 'relative'}}>
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
    </Grid>

  
  </>

);
};
  
export default RegisterBuy;
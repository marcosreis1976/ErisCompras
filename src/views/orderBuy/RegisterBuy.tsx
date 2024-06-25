import { useState, useEffect, useContext } from 'react';
import CustomTextField from '../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/theme-elements/CustomFormLabel';
import CustomSelect from '../../components/forms/theme-elements/CustomSelect';
import {
  Grid,
  MenuItem,
  Button,
  Radio,
  FormControlLabel,
  Paper, 
  Modal,
  Box,Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
} from '@mui/material'
import {getAffiliated,  itensRequest, itensStock, getCFOP, getNameFornecedor, getFornecedor, getListTransporters} from "../../services/user.service"
import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';
import AlertError from 'src/components/alertError/alertError';
import AppContext from './AppContext';

const styles = {
  base: {
    cursor: 'pointer',
    ':hover': {
      color: 'red'
    }
  }
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const formatCPF = (value:any) => {
  return value
    .replace(/\D/g, '') // Remove non-digits
    .replace(/(\d{3})(\d)/, '$1.$2') // Add dot after 3 digits
    .replace(/(\d{3})(\d)/, '$1.$2') // Add dot after the next 3 digits
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2') // Add dash before the last 2 digits
    .substring(0, 14); // Limit length to 14 characters
};

const formatCNPJ = (value:any) => {
  return value
    .replace(/\D/g, '') // Remove non-digits
    .replace(/(\d{2})(\d)/, '$1.$2') // Add dot after 2 digits
    .replace(/(\d{3})(\d)/, '$1.$2') // Add dot after the next 3 digits
    .replace(/(\d{3})(\d)/, '$1/$2') // Add slash after the next 3 digits
    .replace(/(\d{4})(\d{1,2})$/, '$1-$2') // Add dash before the last 2 digits
    .substring(0, 18); // Limit length to 18 characters
};

const removerCaracteres = (cpfOuCnpj:any) => {
  console.log(cpfOuCnpj)
  return cpfOuCnpj.replace(/\D/g, '');
}



const RegisterBuy = () => {
    const context = useContext(AppContext);



    const [nameTemplate, setNameTemplate] = useState<any>(-1);
    const [nameStatus] = useState(['Sem Filial', 'Sem Status', 'Sem CFOP', 'Sem Contato', 'Sem Transportadora', 'Sem Objetivo Transferência'])
    const [nameTitle, setNameTitle] = useState<any>('');
    const [nameFornecedor, setNameFornecedor] = useState<any>(context.fornecedor);
    const [nameFilial, setNameFilial] = useState<any>(context.codigoFilial);
    const [oc, setOC] = useState<any>(context.pedido)
    const [dataEntrega, setDataEntrega] = useState<any>(context.dataPedido)
    const [dataOC, setDataOC] = useState<any>(context.dataPedido)
    const [codigo, setCodigo] = useState<any>(context.codigoFornecedor);
    const [nameStatuss, setNameStatuss] = useState<any>(context.codigoStatus);
    const [nameOper, setNameOper] = useState<any>(context.codigoCfop);
    const [nameObj, setNameObj] = useState<any>(-1);
    const [nameCPFCNPJ, setNameCPFCNPJ] = useState<any>(context.cnpjCpf)
    const [affiliated, setAffiliated] = useState([]);
    const [transportadora, setTransportadora] = useState([]);
    const [status, setStatus] = useState<any>([]);
    const [oper, setOper] = useState<any>([]);
    const [contatos, setContatos] = useState<string[]>(context.contatos);
    const [obj, setObj] = useState<any>([]);
    const [prod, setProd] = useState<any>([]);
    const [requests, setRequest] = useState([]);
    const [stocks, setStocks] = useState([]);
    const [open, setOpen] = useState(false);
    const [openError, setOpenError] = useState(true);
    const [eContato, setEContato] = useState<any>(-1);
    const [typeModal, setTypeModal] = useState(0);
    const [valueModal, setValueModal] = useState<any>([]);
    const [valorSeguro, setValorSeguro] = useState(context.valorSeguro)
    const [valorOutrasDespesas, setValorOutrasDespesas] = useState(context.valorOutrasDespesas)
    const [pedidoCliente, setPedidoCliente] = useState(context.pedidoCliente)
    const [codigoTransportadora, setCodigoTRansportadora] = useState(context.codigoTransportadora)
    const [valorFrete, setValorFrete] = useState(context.valorFrete)
    const [objetivoTransferencia, setObjetivoTransferencia] = useState(context.codigoObjetivoTransferencia)
    const [responsavelFrete, setResponsavelFrete] = useState(context.responsavelFrete)


    const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameStatuss(event.target.value);
      }


      const handleChangeCPFCNPJ = (event: React.ChangeEvent<HTMLInputElement>) =>{
        let inputValue = event.target.value;
        if (inputValue.length <= 14) {
          inputValue = formatCPF(inputValue);
        } else {
          inputValue = formatCNPJ(inputValue);
        }
  
        setNameCPFCNPJ(inputValue);
      }  

      const handleOpenError = () => setOpenError(true);
      const handleCloseError = () => setOpenError(false);



    const handleChangeFornecedor = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNameFornecedor(event.target.value);
    } 

    const handleChangeCodigo = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCodigo(event.target.value);
    } 

      const handleChangeOper = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameOper(event.target.value);
      }
      const handleChangeObj = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameObj(event.target.value);
      }


      const handleOpen = () => {
        let parameter = '';
        nameFornecedor != '' ?
        (  parameter = `?nomeFornecedor=${nameFornecedor}`,
        getNameFornecedor(parameter).then((response)=>{
          setTypeModal(1)
          setOpen(true);
          setValueModal(response.data)
          console.log(response.data)
          
        })
         ) : 
        (parameter += codigo != '' ? `?codigoFornecedor=${codigo}` : '',
        parameter += nameCPFCNPJ != ''? `?cnpjCpf=${removerCaracteres(nameCPFCNPJ)}` : '',
         getFornecedor(parameter).then((response)=>{
          setTypeModal(2)
          setOpen(true);
          setContatos(response.data.contatos)
          setValueModal([response.data.fornecedor])
         })

        );

      }
      const handleClose = () => setOpen(false);
  
      
    
      const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameTitle(event.target.value);
      }



      const handleChangeFilial = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameFilial(event.target.value);
      };

      const choose = (row:any) =>{

        let parameter = '';
        typeModal == 1 ? (
        console.log(row),
        parameter = `?codigoFornecedor=${row.codigoTerceiro}`,
        getFornecedor(parameter).then((response)=>{
          console.log(response.data)
          setNameCPFCNPJ(response.data.fornecedor.cnpjCpf.length == 11 ? formatCPF(response.data.fornecedor.cnpjCpf) : formatCNPJ(response.data.fornecedor.cnpjCpf))
          setContatos(response.data.contatos)
          setCodigo(response.data.fornecedor.codigoFornecedor)
          setOpen(false);
         })

        ) : (
          setNameCPFCNPJ(row.cnpjCpf.length == 11 ? formatCPF(row.cnpjCpf) : formatCNPJ(row.cnpjCpf)),
          setCodigo(row.codigoFornecedor),
          setNameFornecedor(row.nomeFornecedor),
          setOpen(false)
        )

      }

      useEffect(() => {
        
        if(nameCPFCNPJ != ''){
          if (nameCPFCNPJ <= 14) {
            setNameCPFCNPJ(formatCPF(nameCPFCNPJ))
          } else {
            setNameCPFCNPJ(formatCNPJ(nameCPFCNPJ));
          }
        } 

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

            getCFOP('?apenasEntrada=1').then((response)=>{
              console.log(response.data)
              setOper(response.data)
            })
            
            setObj([{
              index: 1,
              value: "Encomenda Compras"
            },{
              index: 2,
              value: "Remanejamento de Estoque"
            },{
              index: 3,
              value: "Compra Centralizada"
            }])

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

            getListTransporters().then((response:any)=>{
              setTransportadora(response.data)
            })
          },
          ).catch((err) => {
            <AlertError open={openError} handleClose={handleCloseError} />
          });;

        
      }, []);

const clean = () =>{
  setContatos([])
  setCodigo('')
  setNameCPFCNPJ('')
  setNameFornecedor('')
}

return (
<>
<Grid container spacing={1} style={{position: 'relative', top: '-50px' }}>
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

<CustomTextField id="password" value={oc} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>

  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Data OC</CustomFormLabel>

<CustomTextField id="password" value={dataOC} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>

  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Data Entrega</CustomFormLabel>

<CustomTextField id="password" value={dataEntrega} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

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
                        <MenuItem key={option.cfopId} value={option.cfopId}>
                          {option.cfopNome}
                        </MenuItem>
                      ))}
                    </CustomSelect>

  </Grid>



 
 </Grid>
  <Grid container spacing={1} style={{position: 'relative',top: '-50px'}}>
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

<CustomTextField id="password" value={codigo} onChange={handleChangeCodigo} type="text" variant="outlined" fullWidth />

  </Grid>

  <Grid item xs={12} sm={3} >
 <CustomFormLabel htmlFor="standard-select-currency">Fornecedor</CustomFormLabel>

 <CustomTextField id="password" value={nameFornecedor} onChange={handleChangeFornecedor} type="text" variant="outlined" fullWidth />
  </Grid>
  <Grid item xs={12} sm={2.5}>
 <CustomFormLabel htmlFor="standard-select-currency">CNPJ/CPF</CustomFormLabel>

<CustomTextField id="password" value={nameCPFCNPJ} onChange={handleChangeCPFCNPJ} type="text" variant="outlined" fullWidth />

  </Grid>

  <Grid item xs={12} sm={3} style={{position: 'relative', textAlign: 'center', display: 'flex', justifyContent: 'space-around'}}>
<Button
variant="contained"
color="primary"
type="submit"
style={{position: 'relative', top: '55px', height: '43px', width: '100px'}}
onClick={handleOpen}
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


 <Grid container spacing={1} style={{position: 'relative', top: '-50px'}}>
 <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Contatos</CustomFormLabel>

 <CustomSelect
                      value={eContato}
                      onChange={handleChangeOper}
                      fullWidth
                      variant="outlined"
                    >
                      <MenuItem value="-1">{nameStatus[3]}</MenuItem>
                      {contatos.length > 0 ? contatos.map((option:any, index:any) => (
                        <MenuItem key={index} value={index}>
                          {option.nomeContato}
                        </MenuItem>
                      )) : null}
                    </CustomSelect>
  </Grid>
  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Pedido Cliente</CustomFormLabel>

<CustomTextField id="password" value={pedidoCliente} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={4}>
 <CustomFormLabel htmlFor="standard-select-currency">Transportadora</CustomFormLabel>

 <CustomSelect
                      value={codigoTransportadora}
                      onChange={handleChangeOper}
                      fullWidth
                      variant="outlined"
                    >
                      <MenuItem value="-1">{nameStatus[4]}</MenuItem>
                       {transportadora.map((option:any) => (
                        <MenuItem key={option.codigoTerceiro} value={option.codigoTerceiro}>
                          {option.nomeTerceiro}
                        </MenuItem>
                      ))} 
                    </CustomSelect>
  </Grid>
  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Valor Frete</CustomFormLabel>

<CustomTextField id="password" value={valorFrete} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={2} style={{position: 'relative', marginTop: '50px'}}>
  <FormControlLabel control={<CustomCheckbox defaultChecked />} label="Valor Embutido" />
  </Grid>
 </Grid> 

 <Grid container spacing={1} style={{position: 'relative', top: '-50px'}}>
 <Grid item xs={12} sm={4} style={{position: 'relative', marginTop: '0px', border: '1px solid lightgray', height: '77px', top: '30px', borderRadius: '10px'}}>
 <CustomFormLabel style={{position: 'relative', textAlign: 'center', top: '-25px'}} htmlFor="standard-select-currency">Resp. Frete</CustomFormLabel>
<span style={{position: 'relative', width: '100%', left: '10%'}}>
 <Radio
                    value={responsavelFrete == 1}
                    style={{position: 'relative',top: '-30px'}}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'tete' }}
                  />
<label  style={{position: 'relative',top: '-30px'}}>Emitente</label>
<Radio
                    value={responsavelFrete == 2}
                    style={{position: 'relative',top: '-30px', textAlign: 'right'}}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'tete' }}
                  />
<label  style={{position: 'relative',top: '-30px'}}>Destinatário</label> 
</span>
  </Grid>
  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Valor Seguro</CustomFormLabel>

<CustomTextField id="password" value={valorSeguro} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={3}>
 <CustomFormLabel htmlFor="standard-select-currency">Valor Outras Despesas</CustomFormLabel>

<CustomTextField id="password" value={valorOutrasDespesas} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid> 
  <Grid item xs={12} sm={3}>
 <CustomFormLabel htmlFor="standard-select-currency">Objetivo Transferência</CustomFormLabel>

 <CustomSelect
                      value={objetivoTransferencia}
                      onChange={handleChangeOper}
                      fullWidth
                      variant="outlined"
                    >
                      <MenuItem value="0">{nameStatus[5]}</MenuItem>
                      {obj.map((v:any) => (
                        <MenuItem key={v.index} value={v.index}>
                          {v.value}
                        </MenuItem>
                      ))} 
                    </CustomSelect>
  </Grid>
  </Grid>
  
  <Grid container spacing={1} style={{position: 'relative'}}>
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
                 style={{height: '40px', width: '100px', backgroundColor: 'gray', fontWeight: 600}}
                 sx={{ mr: 1 }}
                 type="submit"
                onClick={()=>clean()}
               >
                 Limpar
               </Button>
    </Grid>

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Fornecedores
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell align="center">CNPJ - CPF</TableCell>
                  <TableCell align="center">Código</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {valueModal.map((row:any, index:any) => (
                  <TableRow key={index} style={styles.base} onClick={() => choose(row)}>
                    <TableCell component="th" scope="row">
                      {typeModal == 1 ? row.nomeTerceiro: row.nomeFornecedor}
                    </TableCell>
                    <TableCell align="center">{row.cnpjCpf.length == 11 ? formatCPF(row.cnpjCpf): formatCNPJ(row.cnpjCpf)}</TableCell>
                    <TableCell align="center">{typeModal == 1 ? row.codigoTerceiro : row.codigoFornecedor}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
  
  </>

);
};
  
export default RegisterBuy;
import { useState, useEffect, useContext } from 'react';
import CustomTextField from '../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/theme-elements/CustomFormLabel';
import CustomSelect from '../../components/forms/theme-elements/CustomSelect';
import {
  Grid,
  MenuItem,
  Button,
  Radio,
  TableContainer,
  TableHead,
  Table,
  TableCell,
  Typography,
  TableRow,
  TableBody,
  Alert,
  TableFooter,
  Pagination,
  Box,
  CircularProgress
} from '@mui/material'
import {getAffiliated, getConsultOCM, getListTransporters, itensRequest, itensStock, getOrderPanel, getListSummary} from "../../services/user.service"
import OrderBuy from './index';
import {CartContext} from "../../App"
import BlankCard from 'src/components/shared/BlankCard';

const LoadingSplash = () => {
  return (
      <Box 
          sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '350px',
              width: '100%',
              position: 'relative',
              border: 'none',
              top: 0,
              left: 0,
              color: 'red',
              zIndex: 9999,
          }}
      >
          <CircularProgress />
      </Box>
  );
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

const SearchBuy = (props:any) => {
    const [nameTemplate, setNameTemplate] = useState<any>(-1);
    const [nameStatus] = useState(['Sem Filial', 'Sem Status', 'Sem Operação', 'Sem Objeto', 'Sem Produto'])
    const [nameTitle, setNameTitle] = useState<any>('');
    const [nameOC, setNameOC] = useState<any>('');
    const [nameFornecedor, setNameFornecedor] = useState<any>('');
    const [namecnpjCpf, setNamecnpjCpf] = useState<any>('');
    const [nameCFOP, setnameCFOP] = useState<any>('');
    const [nameFilial, setNameFilial] = useState<any>(-1);
    const [nameStatuss, setNameStatuss] = useState<any>(-1);
    const [nameOper, setNameOper] = useState<any>(-1);
    const [nameObj, setNameObj] = useState<any>(-1);
    const [nameUser, setNameUser] = useState<any>('');
    const [namePedido, setNamePedido] = useState<any>('');
    const [nameDataInicial, setNameDataInicial] = useState<any>('');
    const [nameDataFinal, setNameDataFinal] = useState<any>('');
    const [nameObs, setNameObs] = useState<any>('');
    const [nameProd, setNameProd] = useState<any>(-1);
    const [affiliated, setAffiliated] = useState([]);
    const [status, setStatus] = useState<any>([]);
    const [oper, setOper] = useState<any>([]);
    const [obj, setObj] = useState<any>([]);
    const [prod, setProd] = useState<any>([]);
    const [requests, setRequest] = useState([]);
    const [stocks, setStocks] = useState([]);
    const [valueTable, setValueTable] = useState([]);
    let answer = useContext(CartContext)
    const [loading, setLoading] = useState(false);
    const [dataPage, setDataPage] = useState(answer);
    const [totalPages, setTotalPages] = useState(1);
    const [parameter, setParameter] = useState('');
    const [page, setPage] = useState(0);
    const [valueRadio, setValueRadio] = useState([false, false, false])

    const mudarMensagem = () => {
      props.atualizarMensagem(2);
    };

    const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameStatuss(event.target.value);
      }

      const handleChangeOC = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameOC(event.target.value);
      }

      const handleChangeFornecedor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameFornecedor(event.target.value);
      }

      const handleChangecnpjCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = event.target.value;
        if (inputValue.length <= 14) {
          inputValue = formatCPF(inputValue);
        } else {
          inputValue = formatCNPJ(inputValue);
        }
        setNamecnpjCpf(inputValue);
      }

      const handleChangeOper = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameOper(event.target.value);
      }
      const handleChangeObj = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameObj(event.target.value);
      }
      const handleChangeCFOP = (event: React.ChangeEvent<HTMLInputElement>) => {
        setnameCFOP(event.target.value);
      }
    
      const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameTitle(event.target.value);
      }

      const handleChangeFilial = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameFilial(event.target.value);
      };

      const handleChangePedido = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNamePedido(event.target.value);
      };

      const handleChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameUser(event.target.value);
      };

      const handleChangeDataInicial = (event: React.ChangeEvent<HTMLInputElement>) => {
        let input = event.target.value;
    
        // Remove all non-digit characters
        input = input.replace(/\D/g, '');
    
        // Format the input as MM/DD/YYYY
        if (input.length > 2) {
          input = input.slice(0, 2) + '/' + input.slice(2);
        }
        if (input.length > 5) {
          input = input.slice(0, 5) + '/' + input.slice(5);
        }
        if (input.length > 10) {
          input = input.slice(0, 10);
        }
    
        setNameDataInicial(input);
      };
    
      const handleChangeDataFinal = (event: React.ChangeEvent<HTMLInputElement>) => {
        let input = event.target.value;
    
        // Remove all non-digit characters
        input = input.replace(/\D/g, '');
    
        // Format the input as MM/DD/YYYY
        if (input.length > 2) {
          input = input.slice(0, 2) + '/' + input.slice(2);
        }
        if (input.length > 5) {
          input = input.slice(0, 5) + '/' + input.slice(5);
        }
        if (input.length > 10) {
          input = input.slice(0, 10);
        }
    
        setNameDataFinal(input);
      };

      const handleChangeObs = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameObs(event.target.value);
      };
    

      const searchOCM = () =>{
        setValueTable([])
        setTotalPages(1)
        setLoading(true)

        if (nameFilial == -1) {
          setLoading(false)
          return
        }

        let parameter = `&filial=${nameFilial}`;
        nameOC != '' ? parameter = parameter + `&pedido=${nameOC}` : null
        nameFornecedor != '' ? parameter = parameter + `&fornecedor=${nameFornecedor}` : null
        namecnpjCpf != '' ? parameter = parameter + `&cnpjCpf=${namecnpjCpf}` : null
        nameStatuss >= 0 ? parameter = parameter + `&status=${nameStatuss}` : null
        nameCFOP != '' ? parameter = parameter + `&cfop=${nameCFOP}` : null
        nameObj != -1 ? parameter = parameter + `&objetivo=${nameObj}` : null
        nameOper != -1 ? parameter = parameter + `&operacao=${nameOper}` : null
        nameUser != '' ? parameter = parameter + `&usuarioFiltro=${nameUser}` : null
        namePedido != '' ? parameter = parameter + `&pedidoCliente=${namePedido}` : null
        if(nameDataInicial != ''){
          let partesData = nameDataInicial.split('/')
          let dia = partesData[0]
          let mes = partesData[1]
          let ano = partesData[2]
          parameter = parameter + `&dataInicial=${mes}/${dia}/${ano}`
        } 
        if(nameDataFinal != ''){
          let partesData = nameDataFinal.split('/')
          let dia = partesData[0]
          let mes = partesData[1]
          let ano = partesData[2]
          parameter = parameter + `&dataFinal=${mes}/${dia}/${ano}`
        }



        setPage(1)
        setParameter(parameter)
        parameter = parameter + `&numeroPagina=1&tamanhoPagina=7&usuario=${dataPage.user?.userName}`
        
        getConsultOCM(parameter).then((response)=>{
          console.log(response)
          setValueTable(response.data)
          setLoading(false)
          setTotalPages(Math.ceil(response.data[0].totalRegistros / 7));
        },
        (error) => {
          setLoading(false)
          // const _content =
          //   (error.response && error.response.data) ||
          //   error.message ||
          //   error.toString();
          //   setValueTable([])
          //   setSearch(false)
          //   setErros(true)
          //   setErrorMessage('Nenhum registro encontrado!')
          console.log('error')
  
        })

      }


      useEffect(() => {
        getAffiliated().then(
          (response) => {
            console.log(response.data)
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
              index: 1,
              value: "Encomenda Compras"
            },{
              index: 2,
              value: "Remanejamento de Estoque"
            },{
              index: 3,
              value: "Compra Centralizada"
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

      const chooseRadio = (index:any) =>{
        setValueRadio((prevStates) => {
          // Se o botão clicado já está true, desliga todos
          if (prevStates[index]) {
            return [false, false, false];
          }
          // Caso contrário, define o botão clicado como true e os outros como false
          return prevStates.map((_, i) => i === index);
        });
      }


      const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {

        let newPage = value
        event;
        console.log(event)
        setPage(value)
        // setErros(false)
        // setSearch(true)
        // setCurrentPage(newPage);
    
        let answer = parameter + `&numeroPagina=${value}&tamanhoPagina=7&usuario=${dataPage.user?.userName}`
        getConsultOCM(answer).then(
          (response) => {
            response.data.map((value: any) => {
     
              let year = value.dataPedido.substring(0, 4);
              let month = value.dataPedido.substring(5, 7);
              let day = value.dataPedido.substring(8, 10);
              let hours = value.dataPedido.substring(11, 16);
              let data = `${day}/${month}/${year} ${hours}`
              value.dataPedido = data
            })
            setValueTable(response.data)
            // setAmount(response.data[0].totalRegistros)
            // setSearch(false)
            // setErros(false)
            setTotalPages(Math.ceil(response.data[0].totalRegistros / 7));
            // const startIndex = (currentPage - 1) * 10;
            // const endIndex = startIndex + 10;
            // const currentItems = response.data.slice(startIndex, endIndex);
          },
          // (error) => {
          //   const _content =
          //     (error.response && error.response.data) ||
          //     error.message ||
          //     error.toString();
          //     setValueTable([])
          //     setSearch(false)
          //     setErros(true)
          //     setErrorMessage('Nenhum registro encontrado!')
    
          // }
        );
      };

return (
<>
<Grid container spacing={1} style={{position: 'relative', top: '-40px', marginBottom: '-60px'}}>
<Grid item xs={12} sm={2.5}>
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

<CustomTextField id="password" value={nameOC} onChange={handleChangeOC} type="text" variant="outlined" fullWidth />

  </Grid>

  <Grid item xs={12} sm={2.5}>
 <CustomFormLabel htmlFor="standard-select-currency">Fornecedor</CustomFormLabel>

<CustomTextField id="password" value={nameFornecedor} onChange={handleChangeFornecedor} type="text" variant="outlined" fullWidth />

  </Grid>

  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">CNPJ/CPF</CustomFormLabel>

<CustomTextField id="password"  value={namecnpjCpf} onChange={handleChangecnpjCpf} type="text" variant="outlined" fullWidth />

  </Grid>


  <Grid item xs={12} sm={1.5}>
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
  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Operação</CustomFormLabel>

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
 <CustomFormLabel htmlFor="standard-select-currency">CFOP</CustomFormLabel>

<CustomTextField id="password" value={nameCFOP} onChange={handleChangeCFOP} type="text" variant="outlined" fullWidth />

  </Grid>

  <Grid item xs={12} sm={2} >
 <CustomFormLabel htmlFor="standard-select-currency">Objetivo</CustomFormLabel>

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
 <CustomFormLabel htmlFor="standard-select-currency">Pedido Cliente</CustomFormLabel>

<CustomTextField id="password" value={namePedido} onChange={handleChangePedido} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Usuário</CustomFormLabel>

<CustomTextField id="password" value={nameUser} onChange={handleChangeUser} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Data Inicial</CustomFormLabel>

<CustomTextField id="password" value={nameDataInicial} onChange={handleChangeDataInicial} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Data Final</CustomFormLabel>

<CustomTextField id="password" value={nameDataFinal} onChange={handleChangeDataFinal} type="text" variant="outlined" fullWidth />

  </Grid>
 
</Grid> 
 <Grid container spacing={1} style={{position: 'relative', marginBottom: '-10px'}}>
<Grid item xs={12} sm={3}>
 <CustomFormLabel htmlFor="standard-select-currency">Observação</CustomFormLabel>

<CustomTextField id="password" value={nameObs} onChange={handleChangeObs} type="text" variant="outlined" fullWidth />

  </Grid>

  <Grid item xs={12} sm={4} style={{position: 'relative', marginTop: '0px', border: '1px solid lightgray', height: '85px', top: '22px', borderRadius: '10px'}}>
 
 <Radio  
                    onClick={()=>chooseRadio(0)}
                    checked={valueRadio[0]}
                    value={'teste'}
                    style={{position: 'relative', top: '-14px'}}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'tete' }}
                  />
<label  style={{position: 'relative', top: '-14px'}}>Descrição</label>
<Radio
                    onClick={()=>chooseRadio(1)}
                    checked={valueRadio[1]}
                    style={{position: 'relative', top: '-14px'}}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'tete' }}
                  />
<label  style={{position: 'relative', top: '-14px'}}>EAN</label>
<Radio
                    onClick={()=>chooseRadio(2)}
                    checked={valueRadio[2]}
                    style={{position: 'relative', top: '-14px'}}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'tete' }}
                  />
<label  style={{position: 'relative', top: '-14px'}}>Código</label>
<CustomTextField   style={{position: 'relative', top: '-20px',  width: '98%'}} id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
  </Grid>
  <Grid item xs={12} sm={5} style={{position: 'relative', textAlign: 'center', display: 'flex', justifyContent: 'space-between'}}>
<Button
variant="contained"
color="primary"
type="submit"
style={{position: 'relative', top: '55px', height: '43px', width: '100px'}}
onClick={()=>searchOCM()}
>
Pesquisar
</Button>

<Button
variant="contained"
color="secondary"
type="submit"
style={{position: 'relative', top: '55px', height: '43px', width: '100px'}}
onClick={mudarMensagem}

>
Nova OC
</Button>

<Button
variant="contained"
color="error"
type="submit"
style={{position: 'relative', top: '55px', height: '43px', width: '100px'}}

>
Limpar
</Button>
</Grid>

<BlankCard>

<TableContainer style={{top: '10px', position: 'relative'}}>
  {valueTable.length > 0 ?
    <>
      <Table
        aria-label="custom pagination table"
        sx={{
          whiteSpace: 'nowrap',
        }}
      >
        <TableHead>
          <TableRow style={{ backgroundColor: '#5D87FF', borderRadius: '20px' }}>

            <TableCell>
              <Typography style={{ fontSize: '9pt', fontWeight: '600', textAlign: 'center', }}>FILIAL</Typography>
            </TableCell>
            <TableCell>
              <Typography style={{ fontSize: '9pt', fontWeight: '600', textAlign: 'center', }}>CFOP</Typography>
            </TableCell>
            <TableCell>
              <Typography style={{ fontSize: '9pt', fontWeight: '600', textAlign: 'center', }}>DATA PEDIDO</Typography>
            </TableCell>
            <TableCell>
              <Typography style={{ fontSize: '9pt', fontWeight: '600', textAlign: 'center', }}>FORNECEDOR</Typography>
            </TableCell>
            <TableCell>
              <Typography style={{ fontSize: '9pt', fontWeight: '600', textAlign: 'center', }}>OPERAÇÃO</Typography>
            </TableCell>
            <TableCell>
              <Typography style={{ fontSize: '9pt', fontWeight: '600', textAlign: 'center', }}>PEDIDO</Typography>
            </TableCell>
            <TableCell>
              <Typography style={{ fontSize: '9pt', fontWeight: '600', textAlign: 'center', }}>STATUS</Typography>
            </TableCell>
            <TableCell>
              <Typography style={{ fontSize: '9pt', fontWeight: '600', textAlign: 'center', }}>TOTAL REGISTRO</Typography>
            </TableCell>
            <TableCell>
              <Typography style={{ fontSize: '9pt', fontWeight: '600', textAlign: 'center', }}>VALOR TOTAL</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {valueTable.map((response: any, i:any) => (
            <TableRow key={i}>
              <TableCell>
                <Typography style={{ fontSize: '8pt', textAlign: 'center' }}>{response.filial}</Typography>
              </TableCell>
              <TableCell>
                <Typography style={{ fontSize: '8pt', textAlign: 'center' }}>{response.cfop}</Typography>
              </TableCell>
              <TableCell>
                <Typography style={{ fontSize: '8pt', textAlign: 'center' }}>{response.dataPedido}</Typography>
              </TableCell>
              <TableCell>
                <Typography style={{ fontSize: '8pt', textAlign: 'center' }}>{response.fornecedor}</Typography>
              </TableCell>
              <TableCell>
                <Typography style={{ fontSize: '8pt', textAlign: 'center' }}>{response.operacao}</Typography>
              </TableCell>
              <TableCell>
                <Typography style={{ fontSize: '8pt', textAlign: 'center' }}>{response.pedido}</Typography>
              </TableCell>
              <TableCell>
                <Typography style={{ fontSize: '8pt', textAlign: 'center' }}>{response.status}</Typography>
              </TableCell>
              <TableCell>
                <Typography style={{ fontSize: '8pt', textAlign: 'center' }}>{response.totalRegistros}</Typography>
              </TableCell>
              <TableCell>
                <Typography style={{ fontSize: '8pt', textAlign: 'center' }}>{response.valotTotal}</Typography>
              </TableCell>
              <TableCell>
                <Typography style={{ fontSize: '8pt', textAlign: 'center' }}>{response.statusEstoque}</Typography>
              </TableCell>
              <TableCell>
                <Typography style={{ fontSize: '8pt', textAlign: 'center' }}>{response.valortotalPedido}</Typography>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        </TableFooter>
      </Table>
      <Pagination style={{ position: 'relative', top: '2px', marginBottom: '10px' }}
      count={totalPages} 
      page={page} 
      onChange={handlePageChange}
      boundaryCount={2} // exibe sempre 2 botões de cada lado do atual
      showFirstButton
      showLastButton
      siblingCount={2} // exibe sempre 2 botões de cada lado do atual
      
      color="primary" /> <p>Página atual: {page}</p>

    </>
    : valueTable.length == 0 && totalPages != 1?

      <Alert variant="outlined" style={{top: '50px'}} severity="error">
    Sem registros
  </Alert> 

  : null}
  {loading == true ?  <LoadingSplash /> : false}
 
</TableContainer>
</BlankCard>

 </Grid> 
  </>

);
};
  
export default SearchBuy;
import { useState, useEffect, useContext } from 'react';
import CustomTextField from '../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/theme-elements/CustomFormLabel';
import CustomSelect from '../../components/forms/theme-elements/CustomSelect';
import {CartContext} from "../../App"
import {
  Grid,
  MenuItem,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  Box, 
  Modal,
  Typography,
  IconButton,
  TableBody} from '@mui/material'
  import CloseIcon from '@mui/icons-material/Close';
  import AppContext from './AppContext';
 
import {getCentroCusto, getPlanoContas, getListarCST, getListarNCM, getBuscarOcItem} from "../../services/user.service"
import { Height } from '@mui/icons-material';
 


const SupervisorBuy = () => {
  const context = useContext(AppContext);
    const [nameStatus] = useState(['Sem Plano Conta', 'Sem Centro Custo', 'Sem NCM', 'Sem CST', 'Sem Status', 'Sem Objetivo Transferência'])
    const [planoContas, setPlanoContas] = useState(context.planoContas);
    const [centroCusto, setCentroCusto] = useState(context.centroCusto);
    const [CST, setCST] = useState([]);
    const [NCM, setNCM] = useState([]);
    const [listOc, setListOc] = useState(context.listOc)

    const [open, setOpen] = useState(false);
    let answer = useContext(CartContext)
    const [dataPage, setDataPage] = useState(answer);

    const [itens] = useState<any>([{id: '0', value: 'Bloqueado'},
      {id: '1', value: 'Compra'},
      {id: '3', value: 'Liberado'},
      {id: '4', value: 'Recebido'}]) 

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



      const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
   
      }

      const handleChangeFilial = (event: React.ChangeEvent<HTMLInputElement>) => {
       
      };

      useEffect(() => {
        const status = [{id: 0, value: 'Bloqueado'}, {id:1, value: 'Em Compra'}, {id:3, value: 'liberado'},
          {id:4, value:'Faturado'}, {id:5, value: 'Cancelado'}] 
      


        getCentroCusto().then((response:any)=>{
          setCentroCusto(response.data)
          getPlanoContas().then((response:any)=>{
            setPlanoContas(response.data)
            getListarCST().then((response:any)=>{

              setCST(response.data)
              getListarNCM().then((response:any)=>{
                setNCM(response.data)
       
              })
            })
          })
        })


      }, []);

      const getOc = (item:any) =>{

        getBuscarOcItem(`pedido=${item.pedido}&itemPedido=${item.itemPedido}&usuario=${dataPage.user?.userName}`).then((response:any)=>{
           context.setItem(response.data.itemPedido)
           context.setCodigoStatus2(response.data.codigoProduto)
           context.setCodigoProduto(response.data.eanProduto)
           context.setDescricaoProduto(response.data.descricaoProduto)
           context.setUnidadeMedida(response.data.unidadeMedida)
           context.setCodigoPlanoDeContas(response.data.codigoPlanoDeContas)
           context.setCodigoCentroCusto(response.data.codigoCentroCusto)
           context.setQuantidade(response.data.quantidade)
           context.setPrecoTabela(response.data.precoTabela)
           context.setPercentualDesconto(response.data.percentualDesconto)
           context.setPrecoLiquido(response.data.precoLiquido)
           context.setQuantidadeLiberada(response.data.quantidadeLiberada)
           context.setQuantidadeCancelada(response.data.quantidadeCancelada)
           context.setQuantidadeRecebida(response.data.quantidadeRecebida)
           context.setBaseIcms(response.data.baseIcms)
           context.setValorIcms(response.data.valorIcms)
           context.setValorIpi(response.data.valorIpi)
           context.setValorIcmsSt(response.data.valorIcmsSt)
           context.setPercentualIpi(response.data.percentualIpi)
           context.setBaseIpi(response.data.baseIpi)
           context.setBaseIcmsSt(response.data.baseIcmsSt)
           context.setPercentualIcms(response.data.percentualIcms)
           context.setPercentualIva(response.data.percentualIva)
           context.setTributárioID(response.data.tributarioid)
           context.setClasfiscid(response.data.clasfiscid)
           context.setPercentualIcmsSt(response.data.percentualIcmsSt)
        })

      }

      const handleRowClick = (index:any, item:any) => {

        context.setSelectedRow(index);
        getOc(item);
      };

      const clean = () =>{
        context.setItem('')
        context.setCodigoStatus2('')
        context.setCodigoProduto('')
        context.setDescricaoProduto('')
        context.setUnidadeMedida('')
        context.setCodigoPlanoDeContas(-1)
        context.setCodigoCentroCusto(0)
        context.setQuantidade('')
        context.setPrecoTabela('')
        context.setPercentualDesconto('')
        context.setPrecoLiquido('')
        context.setQuantidadeLiberada('')
        context.setQuantidadeCancelada('')
        context.setQuantidadeRecebida('')
        context.setBaseIcms('')
        context.setValorIcms('')
        context.setValorIpi('')
        context.setValorIcmsSt('')
        context.setPercentualIpi('')
        context.setBaseIpi('')
        context.setBaseIcmsSt('')
        context.setPercentualIcms('')
        context.setPercentualIva('')
        context.setTributárioID(null)
        context.setSelectedRow(null);
        context.setClasfiscid(null)
        context.setPercentualIcmsSt('')
      }

      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxWidth: '600px',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        height: '420px'
      };

    return (
        < >

     <Grid container spacing={1} style={{position: 'relative', top: '-40px', marginBottom: '-10px'}}>
     <TableContainer style={{ maxHeight: listOc.length >= 4 ? 250 : 'auto', overflowY: 'auto' }}>
        <Table>
        <TableHead>
          <TableRow style={{ height: '24px' }}> {/* Ajuste a altura conforme necessário */}
            <TableCell style={{ padding: '4px 8px' }}>
              <Typography align="center" style={{ fontSize: '8pt', margin: 0 }}>Item</Typography>
            </TableCell>
            <TableCell style={{ padding: '4px 8px' }}>
              <Typography align="center" style={{ fontSize: '8pt', margin: 0 }}>Código</Typography>
            </TableCell>
            <TableCell style={{ padding: '4px 8px' }}>
              <Typography align="center" style={{ fontSize: '8pt', margin: 0 }}>EAN</Typography>
            </TableCell>
            <TableCell style={{ padding: 'px 8px' }}>
              <Typography style={{ fontSize: '8pt',  textAlign: 'center' }}>Descrição</Typography>
            </TableCell>
            <TableCell style={{ padding: '4px 8px' }}>
              <Typography align="center" style={{ fontSize: '8pt', margin: 0 }}>Qtde</Typography>
            </TableCell>
            <TableCell align="center" style={{ padding: '4px 8px' }}>
              <Typography style={{ fontSize: '8pt', margin: 0 }}>Unid</Typography>
            </TableCell>
            <TableCell align="center" style={{ padding: '4px 8px' }}>
              <Typography style={{ fontSize: '8pt', margin: 0 }}>Preço Tab</Typography>
            </TableCell>
            <TableCell align="center" style={{ padding: '4px 8px' }}>
              <Typography style={{ fontSize: '8pt', margin: 0 }}>% Desc</Typography>
            </TableCell>
            <TableCell align="center" style={{ padding: '4px 8px' }}>
              <Typography style={{ fontSize: '8pt', margin: 0 }}>Preço Liq</Typography>
            </TableCell>
            <TableCell align="center" style={{ padding: '4px 8px' }}>
              <Typography style={{ fontSize: '8pt', margin: 0 }}>Total</Typography>
            </TableCell>
            <TableCell align="center" style={{ padding: '4px 8px' }}>
              <Typography style={{ fontSize: '8pt', margin: 0 }}>Status</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
          <TableBody>
          {listOc.map((item:any, index: any) => (
          <TableRow key={index} style={{ height: '24px' }}
          sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'gray' },
          backgroundColor: context.selectedRow === index ? 'gray' : 'transparent',
        }}
        onClick={() => handleRowClick(index, item)}
          > {/* Ajuste a altura conforme necessário */}
          <TableCell style={{ textAlign: 'center', fontSize: '8pt', padding: '4px 8px' }}>{item.itemPedido}</TableCell>
          <TableCell style={{ textAlign: 'center', fontSize: '8pt', padding: '4px 8px' }}>{item.codigoProduto}</TableCell>
          <TableCell style={{ textAlign: 'center', fontSize: '8pt', padding: '4px 8px' }}>{item.eanProduto}</TableCell>
          <TableCell style={{ textAlign: 'center', fontSize: '8pt', padding: '4px 8px' }}>{item.descricaoProduto}</TableCell>
          <TableCell style={{ textAlign: 'center', fontSize: '8pt', padding: '4px 8px' }}>{item.quantidade}</TableCell>
          <TableCell style={{ textAlign: 'center', fontSize: '8pt', padding: '4px 8px' }}>{item.unidadeMedida}</TableCell>
          <TableCell style={{ textAlign: 'center', fontSize: '8pt', padding: '4px 8px' }}>{item.precoTabela.toFixed(2)}</TableCell>
          <TableCell style={{ textAlign: 'center', fontSize: '8pt', padding: '4px 8px' }}>{item.percentualDesconto}</TableCell>
          <TableCell style={{ textAlign: 'center', fontSize: '8pt', padding: '4px 8px' }}>{item.precoLiquido.toFixed(2)}</TableCell>
          <TableCell style={{ textAlign: 'center', fontSize: '8pt', padding: '4px 8px' }}>{item.totalItem.toFixed(2)}</TableCell>
          <TableCell style={{ textAlign: 'center', fontSize: '8pt', padding: '4px 8px' }}>{item.statusItem}</TableCell>
        </TableRow>
          ))}
          </TableBody>
 
        </Table>
      </TableContainer>
      
    </Grid> 
    <Grid container spacing={1} style={{position: 'relative', top: '-40px'}}>
    <Grid item xs={12} sm={1}>
 <CustomFormLabel htmlFor="standard-select-currency">Item</CustomFormLabel>

<CustomTextField id="password" value={context.item} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
    <Grid item xs={12} sm={1.5}>
 <CustomFormLabel htmlFor="standard-select-currency">Código</CustomFormLabel>

<CustomTextField id="password" value={context.codigoStatus2} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={1.5}>
 <CustomFormLabel htmlFor="standard-select-currency">Ean</CustomFormLabel>

<CustomTextField id="password" value={context.codigoProduto} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={3}>
 <CustomFormLabel htmlFor="standard-select-currency">Descrição</CustomFormLabel>

<CustomTextField id="password" value={context.descricaoProduto} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={1}>
 <CustomFormLabel htmlFor="standard-select-currency">Unid Méd</CustomFormLabel>

<CustomTextField id="password" value={context.unidadeMedida} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Pl. Contas</CustomFormLabel>

 <CustomSelect
                      value={context.codigoPlanoDeContas}
                      onChange={handleChangeFilial}
                      fullWidth
                      variant="outlined"
                    >
                      <MenuItem value="-1">{nameStatus[0]}</MenuItem>
                      {planoContas.map((option:any) => (
                        <MenuItem key={option.codigoPlanoContas} value={option.codigoPlanoContas}>
                          {option.nomePlanoContas}
                        </MenuItem>
                      ))}
                    </CustomSelect>

  </Grid>
  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Centro Custo</CustomFormLabel>

 <CustomSelect
                      value={context.codigoCentroCusto}
                      onChange={handleChangeFilial}
                      fullWidth
                      variant="outlined"
                    > 
                      <MenuItem value="0">{nameStatus[1]}</MenuItem>
                      {centroCusto.map((option:any) => (
                        <MenuItem key={option.codigoCentroCusto} value={option.codigoCentroCusto}>
                          {option.nomeCentroCusto}
                        </MenuItem>
                      ))}
                    </CustomSelect>

  </Grid>
  
    </Grid>
     <Grid container spacing={1} style={{position: 'relative', top: '-50px'}}>
     <Grid item xs={12} sm={1}>
 <CustomFormLabel htmlFor="standard-select-currency">Qtde</CustomFormLabel>

<CustomTextField id="password" value={context.quantidade} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={1.5}>
 <CustomFormLabel htmlFor="standard-select-currency">Preço Tabela</CustomFormLabel>

<CustomTextField id="password" value={context.precoTabela} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={1.5}>
 <CustomFormLabel htmlFor="standard-select-currency">Desconto</CustomFormLabel>

<CustomTextField id="password" value={context.percentualDesconto} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={1.5}>
 <CustomFormLabel htmlFor="standard-select-currency">P. Líquido</CustomFormLabel>

<CustomTextField id="password" value={context.precoLiquido} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={1.5}>
 <CustomFormLabel htmlFor="standard-select-currency">Qtt Lib</CustomFormLabel>

<CustomTextField id="password" value={context.quantidadeLiberada} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={1.5}>
 <CustomFormLabel htmlFor="standard-select-currency">Qtt Rec</CustomFormLabel>

<CustomTextField id="password" value={context.quantidadeRecebida} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>
  <Grid item xs={12} sm={1.5}>
 <CustomFormLabel htmlFor="standard-select-currency">Qtt Canc</CustomFormLabel>

<CustomTextField id="password" value={context.quantidadeCancelada} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />

  </Grid>

  <Grid item xs={12} sm={2}>
 <CustomFormLabel htmlFor="standard-select-currency">Status</CustomFormLabel>

 <CustomSelect
                      value={context.codigoStatus}
                      onChange={handleChangeFilial}
                      fullWidth
                      variant="outlined"
                    >
                      <MenuItem value="-1">{nameStatus[4]}</MenuItem>
                      {itens.map((option:any) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </CustomSelect>

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
                 onClick={()=>clean()}
              
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

               <Button
                 variant="contained"
                 style={{height: '40px', width: '100px', fontWeight: 600, backgroundColor: 'brown'}}
                 sx={{ mr: 1 }}
                 type="submit"
                 onClick={handleOpen}
               >
                 Impostos
               </Button>
    </Grid>
      </Grid>

      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CustomFormLabel htmlFor="standard-select-currency">CST</CustomFormLabel>
            <CustomSelect
              value={context.tributárioID}
              onChange={handleChangeFilial}
              fullWidth
              variant="outlined"
            >
              <MenuItem value="-1">{nameStatus[3]}</MenuItem>
              {CST.map((option:any) => (
                <MenuItem key={option.codigoCST} value={option.codigoCST}>
                  {option.descricaoCST}
                </MenuItem>
              ))}
            </CustomSelect>
          </Grid>
          <Grid item xs={12} sm={2}>
            <CustomFormLabel htmlFor="standard-select-currency">% Icms</CustomFormLabel>
            <CustomTextField disabled={true} value={context.percentualIcms} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={2}>
            <CustomFormLabel htmlFor="standard-select-currency">Base Icms</CustomFormLabel>
            <CustomTextField disabled={true} value={context.baseIcms} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={2}>
            <CustomFormLabel htmlFor="standard-select-currency">Valor Icms</CustomFormLabel>
            <CustomTextField disabled={true} value={context.valorIcms} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2} style={{position: 'relative', top: '-30px'}}>
          <Grid item xs={12} sm={6}>
            <CustomFormLabel htmlFor="standard-select-currency">NCM</CustomFormLabel>
            <CustomSelect
         
              value={context.clasfiscid}
              onChange={handleChangeFilial}
              fullWidth
              variant="outlined"
            >
              <MenuItem value="-1">{nameStatus[2]}</MenuItem>
              {NCM.map((option:any) => (
                <MenuItem key={option.codigoNCM} value={option.codigoNCM}>
                  {option.descricaoNCM}
                </MenuItem>
              ))}
            </CustomSelect>
          </Grid>
          <Grid item xs={12} sm={2}>
            <CustomFormLabel htmlFor="standard-select-currency">% Ipi</CustomFormLabel>
            <CustomTextField disabled={true} value={context.percentualIpi} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={2}>
            <CustomFormLabel htmlFor="standard-select-currency">% Base Ipi</CustomFormLabel>
            <CustomTextField disabled={true} value={context.baseIpi} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={2}>
            <CustomFormLabel htmlFor="standard-select-currency">Valor Ipi</CustomFormLabel>
            <CustomTextField disabled={true} value={context.valorIpi} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2} style={{position: 'relative', top: '-60px'}}>
          <Grid item xs={12} sm={3}>
            <CustomFormLabel htmlFor="standard-select-currency">ST</CustomFormLabel>
            <CustomTextField disabled={true} value={context.percentualIcmsSt} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomFormLabel htmlFor="standard-select-currency">% Iva</CustomFormLabel>
            <CustomTextField disabled={true} value={context.percentualIva} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
          </Grid>

          <Grid item xs={12} sm={3}>
            <CustomFormLabel htmlFor="standard-select-currency">Base Icms St</CustomFormLabel>
            <CustomTextField disabled={true} value={context.baseIcmsSt} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomFormLabel htmlFor="standard-select-currency">Valor Icms St</CustomFormLabel>
            <CustomTextField disabled={true} value={context.valorIcmsSt} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={3} justifyContent="center" style={{position: 'relative', top: '-50px'}}>
        <Button
            variant="contained"
            color="inherit"
            style={{ height: '40px', width: '100px', fontWeight: 600, backgroundColor: 'green' }}
            sx={{ mr: 1 }}
          >
            Salvar
          </Button>
          <Button
            variant="contained"
            style={{ height: '40px', width: '100px', fontWeight: 600, backgroundColor: 'red' }}
            sx={{ mr: 1 }}
            onClick={handleClose}
          >
            Sair
          </Button>

        </Grid>
      </Box>
    </Modal>
    
        
          </>
  );
};
export default SupervisorBuy;
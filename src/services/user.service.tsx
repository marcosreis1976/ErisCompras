
import axios from "axios";

// import {authHeader, userData} from "../auth/auth-header";
import { userData} from "../auth/auth-header";
import { API_URL } from '../constants/global'



// export const getUserProduct = () => {
//   return axios.get(API_URL + "/Produtos?codeFilial=2&codeCli=1672566&descricao=The History", { headers: authHeader() });
// };



export const getAffiliated = () =>{
  
  return axios.get(API_URL + `/Terceiros/ListarFiliais`);
}

export const getProductCFOP = (data:any) =>{
  return axios.get(API_URL + `/OC/BuscarOC${data}`)
}

export const getCFOP = (data:any) =>{
  return axios.get(API_URL + `/OC/ListarCfops${data}`);
}

export const getNameFornecedor = (data:any) =>{
  return axios.get(API_URL + `/Terceiros/BuscarFornecedorPorNome${data}`)
}

export const getFornecedor = (data:any) =>{
  return axios.get(API_URL + `/Terceiros/BuscarFornecedor${data}`)
}

export const getLocalCobrança = () =>{
  return axios.get(API_URL+'/Financeiro/ListarLocalDeCobranca')
}

export const getTipoCobrança = () =>{
  return axios.get(API_URL+'/Financeiro/ListarTipoCobrancaCP')
}

export const getCondPagamento = () =>{
  return axios.get(API_URL+'/Financeiro/ListarCondicaoPagamento')
}

export const getListSellers = () =>{
  return axios.get(API_URL + "/Terceiros/ListarVendedores");
}

export const getListTransporters = () =>{
  return axios.get(API_URL + "/Terceiros/ListarTransportadoras");
}

export const getListSummary= (Affiliated:Number, user: String) =>{
  return axios.get(API_URL + `/Painel/PainelPedidosResumo?codigoFilial=${Affiliated}&usuario=${user}`);
}

export const getConsultOCM = (data:any) =>{
  return axios.get(API_URL + `/OC/ConsultaOCS?${data}`)
}

export const getOrderPanel = (data:any) =>{
  return axios.get(API_URL + `/Painel/PainelPedidos?${data}`);
}

export const getCentroCusto = () =>{
  return axios.get(API_URL + '/Financeiro/ListarCentroCusto')
}

export const getPlanoContas = () =>{
  return axios.get(API_URL + '/Financeiro/ListarPlanoContas')
}

export const getListarCST = () =>{
  return axios.get(API_URL + '/Produto/ListarCST')
}

export const getListarNCM = () =>{
  return axios.get(API_URL + '/Produto/ListarNCM')
}

export const getBuscarOcParcelamento = (data:any) =>{
  return axios.get(API_URL + `/OC/BuscarOCParcelamento?${data}`)
}

export const getBuscarOcItens = (data:any) =>{
  return axios.get(API_URL + `/OC/ListarOCItens?${data}`)
}

export const getBuscarOcItem = (data:any) =>{
  return axios.get(API_URL + `/OC/BuscarOCItem?${data}`)
}


export const itensRequest:any = [{codigoTerceiro: 0, nomeTerceiro: 'Pendente'}, {codigoTerceiro: 1, nomeTerceiro: 'Liberado para Expedição'}, 
{codigoTerceiro: 2, nomeTerceiro: 'Em Separação'}, {codigoTerceiro: 3, nomeTerceiro: 'Separado'}, {codigoTerceiro: 4, nomeTerceiro: 'Liberado Faturamento'},
{codigoTerceiro: 5, nomeTerceiro: 'Faturado'}, {codigoTerceiro: 6, nomeTerceiro: 'Autorizado Sefaz'}, {codigoTerceiro: 7, nomeTerceiro: 'Erro Autorização'}, 
{codigoTerceiro: 9, nomeTerceiro: 'Etiqueta Liberada'}, 
{codigoTerceiro: 10, nomeTerceiro: 'Etiqueta Impressa'},{codigoTerceiro: 11, nomeTerceiro: 'Despachado'}]

export const itensStock:any = [{codigoTerceiro: 0, nomeTerceiro: 'Sem Reserva'}, 
{codigoTerceiro: 1, nomeTerceiro: '100% Reservado'}, {codigoTerceiro: 3, nomeTerceiro: 'Parcialmente Reservado'}]

 export const values ={
  page: 1,
  user: userData(),
 };




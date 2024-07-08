import React, { createContext, useState, ReactNode } from 'react';


const AppContext = createContext<any>(undefined);


export const AppProvider: React.FC<any> = ({ children }) => {
  const [obsFinanceira, setObsFinanceira] = useState<string>('');
  const [cnpjCpf, setCnpjCpf] = useState<string>('');
  const [codigoCfop, setCodigoCfop] = useState<any>(-1);
  const [codigoFilial, setCodigoFilial] = useState<any>(-1);
  const [codigoFornecedor, setCodigoFornecedor] = useState<string>('');
  
  const [codigoLocalCobranca, setCodigoLocalCobranca] = useState<string>('');
  const [codigoObjetivoTransferencia, setCodigoObjetivoTransferencia] = useState<any>(-1);
  const [codigoStatus, setCodigoStatus] = useState<any>(-1);
  const [codigoTipoCobranca, setCodigoTipoCobranca] = useState<string>('');
  const [codigoTransportadora, setCodigoTransportadora] = useState<any>(-1);
  const [dataEntrega, setDataEntrega] = useState<string>('');
  const [dataPedido, setDataPedido] = useState<string>('');
  const [fornecedor, setFornecedor] = useState<string>('');
  const [isFreteEmbutido, setIsFreteEmbutido] = useState<string>('');
  const [nomeContato, setNomeContato] = useState<string>('');
  const [observacaoFinanceiro, setObservacaoFinanceiro] = useState<string>('');
  const [observacaoOC, setObservacaoOC] = useState<string>('');
  const [pedido, setPedido] = useState<string>('');
  const [pedidoCliente, setPedidoCliente] = useState<string>('');
  const [responsavelFrete, setResponsavelFrete] = useState<string>('');
  const [totalIcms, setTotalIcms] = useState<string>('');
  const [totalIcmsSt, setTotalIcmsSt] = useState<string>('');
  const [totalIpi, setTotalIpi] = useState<string>('');
  const [totalProdutos, setTotalProdutos] = useState<string>('');
  const [totalServicos, setTotalServicos] = useState<string>('');
  const [valorFrete, setValorFrete] = useState<string>('');
  const [valorOutrasDespesas, setValorOutrasDespesas] = useState<string>('');
  const [valorSeguro, setValorSeguro] = useState<string>('');
  const [valorTotal, setValorTotal] = useState<string>('');
  const [contatos, setContatos] = useState<any>([]);
  const [parcelas, setParcelas] = useState<any>([]);
  const [listOc, setListaOc] = useState<any>([]);
  const [valueTableMoc, setValueTableMoc] = useState<any>([]);
  const [totalPageMoc, setTotalPageMoc] = useState<any>(0);
  const [pageMoc, setPageMoc] = useState<any>(0);
  const [pedidoEscolhidoMoc, setPedidoEscolhidoMoc] = useState<any>(0)
  const [nameUser, setNameUser] = useState<any>('');
  const [nameObs, setNameObs] = useState<any>('');
  const [filtroProduto, setFiltroProduto] = useState<any>('');
  const [valueRadio, setValueRadio] = useState<any>([false, false, false])



  const [item, setItem] = useState<any>('');
  const [codigoProduto, setCodigoProduto] = useState<any>('');
  const [codigoStatus2, setCodigoStatus2] = useState<any>('');
  const [descricaoProduto, setDescricaoProduto] = useState<any>('');
  const [unidadeMedida, setUnidadeMedida] = useState<any>('');
  const [codigoPlanoDeContas, setCodigoPlanoDeContas] = useState(-1);
  const [codigoCentroCusto, setCodigoCentroCusto] = useState<any>(0);
  const [quantidade, setQuantidade] = useState<any>('');
  const [precoTabela, setPrecoTabela] = useState<any>('');
  const [percentualDesconto, setPercentualDesconto] = useState<any>('');
  const [precoLiquido, setPrecoLiquido] = useState<any>('');
  const [quantidadeLiberada, setQuantidadeLiberada] = useState<any>('');
  const [quantidadeRecebida, setQuantidadeRecebida] = useState<any>('');
  const [quantidadeCancelada, setQuantidadeCancelada] = useState<any>('');
  const [planoContas, setPlanoContas] = useState([]);
  const [centroCusto, setCentroCusto] = useState([]);
  const [CST, setCST] = useState([]);
  const [NCM, setNCM] = useState([]);
  const [baseIcms, setBaseIcms ] = useState('');
  const [valorIcms, setValorIcms]= useState('');
  const [valorIpi, setValorIpi]= useState('');
  const [valorIcmsSt, setValorIcmsSt]= useState('');
  const [percentualIpi, setPercentualIpi]= useState('');
  const [baseIpi, setBaseIpi]= useState('');
  const [baseIcmsSt, setBaseIcmsSt]= useState('');
  const [percentualIcms, setPercentualIcms]= useState('');
  const [percentualIva, setPercentualIva]= useState('');
  const [selectedRow, setSelectedRow] = useState(null)
  const [tributárioID, setTributárioID] = useState(null)
  const [clasfiscid, setClasfiscid] = useState(null)





 

  return (
    <AppContext.Provider value={{ obsFinanceira, setObsFinanceira, cnpjCpf, setCnpjCpf, codigoCfop, setCodigoCfop,
      codigoFilial, setCodigoFilial, codigoFornecedor, setCodigoFornecedor, codigoLocalCobranca, setCodigoLocalCobranca,
      codigoObjetivoTransferencia, setCodigoObjetivoTransferencia, codigoStatus, setCodigoStatus, codigoTipoCobranca, setCodigoTipoCobranca,
      codigoTransportadora, setCodigoTransportadora, dataEntrega, setDataEntrega, dataPedido, setDataPedido,
      fornecedor, setFornecedor, isFreteEmbutido, setIsFreteEmbutido, nomeContato, setNomeContato, observacaoFinanceiro, setObservacaoFinanceiro,
      observacaoOC, setObservacaoOC, pedido, setPedido, pedidoCliente, setPedidoCliente, responsavelFrete, setResponsavelFrete,
      totalIcms, setTotalIcms, totalIcmsSt, setTotalIcmsSt, totalIpi, setTotalIpi, totalProdutos, setTotalProdutos,
      totalServicos, setTotalServicos, valorFrete, setValorFrete, valorOutrasDespesas, setValorOutrasDespesas, valorSeguro, setValorSeguro,
      valorTotal, setValorTotal, contatos, setContatos, valueTableMoc, setValueTableMoc, totalPageMoc, setTotalPageMoc, pedidoEscolhidoMoc, setPedidoEscolhidoMoc,
      pageMoc, setPageMoc, nameUser, setNameUser, nameObs, setNameObs, valueRadio, setValueRadio, filtroProduto, setFiltroProduto,
      parcelas, setParcelas, listOc, setListaOc, item, setItem, codigoProduto, setCodigoProduto, codigoStatus2, setCodigoStatus2,
      descricaoProduto, setDescricaoProduto, unidadeMedida, setUnidadeMedida, codigoPlanoDeContas, setCodigoPlanoDeContas, codigoCentroCusto, setCodigoCentroCusto,
      quantidade, setQuantidade, precoTabela, setPrecoTabela, percentualDesconto, setPercentualDesconto, precoLiquido, setPrecoLiquido,
      quantidadeLiberada, setQuantidadeLiberada, quantidadeRecebida, setQuantidadeRecebida, quantidadeCancelada, setQuantidadeCancelada, planoContas, setPlanoContas,
      centroCusto, setCentroCusto, CST, setCST, baseIcms, setBaseIcms, valorIcms, setValorIcms, valorIpi, setValorIpi, valorIcmsSt, setValorIcmsSt,
      percentualIpi, setPercentualIpi, baseIpi, setBaseIpi, baseIcmsSt, setBaseIcmsSt, percentualIcms, setPercentualIcms, percentualIva, setPercentualIva,
      NCM, setNCM, selectedRow, setSelectedRow, tributárioID, setTributárioID, clasfiscid, setClasfiscid
     }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
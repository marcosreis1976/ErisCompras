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


  return (
    <AppContext.Provider value={{ obsFinanceira, setObsFinanceira, cnpjCpf, setCnpjCpf, codigoCfop, setCodigoCfop,
      codigoFilial, setCodigoFilial, codigoFornecedor, setCodigoFornecedor, codigoLocalCobranca, setCodigoLocalCobranca,
      codigoObjetivoTransferencia, setCodigoObjetivoTransferencia, codigoStatus, setCodigoStatus, codigoTipoCobranca, setCodigoTipoCobranca,
      codigoTransportadora, setCodigoTransportadora, dataEntrega, setDataEntrega, dataPedido, setDataPedido,
      fornecedor, setFornecedor, isFreteEmbutido, setIsFreteEmbutido, nomeContato, setNomeContato, observacaoFinanceiro, setObservacaoFinanceiro,
      observacaoOC, setObservacaoOC, pedido, setPedido, pedidoCliente, setPedidoCliente, responsavelFrete, setResponsavelFrete,
      totalIcms, setTotalIcms, totalIcmsSt, setTotalIcmsSt, totalIpi, setTotalIpi, totalProdutos, setTotalProdutos,
      totalServicos, setTotalServicos, valorFrete, setValorFrete, valorOutrasDespesas, setValorOutrasDespesas, valorSeguro, setValorSeguro,
      valorTotal, setValorTotal, contatos, setContatos
     }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ChildCard from 'src/components/shared/ChildCard';
import { IconHeart, IconPhone, IconUser } from "@tabler/icons-react";
import CustomCheckbox from '../../components/forms/theme-elements/CustomCheckbox';
import CustomTextField from '../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/theme-elements/CustomFormLabel';
import CustomSelect from '../../components/forms/theme-elements/CustomSelect';
import {
  Typography,
  TableHead,
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableFooter,
  MenuItem,
  FormControlLabel,
  Tooltip,
  TableContainer,
  Fab,
  Pagination,
  Divider,
  Button
} from '@mui/material'



interface TabType {
  value: string;
  icon: JSX.Element;
  label: string;
  disabled?: boolean;
}

const COMMON_TAB: TabType[] = [
  { value: '1', icon: <IconPhone width={20} height={20} />, label: 'Consulta', disabled: false },
  { value: '2', icon: <IconHeart width={20} height={20} />, label: 'Cadastro', disabled: false },
  { value: '3', icon: <IconUser width={20} height={20} />, label: 'Fiscal', disabled: true },
  { value: '4', icon: <IconUser width={20} height={20} />, label: 'Preço', disabled: true },
  { value: '5', icon: <IconUser width={20} height={20} />, label: 'Detalhe', disabled: true }
];

const ListBuy = () => {



  const [value, setValue] = useState('1');
  const [nameTitle, setNameTitle] = useState<any>('');
  const [nameStatus] = useState(['Sem Filial', 'Sem Vendedor', 'Sem Transportadora', 'Sem Status', 'Sem Estoque'])
  const [nameTemplate, setNameTemplate] = useState<any>(-1);


  const handleChangeTemplate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameTemplate(event.target.value);
  }

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameTitle(event.target.value);
  }

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  
  
    return (
        <>
         <Grid item xs={12} sm={6} display="flex" alignItems="stretch">
            <ChildCard >
              <TabContext value={value}>
                <Box>
                  <TabList variant="scrollable"
                    scrollButtons="auto" onChange={handleChange} aria-label="lab API tabs example">
                    {COMMON_TAB.map((tab, index) => (
                      <Tab key={tab.value} label={tab.label} value={String(index + 1)} />
                    ))}
                  </TabList>
                </Box>
                <Divider />
                <Box  mt={2}>
                  {COMMON_TAB.map((panel, index) => (
                    <TabPanel key={panel.value} value={String(index + 1)}>
                      {panel.label == 'Consulta' ? 
                      <>
                      <Grid container spacing={1} style={{position: 'relative', top: '-40px'}}>
                      <Grid item xs={12} sm={6}>
                      <CustomFormLabel htmlFor="standard-select-currency">Status Template</CustomFormLabel>
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
                       <Grid item xs={12} sm={6}>
                      <CustomFormLabel htmlFor="standard-select-currency">Vendedor</CustomFormLabel>
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
                       
                       </Grid>
                       <Grid container spacing={1} style={{position: 'relative', top: '-60px'}}>
                       <Grid item xs={12} sm={2}>
                       <CustomFormLabel htmlFor="standard-select-currency">Código</CustomFormLabel>

                     <CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
           
                        </Grid>
                        <Grid item xs={12} sm={2}>
                        <CustomFormLabel htmlFor="standard-select-currency">ISBN</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
           
                        </Grid>
                        <Grid item xs={12} sm={2}>
                       <CustomFormLabel htmlFor="standard-select-currency">Status</CustomFormLabel>
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
                        <Grid item xs={12} sm={2}>
                       <CustomFormLabel htmlFor="standard-select-currency">Fabricante</CustomFormLabel>
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
                        <Grid item xs={12} sm={2}>
                       <CustomFormLabel htmlFor="standard-select-currency">Seção</CustomFormLabel>
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
                        <Grid item xs={12} sm={2}>
                       <CustomFormLabel htmlFor="standard-select-currency">Sub Seção</CustomFormLabel>
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
                        
                        </Grid>
                        <Grid container spacing={1} style={{position: 'relative', top: '-80px'}}>
                       <Grid item xs={12} sm={2}>
                       <CustomFormLabel htmlFor="standard-select-currency">Situação</CustomFormLabel>
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
                        <Grid item xs={12} sm={2}>
                       <CustomFormLabel htmlFor="standard-select-currency">Origem</CustomFormLabel>
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
                        <Grid item xs={12} sm={2}>
                       <CustomFormLabel htmlFor="standard-select-currency">Tipo de Produto</CustomFormLabel>
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
                        <Grid item xs={12} sm={2}>
                        <CustomFormLabel htmlFor="standard-select-currency">Editora</CustomFormLabel>

<CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
           
                        </Grid>
                        <Grid item xs={12} sm={2}>
                        <CustomFormLabel htmlFor="standard-select-currency">Autor</CustomFormLabel>

                     <CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
           
                        </Grid>
                        <Grid item xs={12} sm={2}>
                       <CustomFormLabel htmlFor="standard-select-currency">Lista de Produto</CustomFormLabel>
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
                        </Grid>
                        <Grid container spacing={1} style={{position: 'relative', top: '-100px'}}>
                     
                     <Grid item xs={12} sm={4}>
                     <CustomFormLabel htmlFor="standard-select-currency">Título</CustomFormLabel>
                     <CustomTextField id="password" value={nameTitle} onChange={handleChangeTitle} type="text" variant="outlined" fullWidth />
                     </Grid>

                     <Grid item xs={12} sm={2}>
                     <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{position: 'relative', top: '55px', height: '43px'}}
                 
                  >
                    Pesquisar
                  </Button>
                  </Grid>

                  <Grid item xs={12} sm={3}>

                  </Grid>
                  <Grid item xs={12} sm={3} style={{display: 'flex' ,justifyContent: 'space-between', position: 'relative'}}>
                     <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    style={{position: 'relative', top: '55px', height: '45px'}}
                 
                  >
                    Novo
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    type="submit"
                    style={{position: 'relative', top: '55px', height: '45px'}}
                 
                  >
                    Limpar
                  </Button>
                  </Grid>

                      </Grid>
                        </>
                      
                      
                      :null}
                    </TabPanel>
                  ))}
                </Box>

              </TabContext>
            </ChildCard>
          </Grid>
        </>
  );
};
  
export default ListBuy;
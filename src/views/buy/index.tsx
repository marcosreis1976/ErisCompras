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


import SearchBuy from './SearchBuy';
import RegisterBuy from './RegisterBuy';
import SupervisorBuy from './SupervisorBuy'
import PriceBuy from './PriceBuy'
import DetailsBuy from './DetailsBuy';


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
  { value: '5', icon: <IconUser width={20} height={20} />, label: 'Detalhes', disabled: true }
];

const ListBuy = () => {



  const [value, setValue] = useState('1');



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
                      <SearchBuy />
                      : panel.label == 'Cadastro' ? 
                      <RegisterBuy />
                      : panel.label == 'Fiscal' ? 
                      <SupervisorBuy />
                      : panel.label == 'Preço' ? 
                      <PriceBuy />
                      : panel.label == 'Detalhes' ? 
                      <DetailsBuy />
                      : null}
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
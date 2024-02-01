import { Box } from "@bigcommerce/big-design";
import { Button, Dropdown, Panel, Small, Link as StyledLink, Table, TableSortDirection } from '@bigcommerce/big-design';
import { MoreHorizIcon } from '@bigcommerce/big-design-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useState } from 'react';
import ErrorMessage from '../../components/error';
import Loading from '../../components/loading';

const rate = ()=>{
    return (
        <Box marginBottom="xxLarge">
            <h1>Hello</h1>
        </Box>
    );
}

export default rate;
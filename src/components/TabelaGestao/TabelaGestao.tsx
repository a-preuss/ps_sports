import React from 'react'
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import sampleData from "../../SAMPLE_DATA";

function getTableSchema (jsonFile: any) {

  if (jsonFile.length === 0) {
    return { rows: [], columns: [] };
  }

  // Definindo as linhas com base no JSON. Usar API quando disponível.
  const rows: GridRowsProp = jsonFile.map((item: any) => ({ id: item.id, ...item }));

  // Definindo as colunas dinamicamente com base nas chaves do JSON
  const columns: GridColDef[] = Object.keys(jsonFile[0]).map((key) => ({
    field: key,
    headerName: key,
    width: 150,
  }));

  // Coluna de ações com botões de editar e excluir. Botões ainda não funcionais.
  columns.push({
    field: 'acoes',
    headerName: 'Ações',
    width: 200,
    sortable: false,
    filterable: false,
    renderCell: (params: GridRenderCellParams) => (
      <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', height: '100%' }}>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={() => console.log('Editar', params.row)}
        >
          Editar
        </Button>
        <Button
          variant="contained"
          size="small"
          color="error"
          onClick={() => console.log('Excluir', params.row)}
        >
          Excluir
        </Button>
      </div>
    ),
  });

  return { rows, columns };
}

// Por enquanto a tabela aparece branca. Preciso implementar um tema do MUI para resolver isso.
function TabelaGestao() {
  const { rows, columns } = getTableSchema(sampleData);

  return (
    <div style={{ height: '40rem', width: '100%' }}>
      <DataGrid sx={{ m: 4 }} rows={rows} columns={columns} />
    </div>
  )
}

export default TabelaGestao
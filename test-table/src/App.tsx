import { useEffect, useState } from "react";

import "./App.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
function App() {
  const jsonData = {
    Entity: {
      title: "Inventory Modify",
      fit: true,
      pagination: true,
      rownumbers: true,
      singleSelect: true,
      dragableColumn: true,
      WindowWidth: "800",
      WindowHeight: "400",
      EnableRemote: true,
      EnableSearch: true,
      DeleteConfirmMessage: "Are you sure?",
      EnableInsert: true,
      EnableUpdate: "false",
      EnableDelete: "false",
      EnableExport: true,
      EnableSecurity: true,
      DefaultPagingIndex: 1,
      sortName: "CreatedOn",
      sortOrder: 2,
      remoteFilter: true,
      EnableFilterBar: true,
      EnableHeaderContextMenu: true,
      IsLoad: true,
      titleEnglish: "Inventory Modify",
      Schema: "wms",
      EntityName: "InventoryModify",
      idField: "InventoryModifyID",
      url: "/api/wms/InventoryModify/GetItems",
      SaveUrl:
        "/Home/Form?EntityName=InventoryModify&AdditionalDataKey=DataEntry",
      DeleteUrl: "/api/wms/InventoryModify/SaveChanges",
      ScriptFile: "/Scripts/entities/wms/InventoryModify.js",
      IsSerialChanges: false,
      buttons: [],
      HelpButtons: [],
      columns: [
        {
          columnID: 1,
          title: "InventoryModifyNumber",
          field: "InventoryModifyNumber",
          ColumnType: 4,
          align: "center",
          sortable: true,
          IsVisible: true,
          TrueText: "Active",
          FalseText: "InActive",
          width: 203,
          Editor: {},
          deltaWidth: 9,
          boxWidth: 194,
          cellClass: "datagrid-cell-c8-InventoryModifyNumber",
          OrderId: 1,
        },
        {
          columnID: 6,
          title: "ProductCode",
          field: "ProductCode",
          ColumnType: 4,
          align: "center",
          sortable: true,
          IsVisible: true,
          TrueText: "Active",
          FalseText: "InActive",
          width: 161,
          Editor: {},
          deltaWidth: 9,
          boxWidth: 152,
          cellClass: "datagrid-cell-c8-ProductCode",
          OrderId: 2,
        },
        {
          columnID: 5,
          title: "Product ",
          field: "ProductName",
          ColumnType: "9",
          align: "center",
          sortable: true,
          IsVisible: true,
          TrueText: "Active",
          FalseText: "InActive",
          width: 199,
          Editor: {},
          deltaWidth: 9,
          boxWidth: 190,
          cellClass: "datagrid-cell-c8-ProductName",
          OrderId: 3,
        },
        {
          columnID: 3,
          title: "LocationCode ",
          field: "LocationCode ",
          ColumnType: "4",
          align: "center",
          sortable: true,
          IsVisible: true,
          TrueText: "Active",
          FalseText: "InActive",
          width: 163,
          Editor: {},
          deltaWidth: 9,
          boxWidth: 154,
          cellClass: "datagrid-cell-c8-LocationCode-",
          OrderId: 4,
        },
        {
          columnID: 4,
          title: "Product Status",
          field: "QuiddityTypeID ",
          ColumnType: "19",
          align: "center",
          sortable: true,
          IsVisible: true,
          TrueText: "Active",
          FalseText: "InActive",
          width: 165,
          Editor: {},
          deltaWidth: 9,
          boxWidth: 156,
          cellClass: "datagrid-cell-c8-QuiddityTypeID-",
          OrderId: 5,
          LookupAdditionalDataKey: "QuiddityType",
        },
        {
          columnID: 12,
          title: "Type",
          field: "InventoryModifyTypeID",
          ColumnType: "19",
          align: "center",
          sortable: true,
          IsVisible: true,
          TrueText: "Active",
          FalseText: "InActive",
          width: 171,
          Editor: {},
          LookupAdditionalDataKey: "InventoryType",
          deltaWidth: 9,
          boxWidth: 162,
          cellClass: "datagrid-cell-c8-InventoryModifyTypeID",
          OrderId: 6,
        },
      ],
      PagerLookups: [],
      Serial: {
        serial: {
          serialPattern: [
            { type: "abbr", value: "M" },
            { type: "field", field: "CreatedOn", format: "yyyyMMdd" },
            { type: "separator", value: "-" },
            { type: "counter", start: "1", step: "1", length: "3" },
          ],
          serialKey: [
            { type: "abbr", value: "M" },
            { type: "field", field: "CreatedOn", format: "yyyyMMdd" },
            { type: "separator", value: "-" },
          ],
        },
        condition: null,
        elseSerial: null,
      },
      SerialField: "InventoryModifyNumber",
    },
  };

  const rowData = [
    {
      InventoryModifyNumber: "M20210925-001",
      ProductCode: "P1001",
      ProductName: "Product A",
      LocationCode: "L001",
      QuiddityTypeID: "Active",
      InventoryModifyTypeID: "Type 1",
    },
    {
      InventoryModifyNumber: "M20210925-002",
      ProductCode: "P1002",
      ProductName: "Product B",
      LocationCode: "L002",
      QuiddityTypeID: "InActive",
      InventoryModifyTypeID: "Type 2",
    },
  ];

  const [columnDefs, setColumnDefs] = useState([]);

  useEffect(() => {
    const columns = jsonData.Entity.columns.map((col) => ({
      headerName: col.title,
      field: col.field,
      align: col.align,
      id: col.OrderId,
      IsVisible: col.IsVisible,
      sortable: col.sortable,
      width: col.width,
      FalseText: col.FalseText,
      TrueText: col.TrueText,
      cellClass: col.cellClass,
      cellStyle: { textAlign: col.align }, // Custom alignment
    }));
    setColumnDefs(columns);
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[800px]">
        <div
          className="ag-theme-quartz" // applying the Data Grid theme
          style={{ height: 500 }} // the Data Grid will fill the size of the parent container
        >
          <AgGridReact rowData={rowData} columnDefs={columnDefs} />
        </div>
      </div>
    </div>
  );
}

export default App;

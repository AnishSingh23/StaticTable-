sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/ColumnListItem",
    "sap/m/Column",
    "sap/m/Text",
    "test/model/formatter"
], function (Controller, ColumnListItem, Column, Text, formatter) {
    "use strict";
    return Controller.extend("test.controller.Main", {
        formatter: formatter,
        onInit: function () {
            var oDemoModel = new sap.ui.model.json.JSONModel();
            oDemoModel.loadData("../model/data.json");
            this.getView().setModel(oDemoModel, "demoModel");

            var oColumnModel = new sap.ui.model.json.JSONModel({
                TableColumns: [
                    { label: "Name", property: "name" }, 
                    { label: "Age", property: "age" }, 
                    { label: "Department", property: "department" }
                ]
            });
            this.getView().setModel(oColumnModel, "columnModel");
        },

        createColumn: function (sId, oContext){
        return new Column({
            header: new Text({ text: oContext.getProperty("label") })
          });
        },
        
        createRow: function (oContext) {
            var that = this
            return new ColumnListItem({
                cells: [
                    new sap.m.Text({ text: "{demoModel>name}" }),

                    new sap.m.ObjectStatus({
                        text: "{demoModel>age}",
                        state: {
                            path: "demoModel>age",
                            formatter: that.formatter.ageState
                        }
                    }),
                    new sap.m.Text({ text: "{demoModel>department}" })
                ]
            });
        },
    });
});
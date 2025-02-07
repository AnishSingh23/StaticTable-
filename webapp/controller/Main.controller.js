sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/ColumnListItem",
    "test/model/Formatter"
], function (Controller, ColumnListItem, Formatter) {
    "use strict";

    return Controller.extend("test.controller.Main", {
        formatter: Formatter,
        onInit: function () {
            var oDemoModel = new sap.ui.model.json.JSONModel();
            oDemoModel.loadData("../model/data.json");
            this.getView().setModel(oDemoModel, "demoModel");
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
        }
        
    });
});
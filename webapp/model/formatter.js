sap.ui.define([], function () {
    "use strict";
    return {
        // Formatter function for determining the state based on age
        ageState: function (age) {
            // Ensure `age` is a number, as sometimes it might not be
            if (isNaN(age)) {
                return sap.ui.core.ValueState.None;  // Default if age is not a number
            }

            // Now return the correct ValueState based on the age value
            if (age < 18) {
                return sap.ui.core.ValueState.Warning;  // Age under 18 - Warning
            } else if (age >= 18 && age <= 40) {
                return sap.ui.core.ValueState.Success;  // Age between 18 and 40 - Success
            } else {
                return sap.ui.core.ValueState.None;  // Age over 40 - No state
            }
        }
    };
});

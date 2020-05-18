<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="utf-8">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="dobpicker.js"></script>
    </head>
    <body>
    <h3>DOB Picker</h3>
<select id="dobday"></select>
    <select id="dobmonth"></select>
    <select id="dobyear"></select>
    <script>
    $(document).ready(function() {
        $.dobPicker({
            daySelector: '#dobday', /* Required */
            monthSelector: '#dobmonth', /* Required */
            yearSelector: '#dobyear', /* Required */
            dayDefault: 'Day', /* Optional */
            monthDefault: 'Month', /* Optional */
            yearDefault: 'Year', /* Optional */
            minimumAge: 12, /* Optional */
            maximumAge: 80 /* Optional */
        });
    });
</script>
</body>
</html>

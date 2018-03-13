/**
 * @author MarkHuang
 * @since  2018/3/08
 */
(function ($) {
    const $dataTable = $('#data_table');
    const jsonObjectKey = ['id', 'value', 'type', 'beforeScript'];
    let countDataTableRow = 0;
    //Init first element
    $dataTable.append(createTableDataElement(countDataTableRow));
    let arr = [
        {
            id: 'my first id',
            value: 'my first value',
            type: 'radio',
            beforeScript: 'console.log("Yoooo")'
        }, {
            id: 5,
            value: 7,
            type: 'checkbox',
            beforeScript: 8
        }
    ]

    /**
     * Inject json data in table
     * @param jsonDataArray json data array
     */
    function injectJsonData(jsonDataArray = {}) {
        jsonDataArray.forEach((jsonObj) => {
            $dataTable.append(createTableDataElement(countDataTableRow));
            jsonObjectKey.forEach((key, index) => {
                console.log(`$(#tab_${countDataTableRow - 1}_${index % 4}).val(${jsonObj[key]})`);
                $dataTable.find(`#tab_${countDataTableRow - 1}_${index % 4}`).val(jsonObj[key]);
            });
        });
    }

    //If user click plus will create new table element string and append in table
    $(document).on('click', '.plus', () => {
        $dataTable.append(createTableDataElement(countDataTableRow))
    });

    /**
     * Create table data element  and set select and input name and id by row
     * @param row row in table
     * @returns {string} new table element string
     */
    function createTableDataElement(row) {
        countDataTableRow++;
        return `
            <tr>
                <td class='plus'>
                      <img class="w1rem" src='./image/plus.png'>
                </td>
                <td>
                       ID : <input type='text' name='tab_${row}_0' id='tab_${row}_0'/>
                </td>
                <td>
                     Value : <input type='text' name='tab_${row}_1' id='tab_${row}_1'/>
                </td>
                <td>Type : 
                        <select id='tab_${row}_2'>
                            <option value='text'>text</option>
                            <option value='checkbox'>checkbox</option>
                            <option value='radio'>radio</option>
                        </select>
                 </td>
                <td>
                        BeforeScript : <input type='text' name='tab_${row}_3' id='tab_${row}_3'/>
                </td>
            </tr>`;
    }

    /**
     * Iterate all elements in table and set in json object array
     * @returns {Array} json object array
     */
    function getJsonObjectArray() {
        let jsonObjectArray = [];
        let jsonObject = {};
        for (let i = 0; i < $dataTable.find('tr').length * 4; i++) {
            jsonObject[jsonObjectKey[i % 4]] = $dataTable.find(`#tab_${~~(i / 4)}_${i % 4}`).val();
            if (i % 4 === 3) {
                jsonObjectArray[jsonObjectArray.length] = jsonObject;
                jsonObject = {};
            }
        }
        return jsonObjectArray;
    }
}(jQuery));

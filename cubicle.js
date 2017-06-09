class Cubicle {

    constructor() {
        this.rows = null;
        this.columns = null;
        this.data = null;
        this.rows_map = {};
        this.columns_map = {};
    }

/********************************* SETTERS ************************************/
    setRows(rows) { this.rows = rows; }
    setColumns(columns) { this.columns = columns; }
    setData(data) { this.data = data; }

/********************************* HELPERS ************************************/
    _replicateArray(array, n) {
        let arrays = Array.apply(null, new Array(n));
        arrays = arrays.map(function() { return array });
        return [].concat.apply([], arrays);
    }

    _transposeArray(array) {
        let transposedArray = [];
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                if (transposedArray[j] === undefined) { transposedArray[j] = []; }
                transposedArray[j].push(array[i][j]);
            }
        }
        return transposedArray;
    }

    _create2DimArray(d1, d2) {
        let arr = [];
        for(let i = 0; i < d2; i++) {
            arr.push(new Array(d1));
        }
        return arr;
    }

/*********************** STRUCTURES TO REPRESENT DATA / AXIS ******************/
    _buildData() {
        let data = this._create2DimArray(this.columns_map.maximumSize, this.rows_map.maximumSize);
        for (let i = 0; i < this.data.length; i++) {
            let colNum = 0, rowNum = 0;
            for (let j = 0; j < this.data[i].fields.length; j++) {
                let field = this.data[i].fields[j];
                if (this.columns_map[field]) { colNum += this.columns_map[field]; }
                else if (this.rows_map[field]) { rowNum += this.rows_map[field]; }
            }
            data[rowNum][colNum] = this.data[i].value;
        }
        return data;
    }

    // Apply buffer (space) if there are multiple fields on an axis
    // Duplicate fields as necessary to create axis
    _buildAxis(type) {
        let arr = [], buffer = 1;
        for (let i = this[type].length - 1; i >= 0; i--) {
            let duplicator = 1, len = this[type][i].values.length, iArr = new Array(len * buffer);
            for (let j = 0; j < len; j++) {
                iArr[j*buffer] = this[type][i].values[j];
                this[type + "_map"][this[type][i].values[j]] = j * buffer; // save value to key in map
            }
            if (i > 0) { // find correct duplicator value
                let remaining = i - 1;
                while (remaining >= 0) {
                    duplicator *= this[type][remaining].values.length;
                    remaining -= 1;
                }
            }
            buffer = buffer * len;
            arr[i] = this._replicateArray(iArr, duplicator);
        }
        this[type + "_map"].maximumSize = arr[arr.length - 1].length; // save maximumSize to map
        if (type === "rows") { arr = this._transposeArray(arr); } // easy way to reuse code
        return arr;
    }

/**************************** CREATE HTML STRING ******************************/

    _htmlBuilder(type) {
        let array;

        if (!this[type] || (type !== "rows" && type !== "columns" && type !== "data")) { console.log(type + " aren't set or specified incorrectly, supported types include 'rows', 'columns' and 'data'"); return; }
        else if (type === "rows" || type === "columns") { array = this._buildAxis(type); }
        else { array = this._buildData(); }

        let html = '<table class="cubicle-' + type + ' bordered centered">';
        for (let i = 0; i < array.length; i++) {
            html += '<tr>';
            for (let j = 0; j < array[i].length; j++) {
                if (array[i][j]) {
                    html += '<td class="cubicle-' + type + '-td">' + array[i][j] + "</td>";
                } else {
                    html += '<td class="cubicle-' + type + '-td"></td>';
                }
            }
            html += '</tr>';
        }
        html += '</table>';
        return html;
    }

/************************ RETURN HTML STRING FOR TABLE ************************/
    getTable() {
        this.rows_map = {};
        this.columns_map = {};
        let columns = this._htmlBuilder("columns");
        let rows = this._htmlBuilder("rows");
        let data = this._htmlBuilder("data");
        return "<div class='cubicle-table'><div class='cubicle-rows-container'>" + rows + "</div>" +
            "<div class='cubicle-columns-container'>" + columns + data +"</div></div>";
    }
}

export default Cubicle
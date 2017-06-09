# cubicleJS
multidimensional table rendering library

This library can be used to help draw multidimensional tables. If you aren't sure what a multidimensional table is feel free to check out:

https://en.wikipedia.org/wiki/Table_(information)#Multi-dimensional_table
http://www.directionsmag.com/entry/creating-and-manipulating-multidimensional-tables-with-locational-data-usin/123565

To use the library, simple import cubicle.js as an es6 module along with cubicle.css. You can then create a new cubicle object and pass it data as so:

this.cubicle = new Cubicle();
this.cubicle.setRows(this.mockData.rows1());
this.cubicle.setColumns(this.mockData.cols1());
this.cubicle.setData(this.mockData.data1());

let html = this.cubicle.getTable();

Check out cubicle.data.js for examples on how to pass in data to the table. The library returns a string of html at the moment that is perfect for frameworks such as React.

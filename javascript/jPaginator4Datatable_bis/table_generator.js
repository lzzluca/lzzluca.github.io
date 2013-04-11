var TableGenerator = function() {};
TableGenerator.prototype = {

    options: {
        nRowsH: 1,              // thead rows number
        nRowsB: 100,            // tbody rows number
        nRowsF: 0,              // tfoot rows number
        nCols: 10,              // columns number
        thContent: "demo head", // th default text
        tdContent: "demo",      // td default text
        fillParent: false,      // the table will fill the parent
        hasRowTitle: false      // adds a th as first cell of every rows
    },

    getHTML: function () {
        return this._generateHTML();
    },

    _generateHTML: function () {
        var optStyle = "";
        if (this.options.fillParent)
            optStyle += "table-layout: fixed; width: 100%; height: 100%;";
        return "<TABLE class = 'table' style = '" + optStyle + "'>" + 
                    this._generateHTMLHead() + 
                    this._generateHTMLBody() +
                    this._generateHTMLFoot() + 
                "</TABLE>";
    },

    _generateHTMLHead: function() {
        var HTML = "<THEAD class = 'thead'>";

        for (var i = 0; i < this.options.nRowsH; i++) {

            HTML += "<TR class = 'trh'>"
            if(this.options.hasRowTitle)
                HTML += "<TH class = 'th corner'>" + /*this.options.thContent*/i + "</TH>";
            for (var j = 0; j < this.options.nCols; j++)
                HTML += "<TH class = 'th'>" + this.options.thContent + "</TH>";
            HTML += "</TR>";

        }

        return HTML += "</THEAD>";
    },
    
    _generateHTMLBody: function() {
        var HTML = "<TBODY class = 'tbody'>";

        for (var i = 0; i < this.options.nRowsB; i++) {

            HTML += "<TR class = 'trb'>"
            if(this.options.hasRowTitle)
                HTML += "<TH class = 'th'>" + /*this.options.thContent*/i + "</TH>";
            for (var j = 0; j < this.options.nCols; j++) {
                HTML += "<TD class = 'tdb'>" + this.options.tdContent + "</TD>";
            }
            HTML += "</TR>";

        }

        return HTML += "</TBODY>";
    },

    _generateHTMLFoot: function() {
        var HTML = "<TFOOT class = 'tfoot'>";

        for (var i = 0; i < this.options.nRowsF; i++) {

            HTML += "<TR class = 'trf'>"
            if(this.options.hasRowTitle)
                HTML += "<TH class = 'th corner'>" + this.options.thContent + "</TH>";
            for (var j = 0; j < this.options.nCols; j++) {
                HTML += "<TD class = 'tdf'>" + this.options.tdContent + "</TD>";
            }
            HTML += "</TR>";

        }

        return HTML += "</TFOOT>";
    }

};

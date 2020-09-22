function UrlQueryBuilder(entry) {
    this.entry = entry;
}

UrlQueryBuilder.prototype.build = function () {
    return '?' + Object.entries(this.entry)
        .map(k => {
            return `${k[0]}=${k[1]}`
        })
        .join('&');
}

module.exports = UrlQueryBuilder;
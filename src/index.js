module.exports = function reverse(n) {
    var nstr = n.toString();
    let bw = ''
    for (var i = nstr.length; i > -1; i--) {
        bw = bw + nstr.charAt(i)
    }
    if (n > 0) { return parseInt(bw) } else {

        return bw.slice(0, -1)
    }
}